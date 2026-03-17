import { useState } from "react"
import FloatingButtons from "./components/FloatingButtons"
import HeaderTop from "./components/HeaderTop"
import { Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import { FiMenu, FiX, FiMapPin } from "react-icons/fi"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="font-sans">

      {/* ===== Fixed Header Area ===== */}
      <div className="fixed top-0 left-0 w-full z-50">

        {/* Top Header */}
        <HeaderTop />

        {/* Navbar */}
        <nav className="bg-[#12372A] shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

            {/* Company Name + Location */}
            <div className="flex flex-col">
              <h2 className="text-lg md:text-2xl font-bold text-white tracking-wide">
                UNIVERSAL BIOMASS PELLETS
              </h2>
              <a
                href="https://maps.app.goo.gl/ENAvRQktNRwzNRno9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-300 hover:text-green-100 transition text-xs mt-0.5"
              >
                <FiMapPin size={11} />
                <span>Chhatral-GIDC, Gujarat</span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8 text-sm md:text-base font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>

          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#12372A] border-t border-green-800 px-6 pb-4 flex flex-col gap-4 text-sm font-medium">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b border-green-400 pb-1 w-fit"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b border-green-400 pb-1 w-fit"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b border-green-400 pb-1 w-fit"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b border-green-400 pb-1 w-fit"
                    : "text-white hover:text-green-300 transition duration-300"
                }
              >
                Contact
              </NavLink>
            </div>
          )}

        </nav>

      </div>

      {/* ===== Page Content ===== */}
      <div className="pt-36">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* ===== Floating Buttons ===== */}
      <FloatingButtons />

    </div>
  )
}

export default App
