# Santhiya's Portfolio Website

A modern, responsive portfolio website built with React, showcasing web development projects and skills.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive**: Smooth scrolling, hover effects, and page transitions
- **Project Showcase**: Detailed project case studies with features, challenges, and learnings
- **Skills Display**: Comprehensive tech stack with visual progress indicators
- **Contact Form**: Easy-to-use contact form for reaching out

## 🛠️ Technologies Used

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **Vite** - Build tool

### Styling
- **Custom CSS** - With CSS variables for theming
- **Google Fonts** - Playfair Display & Outfit fonts

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

## 🏃‍♀️ How to Run This Project in VS Code

### Step 1: Extract the Project
1. Extract the `santhiya-portfolio.zip` file to your desired location
2. You should see a folder named `santhiya-portfolio`

### Step 2: Open in VS Code
1. Open Visual Studio Code
2. Click on **File** → **Open Folder**
3. Navigate to and select the `santhiya-portfolio` folder
4. Click **Select Folder**

### Step 3: Open Terminal in VS Code
1. In VS Code, click on **Terminal** → **New Terminal** (or press `` Ctrl + ` ``)
2. Make sure you're in the project directory (you should see `santhiya-portfolio` in the terminal path)

### Step 4: Install Dependencies
In the terminal, run:
```bash
npm install
```

This will install all required packages. It may take 2-3 minutes.

### Step 5: Start the Development Server
Once installation is complete, run:
```bash
npm run dev
```

### Step 6: View the Website
1. The terminal will show a message like:
   ```
   ➜  Local:   http://localhost:3000/
   ```
2. The website should automatically open in your browser
3. If it doesn't open automatically, hold `Ctrl` and click on the `http://localhost:3000/` link in the terminal

### Step 7: Making Changes
- Any changes you make to the code will automatically refresh the browser
- Edit files in the `src` folder to customize the portfolio

## 📁 Project Structure

```
santhiya-portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/            # Project data
│   │   └── projectsData.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```
