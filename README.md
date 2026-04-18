# Hackathon
#Made with ❤️ by Team Error 404 Coders Not Found

---

# 🎓 VirtuTeach AI

### An Intelligent Teaching Simulator Powered by Google Gemini AI

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-orange.svg)](https://deepmind.google/technologies/gemini/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 📖 Overview

**VirtuTeach AI** is an innovative teaching simulator that helps educators practice and improve their teaching skills in a safe, AI-powered virtual classroom environment. Teachers receive real-time feedback from AI students who react to their explanations, ask questions, and provide detailed performance analytics.

> 🏆 **Hackathon Ready** - Complete, production-ready system with AI integration, voice recognition, and professional feedback system

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Google Gemini API Key** - [Get it free here](https://aistudio.google.com/)
- **Chrome Browser** (required for voice recognition)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/virtuteach-ai.git
cd virtuteach-ai

# 2. Install dependencies
npm install

# 3. Create .env file with your API key
echo "GEMINI_API_KEY=your_api_key_here" > .env

# 4. Start the backend server
node server.js

# 5. Open index.html in Chrome browser

✨ Features
🤖 AI-Powered Student Reactions
Three unique student personas (Rahul, Ananya, Arjun)

Real-time emoji reactions based on teaching quality

Contextual speech bubbles with questions and feedback

Intelligent responses powered by Google Gemini AI

🎤 Multiple Teaching Modes
Voice Recognition - Speak naturally using your microphone

Text Input - Type your explanations for precise control

PDF Upload - Upload teaching materials for alignment tracking

📊 Comprehensive Analytics
Real-time clarity, completeness, and engagement scoring

Material alignment meter (0-100%)

Session recording with timestamped explanations

Final report with personalized improvement suggestions

🎨 Immersive Classroom Experience
Realistic classroom background

Animated student avatars with speech bubbles

Interactive whiteboard display

Single-button lecture control (Start/End)

📁 Session Management
Export teaching reports as PDF

Persistent session recording

Room code system for multiple teachers

Judge dashboard for live metrics

Architecture:
Frontend (HTML/CSS/JS) → Backend (Node.js/Express) → Google Gemini AI
         ↓                        ↓                           ↓
    Voice/Text Input         API Processing              AI Evaluation
         ↓                        ↓                           ↓
    Student Reactions ←─── Scores & Reactions ←──────────────┘



🎯 Usage Guide
1. Login & Setup
Enter your name or continue as guest

Optional: Upload PDF/TXT for material alignment

Click "Enter Classroom"

2. Start Teaching
Click "Start Lecture" (button turns red)

Choose input: 🎤 Microphone or ⌨️ Text

3. Watch Student Reactions
Students react with emojis and speech bubbles

Alignment meter shows material adherence

4. End Session & Review
Click "End Lecture"

View comprehensive feedback report with scores and suggestions



🧠 Scoring System
Score Range	  Interpretation	        Badge
80-100	     🌟 Excellent Teaching	  Gold
60-79	       👍 Good Teaching	        Silver
40-59	       📈 Needs Improvement  	Bronze
Below 40	   📚 Beginner Level	      Learning
Metrics:

Clarity (1-10) - How clear and understandable?

Completeness (1-10) - Thorough coverage?

Engagement (1-10) - Interactive and interesting?



⚠️ Troubleshooting

Problem	                          Solution

API key error	                    Check .env file exists and has correct key
Voice not working	                Use Chrome, allow microphone access
Port 5000 busy	                  Change port in server.js to 5001
Students not responding	          Verify backend is running (node server.js)
PDF not loading	                  Try smaller PDF or convert to TXT

⚠️ Note: If the stop teaching button raises a pop up it means you did not add your api key in .env file

🛠️ Built With

Frontend: HTML5, CSS3, JavaScript (ES6+)

Backend: Node.js, Express.js

AI: Google Gemini 2.5 Flash Lite

APIs: Web Speech API, PDF.js

Images: Pexels

© 2024 Team Error 404 Coders Not Found. All Rights Reserved.
