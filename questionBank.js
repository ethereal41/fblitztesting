/* ==========================================================
   QUESTION POOL
   Every fact below is taken DIRECTLY from one of the seven
   reference images supplied. Distractors are deliberately
   plausible (sign flips, swapped functions, off-by-one)
   to test genuine recall — but the CORRECT answer is always
   exactly what the reference card says.
   ========================================================== */

export const QUESTIONS = [
  /* ---------- DOUBLE ANGLES (Image 1) ---------- */
  {
    topic: 'Double Angles',
    verb: 'Expand',
    expr: '\\sin(2A)',
    hint: 'Double angle formula',
    correct: '2\\sin A \\cos A',
    distractors: ['2\\cos A \\sin A - 1', '\\sin^2 A - \\cos^2 A', '2\\sin A - 2\\cos A']
  },
  {
    topic: 'Double Angles',
    verb: 'Expand',
    expr: '\\cos(2A)',
    hint: 'In terms of cos² and sin²',
    correct: '\\cos^2 A - \\sin^2 A',
    distractors: ['\\sin^2 A - \\cos^2 A', '2\\sin A \\cos A', '1 - 2\\cos^2 A']
  },
  {
    topic: 'Double Angles',
    verb: 'Rewrite',
    expr: '\\cos(2A) \\text{ using only } \\cos^2 A',
    hint: '',
    correct: '2\\cos^2 A - 1',
    distractors: ['1 - 2\\cos^2 A', '2\\cos^2 A + 1', '\\cos^2 A - 1']
  },
  {
    topic: 'Double Angles',
    verb: 'Rewrite',
    expr: '\\cos(2A) \\text{ using only } \\sin^2 A',
    hint: '',
    correct: '1 - 2\\sin^2 A',
    distractors: ['2\\sin^2 A - 1', '1 + 2\\sin^2 A', '\\sin^2 A - 1']
  },
  {
    topic: 'Double Angles',
    verb: 'Expand',
    expr: '\\tan(2A)',
    hint: '',
    correct: '\\dfrac{2\\tan A}{1 - \\tan^2 A}',
    distractors: ['\\dfrac{2\\tan A}{1 + \\tan^2 A}', '\\dfrac{\\tan A}{1 - \\tan^2 A}', '\\dfrac{1 - \\tan^2 A}{2\\tan A}']
  },

  /* ---------- PYTHAGOREAN IDENTITIES (Image 6) ---------- */
  {
    topic: 'Pythagorean',
    verb: 'Complete the identity',
    expr: '\\sin^2\\theta + \\cos^2\\theta = \\,?',
    hint: '',
    correct: '1',
    distractors: ['0', '2', '\\sec^2\\theta']
  },
  {
    topic: 'Pythagorean',
    verb: 'Complete the identity',
    expr: '1 + \\tan^2\\theta = \\,?',
    hint: '',
    correct: '\\sec^2\\theta',
    distractors: ['\\csc^2\\theta', '\\cot^2\\theta', '\\tan^2\\theta - 1']
  },
  {
    topic: 'Pythagorean',
    verb: 'Complete the identity',
    expr: '1 + \\cot^2\\theta = \\,?',
    hint: '',
    correct: '\\csc^2\\theta',
    distractors: ['\\sec^2\\theta', '1 - \\tan^2\\theta', '\\cot^2\\theta - 1']
  },

  /* ---------- DERIVATIVES (Image 2) ---------- */
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: 'x^n',
    hint: '',
    correct: 'nx^{n-1}',
    distractors: ['\\dfrac{x^{n+1}}{n+1}', 'nx^n', 'x^{n-1}']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: 'e^{kx}',
    hint: '',
    correct: 'ke^{kx}',
    distractors: ['e^{kx}', '\\dfrac{1}{k}e^{kx}', 'kxe^{kx-1}']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: 'a^x',
    hint: '',
    correct: 'a^x \\ln a',
    distractors: ['xa^{x-1}', '\\dfrac{a^x}{\\ln a}', 'a^x']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\ln x',
    hint: '',
    correct: '\\dfrac{1}{x}',
    distractors: ['x \\ln x', '\\dfrac{1}{x \\ln x}', '-\\dfrac{1}{x}']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\sin(kx)',
    hint: '',
    correct: 'k\\cos(kx)',
    distractors: ['-k\\cos(kx)', '\\cos(kx)', 'k\\sin(kx)']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\cos(kx)',
    hint: 'Mind the sign',
    correct: '-k\\sin(kx)',
    distractors: ['k\\sin(kx)', '-\\sin(kx)', 'k\\cos(kx)']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\tan(kx)',
    hint: '',
    correct: 'k\\sec^2(kx)',
    distractors: ['\\sec^2(kx)', '-k\\csc^2(kx)', 'k\\tan^2(kx)']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\sec x',
    hint: '',
    correct: '\\sec x \\tan x',
    distractors: ['-\\csc x \\cot x', '\\sec^2 x', '\\tan x']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\csc x',
    hint: 'Mind the sign',
    correct: '-\\csc x \\cot x',
    distractors: ['\\csc x \\cot x', '\\sec x \\tan x', '-\\cot^2 x']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\cot x',
    hint: '',
    correct: '-\\csc^2 x',
    distractors: ['\\csc^2 x', '-\\sec^2 x', '\\sec x \\tan x']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\arcsin x',
    hint: '',
    correct: '\\dfrac{1}{\\sqrt{1 - x^2}}',
    distractors: ['\\dfrac{-1}{\\sqrt{1 - x^2}}', '\\dfrac{1}{1 + x^2}', '\\dfrac{1}{\\sqrt{x^2 - 1}}']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\arccos x',
    hint: 'Mind the sign',
    correct: '\\dfrac{-1}{\\sqrt{1 - x^2}}',
    distractors: ['\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{-1}{1 + x^2}', '\\dfrac{1}{\\sqrt{1 + x^2}}']
  },
  {
    topic: 'Derivative',
    verb: 'Differentiate',
    expr: '\\arctan x',
    hint: '',
    correct: '\\dfrac{1}{1 + x^2}',
    distractors: ['\\dfrac{1}{\\sqrt{1 - x^2}}', '\\dfrac{1}{1 - x^2}', '\\dfrac{-1}{1 + x^2}']
  },

  /* ---------- STANDARD INTEGRALS (Image 3) ---------- */
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: 'x^n \\quad (n \\neq -1)',
    hint: '+ c',
    correct: '\\dfrac{x^{n+1}}{n+1} + c',
    distractors: ['nx^{n-1} + c', '\\dfrac{x^{n-1}}{n-1} + c', '\\dfrac{x^n}{n} + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\dfrac{1}{x}',
    hint: '+ c',
    correct: '\\ln|x| + c',
    distractors: ['\\ln x + c', '-\\dfrac{1}{x^2} + c', '\\dfrac{1}{\\ln x} + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: 'e^{kx}',
    hint: '+ c',
    correct: '\\dfrac{1}{k}e^{kx} + c',
    distractors: ['ke^{kx} + c', 'e^{kx} + c', '\\dfrac{1}{k+1}e^{kx} + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\cos(kx)',
    hint: '+ c',
    correct: '\\dfrac{1}{k}\\sin(kx) + c',
    distractors: ['-\\dfrac{1}{k}\\sin(kx) + c', 'k\\sin(kx) + c', '\\sin(kx) + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\sin(kx)',
    hint: 'Mind the sign · + c',
    correct: '-\\dfrac{1}{k}\\cos(kx) + c',
    distractors: ['\\dfrac{1}{k}\\cos(kx) + c', '-k\\cos(kx) + c', '-\\cos(kx) + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\sec^2(kx)',
    hint: '+ c',
    correct: '\\dfrac{1}{k}\\tan(kx) + c',
    distractors: ['k\\tan(kx) + c', '-\\dfrac{1}{k}\\cot(kx) + c', '\\tan(kx) + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\csc^2(kx)',
    hint: 'Mind the sign · + c',
    correct: '-\\dfrac{1}{k}\\cot(kx) + c',
    distractors: ['\\dfrac{1}{k}\\cot(kx) + c', '\\dfrac{1}{k}\\tan(kx) + c', '-k\\cot(kx) + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\tan x',
    hint: '+ c · derive via reverse chain on sin/cos',
    correct: '\\ln|\\sec x| + c',
    distractors: ['\\ln|\\sin x| + c', '\\ln|\\cos x| + c', '\\sec^2 x + c']
  },
  {
    topic: 'Integral',
    verb: 'Integrate',
    expr: '\\cot x',
    hint: '+ c',
    correct: '\\ln|\\sin x| + c',
    distractors: ['\\ln|\\cos x| + c', '-\\ln|\\sin x| + c', '-\\csc^2 x + c']
  },

  /* ---------- BY PARTS / REVERSE CHAIN (Image 4) ---------- */
  {
    topic: 'By Parts',
    verb: 'State the formula',
    expr: '\\int u\\,\\dfrac{dv}{dx}\\,dx = \\,?',
    hint: 'Integration by parts',
    correct: 'uv - \\int v\\,\\dfrac{du}{dx}\\,dx',
    distractors: ['uv + \\int v\\,\\dfrac{du}{dx}\\,dx', '\\int v\\,\\dfrac{du}{dx}\\,dx - uv', 'uv - \\int u\\,\\dfrac{dv}{dx}\\,dx']
  },
  {
    topic: 'By Parts',
    verb: 'Integrate using by parts',
    expr: '\\int \\ln x \\, dx',
    hint: 'Take u = ln x, dv/dx = 1',
    correct: 'x\\ln x - x + c',
    distractors: ['x\\ln x + x + c', '\\ln x - x + c', '\\dfrac{(\\ln x)^2}{2} + c']
  },
  {
    topic: 'Reverse Chain',
    verb: 'Apply reverse chain',
    expr: '\\int f\'(x)\\,[f(x)]^n \\, dx',
    hint: '+ c',
    correct: '\\dfrac{[f(x)]^{n+1}}{n+1} + c',
    distractors: ['\\dfrac{[f(x)]^{n-1}}{n-1} + c', 'n[f(x)]^{n-1} + c', '[f(x)]^{n+1}\\,f\'(x) + c']
  },
  {
    topic: 'Reverse Chain',
    verb: 'Apply reverse chain',
    expr: '\\int \\dfrac{f\'(x)}{f(x)} \\, dx',
    hint: '+ c',
    correct: '\\ln|f(x)| + c',
    distractors: ['\\ln|f\'(x)| + c', '\\dfrac{1}{f(x)} + c', '-\\dfrac{f\'(x)}{[f(x)]^2} + c']
  },
  {
    topic: 'Trig Powers',
    verb: 'Rewrite for integration',
    expr: '\\cos^2 x',
    hint: 'Use a double angle',
    correct: '\\dfrac{1}{2}(1 + \\cos 2x)',
    distractors: ['\\dfrac{1}{2}(1 - \\cos 2x)', '\\dfrac{1}{2}(1 + \\sin 2x)', '\\dfrac{1}{2}(\\cos 2x - 1)']
  },
  {
    topic: 'Trig Powers',
    verb: 'Rewrite for integration',
    expr: '\\sin^2 x',
    hint: 'Use a double angle',
    correct: '\\dfrac{1}{2}(1 - \\cos 2x)',
    distractors: ['\\dfrac{1}{2}(1 + \\cos 2x)', '\\dfrac{1}{2}(1 - \\sin 2x)', '\\dfrac{1}{2}(\\cos 2x - 1)']
  },

  /* ---------- SUVAT (Image 5) ---------- */
  {
    topic: 'SUVAT',
    verb: 'Formula for final velocity',
    expr: 'v = \\,?',
    hint: 'No s involved',
    correct: 'u + at',
    distractors: ['u - at', 'ut + \\tfrac{1}{2}at^2', 'u^2 + 2as']
  },
  {
    topic: 'SUVAT',
    verb: 'Displacement using u, a, t',
    expr: 's = \\,?',
    hint: 'No v',
    correct: 'ut + \\tfrac{1}{2}at^2',
    distractors: ['vt - \\tfrac{1}{2}at^2', '\\tfrac{1}{2}(u + v)t', 'u + at']
  },
  {
    topic: 'SUVAT',
    verb: 'Displacement using v, a, t',
    expr: 's = \\,?',
    hint: 'No u',
    correct: 'vt - \\tfrac{1}{2}at^2',
    distractors: ['vt + \\tfrac{1}{2}at^2', 'ut + \\tfrac{1}{2}at^2', '\\tfrac{1}{2}(u + v)t']
  },
  {
    topic: 'SUVAT',
    verb: 'Displacement using u, v, t',
    expr: 's = \\,?',
    hint: 'Average velocity × time',
    correct: '\\tfrac{1}{2}(u + v)t',
    distractors: ['(u + v)t', '\\tfrac{1}{2}(v - u)t', 'ut + vt']
  },
  {
    topic: 'SUVAT',
    verb: 'Equation with no t',
    expr: 'v^2 = \\,?',
    hint: '',
    correct: 'u^2 + 2as',
    distractors: ['u^2 - 2as', 'u^2 + 2at', '(u + at)^2']
  },

  /* ---------- AP / GP / BINOMIAL (Image 7) ---------- */
  {
    topic: 'AP',
    verb: 'nth term of an AP',
    expr: 'u_n = \\,?',
    hint: 'First term a, common difference d',
    correct: 'a + (n-1)d',
    distractors: ['ar^{n-1}', 'a + nd', 'an + d']
  },
  {
    topic: 'AP',
    verb: 'Sum of n terms (AP)',
    expr: 'S_n = \\,?',
    hint: 'In terms of a, d, n',
    correct: '\\tfrac{n}{2}\\bigl(2a + (n-1)d\\bigr)',
    distractors: ['\\tfrac{n}{2}\\bigl(a + (n-1)d\\bigr)', 'n\\bigl(2a + (n-1)d\\bigr)', '\\tfrac{a(1 - r^n)}{1 - r}']
  },
  {
    topic: 'GP',
    verb: 'nth term of a GP',
    expr: 'u_n = \\,?',
    hint: 'First term a, common ratio r',
    correct: 'ar^{n-1}',
    distractors: ['a + (n-1)r', 'ar^n', 'a(r-1)^{n-1}']
  },
  {
    topic: 'GP',
    verb: 'Sum of n terms (GP)',
    expr: 'S_n = \\,?',
    hint: '',
    correct: '\\dfrac{a(1 - r^n)}{1 - r}',
    distractors: ['\\dfrac{a(1 + r^n)}{1 - r}', '\\dfrac{a(r^n - 1)}{r + 1}', '\\dfrac{a}{1 - r}']
  },
  {
    topic: 'GP',
    verb: 'Sum to infinity (|r| < 1)',
    expr: 'S_\\infty = \\,?',
    hint: '',
    correct: '\\dfrac{a}{1 - r}',
    distractors: ['\\dfrac{a}{1 + r}', '\\dfrac{a(1 - r)}{r}', '\\dfrac{1}{1 - r}']
  },
  {
    topic: 'Binomial',
    verb: 'Convergence condition for (1+x)ⁿ, n fractional',
    expr: '\\text{Valid for }\\,?',
    hint: '',
    correct: '|x| < 1',
    distractors: ['|x| > 1', '|x| \\leq 1', 'x > 0']
  },
  {
    topic: 'Binomial',
    verb: 'Third term of (1+x)ⁿ expansion',
    expr: '(1+x)^n = 1 + nx + \\,? \\,+ \\dots',
    hint: 'n fractional/negative',
    correct: '\\dfrac{n(n-1)}{2!}\\,x^2',
    distractors: ['\\dfrac{n(n+1)}{2!}\\,x^2', '\\dfrac{n!}{2!(n-2)!}\\,x^2', 'n(n-1)\\,x^2']
  },
  {
    topic: 'Binomial',
    verb: 'Convergence for (a + bx)ⁿ',
    expr: '\\text{Valid for }\\,?',
    hint: 'After factoring out aⁿ',
    correct: '\\left|\\tfrac{bx}{a}\\right| < 1',
    distractors: ['\\left|\\tfrac{ax}{b}\\right| < 1', '|bx| < 1', '|x| < a']
  }
];