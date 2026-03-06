# Pizzeria Aroma – Restaurant Website (Node.js & Express)

**Pizzeria Aroma** is a modern, lightweight, and production-ready restaurant website built with **Node.js, Express, and EJS**.  
The project is designed for small local restaurants and family-owned businesses that need a professional online presence without unnecessary complexity.

The website is fully responsive, legally compliant for Germany (Impressum, Cookie Notice), and optimized for mobile users.

🔗 Live deployment ready (Render / Railway)  
🔒 HTTPS ready  
📱 Mobile-first UX

---

## ✨ Key Features

- Responsive design (mobile & desktop)
- Sticky **Call Now** button on mobile
- Automatic **Open / Closed** status badge
- Dynamic opening hours logic (server-side)
- Menu rendered from JSON data
- Legal pages: **Kontakt** & **Impressum**
- Minimal cookie notice (GDPR-friendly, no tracking)
- Clean and scalable project structure
- Deploy-ready configuration

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (server-side rendering)
- **CSS (vanilla)**
- **JavaScript (vanilla)**
- No frontend frameworks
- No database (JSON-based content)

---

## 📁 Project Structure


pizzeria-aroma/
 ├── config/
 │   └── openingHours.js        # Business opening hours
 ├── data/
 │   └── menu.json              # Restaurant menu data
 ├── public/
 │   ├── css/
 │   │   └── style.css          # Global styles
 │   ├── images/
 │   │   └── logo.jpg           # Logo / assets
 │   └── js/
 │       └── cookie.js          # Cookie notice logic
 ├── routes/
 │   └── pages.js               # Page routes
 ├── utils/
 │   └── isOpenNow.js           # Open/Closed logic
 ├── views/
 │   ├── partials/
 │   │   ├── header.ejs
 │   │   └── footer.ejs
 │   ├── index.ejs
 │   ├── menu.ejs
 │   ├── kontakt.ejs
 │   └── impressum.ejs
 ── server.js
 ── package.json
 ── .gitignore
 ── README.md
---


## 🚀 Getting Started (Local)

### 1. Clone the repository
```bash
git clone https://github.com/ShaqirBe/pizzeria-aroma.git
cd pizzeria-aroma

### 2. Install dependencies
npm install

### 3. Start the Server
npm start

### 4. Open your browser at:
http://localhost:3000

📱 Mobile UX

	•	Sticky Call Now button (mobile only)
	•	Optimized spacing so footer and legal links remain accessible
	•	Touch-friendly navigation

📄 Legal Compliance (Germany)

This project includes all essential legal pages for Germany:
	•	Kontakt
	•	Impressum (§5 TMG compliant)
	•	Cookie Notice (technical cookies only, no tracking)

No analytics or third-party tracking scripts are used.

🌍 Deployment (Render)

This project is deploy-ready for platforms like Render.

Recommended setup:
	•	Build Command:
npm install
npm start
NODE_ENV=production
After deployment, you will receive a public HTTPS URL.

🔗 Custom Domain

A custom domain can be added later without changing any code:
	1.	Add domain in Render dashboard
	2.	Configure DNS (CNAME / A record)
	3.	HTTPS is enabled automatically

🔮 Possible Extensions

	•	Online ordering system
	•	Admin panel for menu management
	•	Multi-language support
	•	Google Maps integration
	•	Analytics with advanced cookie consent


👤 Author

Shaqir Beqiri
Bachelor in Economics | Professional Degree in IT
JavaScript / Node.js Developer

This project is part of my professional portfolio and demonstrates:
	•	clean backend structure
	•	practical business logic
	•	real-world deployment readiness


📜 License

MIT License

© 2026 Shaqir Beqiri
