import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// 🔐 OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const firebaseConfig = {
  apiKey: "AIzaSyCnVnqCC9iOzDWFzMTyAF9SNBr1SH7F3C8",
  authDomain: "aibe-c0c91.firebaseapp.com",
  projectId: "aibe-c0c91",
  storageBucket: "aibe-c0c91.firebasestorage.app",
  messagingSenderId: "300844998100",
  appId: "1:300844998100:web:97e0de9de4eec1be088a41",
  measurementId: "G-9Q5RKYT5M3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getEmbedding(text) {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}

async function embedAllParts() {
  const snap = await getDocs(collection(db, "Spare_parts"));
  for (const docSnap of snap.docs) {
    const data = docSnap.data();
    const id = docSnap.id;

    const text = `${data.name || ""} ${data.description || ""} ${data.equipment || ""}`;
    const embedding = await getEmbedding(text);

    await updateDoc(doc(db, "Spare_parts", id), {
      embedding,
    });

    console.log(`✅ Embedded: ${data.name} (${id})`);
  }
}

embedAllParts().then(() => {
  console.log("✅ All parts embedded.");
});
