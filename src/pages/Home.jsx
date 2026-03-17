import { Link } from "react-router-dom"
import { useState } from "react"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa"

function Home() {
  const [showNumbers, setShowNumbers] = useState(false)

  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center bg-[#f6faf8] overflow-hidden fade-up md:pt-0 -mt-1">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 px-8 md:px-20 pt-0 pb-20 md:py-20 z-10">

          {/* MOBILE ONLY IMAGE - at top before heading */}
          <div className="block md:hidden mb-8 -mx-8 -mt-1">
            <div className="relative w-screen">
              <img
                src="/images/pellets%201.png"
                alt="Pine Wood Pellets"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center py-2 text-sm font-medium">
                Pure Pine Wood Pellets
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Premium Pure Pine Wood Pellets for Sustainable Energy
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            High-quality, impurity-free biomass fuel solutions manufactured in Gujarat.
            Reliable supply for retail and industrial needs.
          </p>

          <Link
            to="/products"
            className="btn-glow inline-block mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 transition duration-300 rounded-full font-semibold text-white shadow-lg"
          >
            Explore Products
          </Link>
        </div>

        {/* RIGHT CURVED IMAGE - DESKTOP ONLY */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
          <div className="absolute inset-0 bg-white rounded-l-[350px] shadow-2xl"></div>
          <div className="relative h-full flex items-center justify-center p-12">
            <img
              src="/images/pellets%201.png"
              alt="Pine Wood Pellets"
              className="max-h-[80%] object-contain"
            />
          </div>
        </div>

      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="bg-gray-100 py-16 px-6 text-center fade-up">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
          WELCOME TO OUR WEBSITE
        </h2>

        <p className="max-w-4xl mx-auto mt-6 text-gray-600 leading-8">
          <strong>UNIVERSAL BIOMASS PELLETS</strong> is a Gujarat-based
          manufacturer dedicated to producing premium quality
          <strong> Pure Pine Wood Pellets</strong>, a clean and sustainable
          alternative fuel for modern energy needs.
          <br /><br />
          Our mission is to provide dependable biomass energy solutions
          that support efficient industrial operations while contributing
          toward a greener and cleaner future.
        </p>

        <Link
          to="/about"
          className="inline-block mt-4 text-green-700 font-semibold hover:underline"
        >
          Read more...
        </Link>

      </section>

      {/* ================= CONTACT INFO BAR ================= */}
      <section
        className="py-16 text-white bg-cover bg-center fade-up"
        style={{
          backgroundImage: "url('/images/contact-bg.png')"
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {/* LOCATION */}
          <a
            href="https://maps.app.goo.gl/JnBDbkL9v74WW2pV7"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full p-4 mb-4 group-hover:text-green-600 transition">
                <FaMapMarkerAlt size={20} />
              </div>
              <h3 className="font-semibold group-hover:text-green-500">Location</h3>
              <p className="text-sm">Chhatral-GIDC, Gujarat</p>
            </div>
          </a>

          {/* MOBILE NUMBER */}
          <div className="cursor-pointer">
            <div
              onClick={() => setShowNumbers(!showNumbers)}
              className="flex flex-col items-center group"
            >
              <div className="bg-white text-black rounded-full p-4 mb-4 group-hover:text-green-600 transition">
                <FaPhoneAlt size={20} />
              </div>
              <h3 className="font-semibold group-hover:text-green-500">
                Mobile
              </h3>
              <p className="text-sm underline">
                View Mobile Number
              </p>
            </div>
            {showNumbers && (
              <div className="mt-3 space-y-1 text-sm">
                <a href="tel:+916354019144" className="block hover:text-green-500">
                  Nimesh Patel: +91 6354 019 144
                </a>
                <a href="tel:+916353559096" className="block hover:text-green-500">
                  Dip Patel: +91 6353 559 096
                </a>
              </div>
            )}
          </div>

          {/* EMAIL */}
          <a href="mailto:universalpellets@gmail.com" className="group">
            <div className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full p-4 mb-4 group-hover:text-green-600 transition">
                <FaEnvelope size={20} />
              </div>
              <h3 className="font-semibold group-hover:text-green-500">Email</h3>
              <p className="text-sm">universalpellets@gmail.com</p>
            </div>
          </a>

          {/* WEB */}
          <a
            href="https://universalbiomasspellets.com"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full p-4 mb-4 group-hover:text-green-600 transition">
                <FaGlobe size={20} />
              </div>
              <h3 className="font-semibold group-hover:text-green-500">Web</h3>
              <p className="text-sm">www.universalbiomasspellets.com</p>
            </div>
          </a>

        </div>
      </section>

      {/* ================= ENQUIRY SECTION ================= */}
      <section className="py-16 bg-gray-100 text-center fade-up">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Have Questions or Need a Quote?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Contact our team for product details, pricing, or bulk order enquiries —
          we are happy to assist you with the best biomass energy solutions.
        </p>

        <Link
          to="/contact"
          className="btn-glow inline-block mt-8 px-10 py-3 bg-green-600 hover:bg-green-700 transition duration-300 text-white font-semibold rounded-full shadow-lg"
        >
          Enquiry Now
        </Link>

      </section>

    </>
  )
}

export default Home