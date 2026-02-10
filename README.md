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

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Change social media links

2. **About Section** (`src/components/About.jsx`):
   - Edit the about text to match your story

3. **Projects** (`src/data/projectsData.js`):
   - Add/edit your projects
   - Update technologies, descriptions, and links

4. **Contact** (`src/components/Contact.jsx`):
   - Update email and social media links

5. **Footer** (`src/components/Footer.jsx`):
   - Update footer links and information

### Change Colors

Open `src/index.css` and modify the CSS variables:
```css
:root {
  --primary: #1a2332;
  --accent: #d4a574;
  /* etc... */
}
```

### Add Your Resume

1. Add your resume PDF to the `public` folder
2. Name it `resume.pdf` or update the link in `Hero.jsx` and `Contact.jsx`

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment

You can deploy this portfolio to various platforms:

### Netlify (Recommended)
1. Create account on [Netlify](https://www.netlify.com/)
2. Drag and drop the `dist` folder
3. Your site is live!

### Vercel
1. Create account on [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Port 3000 is already in use
If you see this error, either:
- Close other apps using port 3000
- Or the dev server will suggest an alternative port (like 3001)

### npm install fails
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Styling looks broken
- Make sure all CSS files are imported correctly
- Clear browser cache (Ctrl + Shift + R)

## 📧 Contact

For questions or issues with this portfolio:
- Email: santhiya@example.com
- GitHub: github.com/santhiya
- LinkedIn: linkedin.com/in/santhiya

## 📝 License

This project is open source and available for personal use.

---

**Built with ❤️ using React**
