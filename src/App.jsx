import FloatingButtons from "./components/FloatingButtons"
import HeaderTop from "./components/HeaderTop"
import { Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="font-sans">

      {/* ===== Fixed Header Area ===== */}
      <div className="fixed top-0 left-0 w-full z-50">

        {/* Top Header */}
        <HeaderTop />

        {/* Navbar */}
        <nav className="bg-[#12372A] shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

            {/* Company Name */}
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              UNIVERSAL BIOMASS PELLETS
            </h2>

            {/* Navigation Links */}
            <div className="flex gap-8 text-sm md:text-base font-medium">

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
          </div>
        </nav>

      </div>

      {/* ===== Page Content (padding to avoid overlap) ===== */}
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