// src/LandingPage.tsx
import React from "react";

const LandingPage: React.FC = () => {
  const perfumes: { name: string; price: string; img: string }[] = [
    {
      name: "Prada",
      price: "$180",
      img: "./images/perfume1.jpg",
    },
    {
      name: "Coco Noir",
      price: "$210",
      img: "./images/Golden-dusk.jpg",
    },

    {
      name: "Bleu de Chanel",
      price: "$180",
      img: "./images/Velour Noir.jpg",
    },
    {
      name: "Jo Malone",
      price: "$150",
      img: "./images/Jo Malone.jpg",
    },
    {
      name: "L'eau Laurissi",
      price: "$110",
      img: "./images/Leau.jpg",
    },

    {
      name: "Versace",
      price: "$150",
      img: "./images/Versace.jpg",
    },
  ];

  const testimonials: { name: string; text: string }[] = [
    {
      name: "Isabella",
      text: "An intoxicating fragrance that makes me feel empowered and elegant.",
    },
    {
      name: "Victor",
      text: "The best perfume I’ve ever owned. Luxurious in every detail.",
    },
    {
      name: "Amina",
      text: "Romantic and unforgettable — I wear it every evening.",
    },
  ];

  return (
    <div className="font-serif bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400">
          Unveil the Essence of Luxury
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Handcrafted perfumes with timeless elegance — designed to enchant,
          captivate, and leave a lasting impression.
        </p>
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg hover:opacity-90 transition">
          Shop Collection
        </button>
      </section>

      {/* Featured Perfumes */}
      <section className="py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center mb-12 text-yellow-400">
          Exquisite Selections
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {perfumes.map((perfume, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-gray-900 to-black shadow-lg rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-400 transition"
            >
              <img
                src={perfume.img}
                alt={perfume.name}
                className="w-full h-60 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {perfume.name}
              </h3>
              <p className="text-yellow-400 text-lg">{perfume.price}</p>
              <button className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-semibold text-center mb-12 text-yellow-400">
          Whispers of Elegance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-yellow-400 transition"
            >
              <p className="italic text-gray-400 mb-4">“{review.text}”</p>
              <h4 className="font-bold text-yellow-400">{review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-semibold text-center mb-10 text-yellow-400">
          Contact Us
        </h2>
        <div className="max-w-xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:border-yellow-400 outline-none min-h-[120px]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500">
        <p className="text-sm">
          © {new Date().getFullYear()} Perfume Luxe. Crafted with passion by
          Richard.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
