# Landmine Soft — Official Company Website

> A modern, professional IT company website built with React.js and Tailwind CSS.

## 🌐 Live Demo
[https://landminesoft.vercel.app](https://landminesoft.vercel.app) *(deploy to Vercel/Netlify)*

---

## 📄 Pages Implemented

| Page       | Route       | Status |
|------------|-------------|--------|
| Home       | `/`         | ✅     |
| About Us   | `/about`    | ✅     |
| Services   | `/services` | ✅     |
| Contact    | `/contact`  | ✅     |
| Login      | `/login`    | ✅     |
| Register   | `/register` | ✅     |
| Careers    | `/careers`  | ✅     |

---

## 🛠 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **React Router DOM v6** — routing
- **React Hook Form** — form validation
- **Lucide React** — icons

---

## 🚀 Running Locally

### Prerequisites
- Node.js v18+ 
- npm v9+

### Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/landmine-soft.git

# Navigate to the project
cd landmine-soft

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview  # Preview the production build locally
```

---

## 📁 Project Structure

```
src/
├── assets/          # Static images and SVGs
├── components/
│   ├── common/      # Navbar, Footer, Button, SectionHeader, Card
│   └── sections/    # Home sections (Hero, Services, Testimonials...)
├── data/            # Static data: services, team, jobs, testimonials
├── pages/           # Page components (one per route)
├── App.jsx          # Router setup
└── main.jsx         # Entry point
```

---

## 🎨 Design Decisions

- **Color Palette:** Deep Navy + Electric Cyan + Vibrant Orange — chosen to convey trust, innovation, and energy
- **Typography:** Plus Jakarta Sans for headings, Inter for body — clean and modern
- **Animations:** Framer Motion with scroll-triggered fade-up — subtle and professional
- **Responsive:** Mobile-first approach with Tailwind breakpoints (sm/md/lg/xl)

---

## 👤 Author

**Antigravity**  
Frontend Developer — Landmine Soft  
Assignment ID: LMS-S3-01598
