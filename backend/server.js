require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { ImportFileOperation } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

// 🔥 Slight randomness
function vary(emoji) {
  const pool = ["😊","🤔","❓","😴"];
  return Math.random() < 0.2
    ? pool[Math.floor(Math.random()*4)]
    : emoji;
}


// 🧠 AI ANALYSIS
async function analyzeText(text) {
  try {
    const prompt = `
You are STRICTLY evaluating a teacher explanation.

Rules:
- Bad explanation → scores 0–3
- Average → 4–6
- Excellent → 7–10

Explanation:
"${text}"

Return ONLY JSON:
{
  "clarity": number,
  "completeness": number,
  "engagement": number
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const content = response.text();

    let scores;

    try {
      const clean = content.replace(/```json|```/g, "").trim();
      scores = JSON.parse(clean);

      console.log("INPUT:", text);
      console.log("AI SCORES:", scores);
    } catch {
      throw new Error("Invalid JSON from Gemini");
    }

    // 🔥 RULE-BASED OVERRIDE (VERY IMPORTANT)
    const lower = text.toLowerCase();

    if (lower.length < 30) {
      scores = { clarity: 2, completeness: 2, engagement: 2 };
    }
    else if (lower.includes("uh") || lower.includes("something")) {
      scores = { clarity: 3, completeness: 3, engagement: 2 };
    }
    else if (lower.length > 120) {
      scores = { clarity: 9, completeness: 9, engagement: 8 };
    }

    console.log("FINAL SCORES:", scores);

    // 🎯 Convert scores → reactions
    const reactions = [
      {
        name: "Rahul",
        emoji: vary(
          scores.clarity <= 3 ? "🤔" :
          scores.clarity <= 7 ? "😐" :
          "😊"
        ),
        message: scores.clarity <= 3 ? "I didn’t understand that..." : "",
        status:
          scores.clarity <= 3 ? "Confused" :
          scores.clarity <= 7 ? "Neutral" :
          "Understood"
      },
      {
        name: "Ananya",
        emoji: vary(
          scores.completeness <= 4 ? "❓" :
          scores.completeness <= 7 ? "😐" :
          "😊"
        ),
        message: scores.completeness <= 4 ? "Can you give an example?" : "",
        status:
          scores.completeness <= 4 ? "Curious" :
          scores.completeness <= 7 ? "Neutral" :
          "Understood"
      },
      {
        name: "Arjun",
        emoji: vary(
          scores.engagement <= 3 ? "😴" :
          scores.engagement <= 7 ? "😐" :
          "😊"
        ),
        message: scores.engagement <= 3 ? "This is boring..." : "",
        status:
          scores.engagement <= 3 ? "Bored" :
          scores.engagement <= 7 ? "Okay" :
          "Engaged"
      }
    ];

    return { reactions, scores };

  } catch (err) {
    console.error("Gemini Error:", err.message);

    // 🔥 SAFE FALLBACK
    return {
      reactions: [
        {
          name: "Rahul",
          emoji: "🤔",
          message: "I didn’t understand that...",
          status: "Confused"
        },
        {
          name: "Ananya",
          emoji: "❓",
          message: "Can you give an example?",
          status: "Curious"
        },
        {
          name: "Arjun",
          emoji: "😴",
          message: "This is boring...",
          status: "Bored"
        }
      ]
    };
  }
}


// 🚀 API
app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  const result = await analyzeText(text);
  res.json(result);
});


// 🟢 START SERVER
app.listen(5000, () => {
  console.log("✅ Gemini Server running at http://localhost:5000");
});