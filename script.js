import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    getDocs,
    getDoc,
    doc,
    query,
    orderBy,
    limit,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAB1hdIWpFMfpRxAojYcFMaDjj55WKL1es",
    authDomain: "formulablitzlb.firebaseapp.com",
    projectId: "formulablitzlb",
    storageBucket: "formulablitzlb.firebasestorage.app",
    messagingSenderId: "354009554273",
    appId: "1:354009554273:web:e85989d746f53ef6bbb920",
    measurementId: "G-NMDW0N10KG"
};

// init firebase and firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function sanitiseName(name) {
    return name
        .trim() // removing all whitespace, making all lowercase, and replacing any non lowercase letter or non-number with whitespace
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

// submit score to firestore db
export async function submitScore(name, score) {
    if (!name || name.trim() === "") return; // if there is no name, then we shouldn't submit score.

    const docRef = doc(db, "leaderboard", `${sanitiseName(name)}`)

    const existingDoc = await getDoc(docRef)

    if (!existingDoc.exists() || existingDoc.data().score < score) {
        await setDoc(docRef, {
            name: name,
            score: score,
            time: serverTimestamp()
        })
    }



}

export async function loadLeaderboard() {
    const leaderboardList = document.getElementById("leaderboard-list")
    if (!leaderboardList) return;

    leaderboardList.innerHTML = "<li>Loading...</li>";

    const q = query(
        collection(db, "leaderboard"),
        orderBy("score", "desc"), //to get scores in descending order
        limit(10) // you can't be in the hall of fame if you're not in the top 10 :)
    );

    const snapshot = await getDocs(q);
    leaderboardList.innerHTML = "";

    if (snapshot.length === 0) {
        const ohno = document.createElement("p");
        ohno.textContent = "well, it looks like nobody's been playing formula blitz..."
        leaderboardList.appendChild();
    } else {

        snapshot.docs.forEach((doc, index) => {
            const data = doc.data();

            const li = document.createElement("li");
            const hr = document.createElement("hr")

            console.log(index)

            if (index == 0) {
                li.textContent = `${data.name} - ${data.score}`;
                hr.classList.add("lbline")
                hr.style.borderTop = "1.5px solid gold";
            }
            if (index == 1) {
                li.textContent = `${data.name} - ${data.score}`;
                hr.classList.add("lbline")
                hr.style.borderTop = "1.5px solid silver";
            }
            if (index == 2) {
                li.textContent = `${data.name} - ${data.score}`;
                hr.classList.add("lbline")
                hr.style.borderTop = "1.5px solid #cd7f32";
            } else {
                li.textContent = `${data.name} - ${data.score}`;
                hr.classList.add("lbline")
            }


            leaderboardList.appendChild(li)
            leaderboardList.appendChild(hr)
        });
    }
}
