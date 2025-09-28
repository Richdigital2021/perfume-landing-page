# Perfume Luxe - Landing Page

A **luxury/romantic perfume landing page** built with **React, Vite, TailwindCSS, and TypeScript**.
This project showcases a premium perfume store with an elegant dark theme, product highlights, testimonials, and a call-to-action section.

---

## ✨ Features

- 🎨 **Elegant Dark Theme** with gold accents for a luxury feel
- 📱 **Responsive Design** (mobile-friendly with TailwindCSS)
- 🛍️ **Featured Perfumes Section** with product images, names, and prices
- 💬 **Customer Testimonials** for social proof
- ⚡ **Fast & Lightweight** powered by Vite
- 🔒 Written in **TypeScript** for type safety

---

## 🚀 Tech Stack

- **React** (UI library)
- **Vite** (development + build tool)
- **TypeScript** (type safety)
- **TailwindCSS** (styling)

---

## 📂 Project Structure

```
perfume-landing/
├── public/                # Static assets (images, icons, etc.)
│   └── images/
│       ├── perfume1.jpg
│       ├── perfume2.jpg
│       └── perfume3.jpg
├── src/
│   ├── App.tsx            # Main app component
│   ├── LandingPage.tsx    # Landing page component
│   ├── main.tsx           # App entry point
│   └── index.css          # TailwindCSS setup
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/perfume-landing.git
cd perfume-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

---

## 🖼️ Adding Images

You can add your own perfume product images in the `public/images/` folder.
Then update `LandingPage.tsx`:

```tsx
const perfumes = [
  { name: "Velour Noir", price: "$180", img: "/images/perfume1.jpg" },
  { name: "Golden Dusk", price: "$210", img: "/images/perfume2.jpg" },
  { name: "Eternal Rose", price: "$160", img: "/images/perfume3.jpg" },
];
```

---

## 📌 Future Improvements

- Add **navigation bar** (Home, Shop, About, Contact)
- Implement **shopping cart functionality**
- Connect to a **backend API for dynamic products**
- Add **animations** (e.g., Framer Motion) for smoother interactions

---

## Live URL

[Live View](https://perfume-landing-page-pi.vercel.app/)

## 📜 License

This project is open-source and available under the **MIT License**.

---

👤 Developed by **Richard Akintunde**
