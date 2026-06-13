# KadaKareer · Kareer Komparer

> **Smart career comparison tool that analyzes both logical skill alignment and emotional lifestyle priorities**

![Kareer Komparer Demo](https://via.placeholder.com/800x400?text=Kareer+Komparer+Screenshot)

## 🌟 Overview

Kareer Komparer is an interactive web application that helps career seekers confidently compare two career paths based on their current skills and personal lifestyle goals. Unlike traditional career quizzes, this tool evaluates both **hard skill matches** and **soft priorities** (salary vs. work-life balance, remote vs. in-person) to generate dynamic pivot scores.

**[🔗 Live Demo](https://your-username.github.io/your-repo-name)** — *Replace with your actual GitHub Pages URL*

## ✨ Key Features

### 🔄 Dual-State Interface
- **Welcoming Landing Page** – Choose two careers to compare with intuitive VS selector
- **Detailed Comparison Dashboard** – Deep analysis across multiple dimensions

### 🎯 Smart Scoring Engine
- **Skill Match Analysis** – Overlapping skills vs. skill gaps
- **Salary/Work-Life Slider** – Adjust priority to see scores change in real-time
- **Remote Work Preference** – Slider affects careers with high remote flexibility
- **Dynamic Primary CTA** – The higher-scoring career automatically receives the "View Entry-Level Roles" button

### 💡 Interactive Skill Management
- **Inline Skill Input** – Add skills without browser alerts
- **Autocomplete Suggestions** – Type "ja" to see Java, JavaScript, etc.
- **Validation** – Prevents invalid or duplicate skill entries
- **Real-time Feedback** – Adding/removing skills instantly updates pivot scores

### 📚 Educational Tooltips
- **Hover any skill** (both overlapping AND gap skills) to see beginner-friendly definitions
- **Global floating tooltips** – Never clipped or hidden behind containers

### 🎨 Visual Design
- **Deep slate blues** – Trustworthy, professional foundation
- **Crisp green tags** – Skills you already possess
- **Soft coral tags** – Skill gaps to acquire
- **Semi-circle gauges** – Visual pivot score representation
- **Fully responsive** – Works on desktop, tablet, and mobile

### 🛡️ Error Prevention
- Prevents comparing the same career twice
- Validates skill input against real industry skills
- Clear inline error messages
- Empty state handling for "Overlapping Skills"

## 🚀 Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Custom properties, Flexbox, Grid, responsive design
- **Vanilla JavaScript** – No frameworks, pure DOM manipulation
- **Google Fonts (Inter)** – Modern, readable typography

## 🗂️ Project Structure

kareer-komparer/
├── index.html          # Complete application (HTML, CSS, JS)
├── README.md           # This file
└── assets/             # (Optional) Screenshots, icons, etc.

## 📦 Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/kareer-komparer.git

# Navigate to project folder
cd kareer-komparer

# Open index.html in your browser
open index.html

