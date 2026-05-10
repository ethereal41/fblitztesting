/* ==========================================================
   GAME ENGINE
   ========================================================== */

const TOTAL_TIME = 60;
let timeLeft = TOTAL_TIME;
let score = 0;
let streak = 0;
let bestStreak = 0;
let correctCount = 0;
let answeredCount = 0;
let qNum = 0;
let timer = null;
let locked = false;
let currentQ = null;
let recentTopics = [];
let lastQuestion;
let scoreSubmitted = false

import { QUESTIONS } from "./questionBank.js";
import { submitScore, loadLeaderboard } from "./leaderboard.js";

const $ = id => document.getElementById(id);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestion() {
  // Avoid showing the same topic 3 times in a row
  let pool = QUESTIONS;
  // check if the recentTopics array has a length of two or greater, and if the topics are equal
  if (recentTopics.length >= 2 && recentTopics[0] === recentTopics[1]) {
    // the question pool is now only questions that are not that topic
    pool = QUESTIONS.filter(q => q.topic !== recentTopics[0]);
  }

  pool = pool.filter(q => q !== lastQuestion); // ensure question isn't repeated

  let q = pool[Math.floor(Math.random() * pool.length)];

  // do this so we can later check if topic has been repeated twice
  recentTopics.unshift(q.topic);

  // ensure recentTopics array length does not exceed 2
  if (recentTopics.length > 2) recentTopics.pop();
  lastQuestion = q;
  return q;
}

function renderTeX(target, tex) {
  target.innerHTML = '';
  try {
    katex.render(tex, target, { throwOnError: false, displayMode: false });
  } catch (e) {
    target.textContent = tex;
  }
}

function showQuestion() {
  locked = false;
  qNum++;
  $('qNum').textContent = qNum;

  currentQ = pickQuestion();

  // Topic tag + verb
  $('topicTag').textContent = currentQ.topic;
  $('verb').innerHTML = currentQ.verb.replace(/Differentiate|Integrate/i, m => `<em>${m}</em>`);

  // Expression
  if (currentQ.expr) {
    renderTeX($('expr'), currentQ.expr);
    $('expr').style.display = '';
  } else {
    $('expr').style.display = 'none';
  }

  // Hint
  $('hint').textContent = currentQ.hint || '';

  // Build options
  const optsContainer = $('options');
  optsContainer.innerHTML = '';
  const allOpts = shuffle([currentQ.correct, ...currentQ.distractors]);
  const keys = ['A', 'B', 'C', 'D'];

  allOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.dataset.value = opt;
    btn.innerHTML = `<span class="key">${keys[i]}</span><span class="body"></span>`;
    renderTeX(btn.querySelector('.body'), opt);
    btn.addEventListener('click', () => onAnswer(btn, opt));
    optsContainer.appendChild(btn);
  });

  // Reset card facing
  $('card').classList.remove('flip');
}

function onAnswer(btn, value) {
  if (locked) return;
  locked = true;

  const isCorrect = value === currentQ.correct;
  answeredCount++;

  // Highlight chosen + correct
  document.querySelectorAll('.opt').forEach(b => {
    b.disabled = true;
    if (b.dataset.value === currentQ.correct) b.classList.add('right');
  });
  if (!isCorrect) btn.classList.add('wrong');

  // Update meters + popup
  const popup = $('popup');
  popup.classList.remove('show', 'good', 'bad');
  void popup.offsetWidth;

  if (isCorrect) {
    correctCount++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    const bonus = streak >= 5 ? 3 : streak >= 3 ? 2 : 1;
    score += bonus;
    popup.textContent = bonus > 1 ? `+${bonus} · ×${streak}` : `+${bonus}`;
    popup.classList.add('show', 'good');

    $('backFace').classList.remove('wrong');
    $('backFace').classList.add('correct');
    $('stamp').textContent = streak >= 5 ? 'On fire!' : streak >= 3 ? 'Streak!' : 'Correct';
  } else {
    streak = 0;
    popup.textContent = '✗';
    popup.classList.add('show', 'bad');
    $('card').classList.add('shake');
    setTimeout(() => $('card').classList.remove('shake'), 400);

    $('backFace').classList.remove('correct');
    $('backFace').classList.add('wrong');
    $('stamp').textContent = 'Wrong';
  }

  renderTeX($('truth'), currentQ.correct);

  $('scoreVal').textContent = score;
  $('streakVal').textContent = streak;

  // Flip after a beat, then load next
  setTimeout(() => {
    $('card').classList.add('flip');
  }, 350);

  setTimeout(() => {
    if (timeLeft > 0) showQuestion();
  }, 1200);
}

function tick() {
  timeLeft -= 0.1; // CHANGE BACK TO 0.1
  if (timeLeft <= 0) {
    timeLeft = 0;
    endGame();
  }
  $('timeVal').textContent = Math.ceil(timeLeft);
  $('timeFill').style.transform = `scaleX(${timeLeft / TOTAL_TIME})`;
  if (timeLeft <= 10) $('meterTime').classList.add('warn');
}

function startGame() {
  // reset state
  timeLeft = TOTAL_TIME;
  score = 0;
  streak = 0;
  bestStreak = 0;
  correctCount = 0;
  answeredCount = 0;
  qNum = 0;
  recentTopics = [];
  scoreSubmitted = false;

  $('player-name').removeAttribute("disabled");
  $('submit-score').removeAttribute("disabled");


  $('scoreVal').textContent = '0';
  $('streakVal').textContent = '0';
  $('timeVal').textContent = TOTAL_TIME;
  $('timeFill').style.transform = 'scaleX(1)';
  $('meterTime').classList.remove('warn');

  $('startOverlay').classList.add('hidden');
  $('endOverlay').classList.add('hidden');

  showQuestion();

  if (timer) clearInterval(timer);
  timer = setInterval(tick, 100);
}

function endGame() {
  clearInterval(timer);
  timer = null;
  locked = true;

  // Disable any open options
  document.querySelectorAll('.opt').forEach(b => b.disabled = true);

  $('finalScore').textContent = score;
  $('endCorrect').textContent = correctCount;
  $('endStreak').textContent = bestStreak;
  const acc = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);
  $('endAcc').textContent = acc + '%';

  // Rank message
  let rank = 'Final Score';
  let msg = "Time's up. Here's how it went.";
  if (score >= 30)      { rank = '⚡ Untouchable'; msg = "Genuinely scary recall. Are you the mark scheme?"; }
  else if (score >= 22) { rank = '★ Excellent';    msg = "That's exam-day fluency. Sharp."; }
  else if (score >= 15) { rank = '◆ Strong';       msg = "Solid command. A little polish on the edge cases."; }
  else if (score >= 8)  { rank = '◇ Building';     msg = "The shapes are there — drill the trickier sign-flips."; }
  else                  { rank = '○ Warming up';   msg = "Run it back. The first one is always slowest."; }
  $('endRank').textContent = rank;
  $('endMessage').textContent = msg;

  $('endOverlay').classList.remove('hidden');
}

window.addEventListener("DOMContentLoaded", loadLeaderboard);

document.addEventListener('DOMContentLoaded', () => {
  $('startBtn').addEventListener('click', startGame);
  $('againBtn').addEventListener('click', startGame);
  $('submit-score').addEventListener('click', async () => {
    if (!scoreSubmitted) {
      const name = $('player-name').value;
      await submitScore(name, score);
      // alert("score submitted!");
      scoreSubmitted = true;
      $('player-name').disabled = "true";
      // $('player-name').style.display = "none";
      $('submit-score').disabled = "true";
      // $('submit-score').style.display = "none";
      $('score-input-label').innerText="score submitted!";
    } else {
      alert("you have already submitted a score! you're pretty smart for trying to re-enable the form though. this page will now refresh.")
      location.reload();
    }
  });

  // Keyboard A/B/C/D
  document.addEventListener('keydown', (e) => {
    if (locked) return;
    const map = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 };
    const idx = map[e.key.toLowerCase()];
    if (idx !== undefined) {
      const opts = document.querySelectorAll('.opt');
      if (opts[idx]) opts[idx].click();
    }
  });
});
