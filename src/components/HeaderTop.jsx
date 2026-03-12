import { useState, useRef, useEffect } from "react"
import { FiPhone, FiMail, FiX } from "react-icons/fi"

function HeaderTop() {
  const [open, setOpen] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [logoOpen, setLogoOpen] = useState(false)
  const dropdownRef = useRef()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true)
      } else {
        setShrink(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <div className={`bg-white border-b sticky top-0 z-50 overflow-visible transition-all duration-300 ${shrink ? "py-1" : "py-3"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* LEFT - Logo */}
          <div>
            <img
              src="/images/logo.jpeg"
              alt="UNIVERSAL BIOMASS PELLETS"
              onClick={() => setLogoOpen(true)}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${shrink ? "h-10" : "h-14"} w-auto`}
            />
          </div>

          {/* RIGHT - Contact Info */}
          <div className="flex items-center gap-10 text-black text-sm font-medium">

            {/* Mobile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                <FiPhone className="text-green-600" size={18} />
                View Mobile Number
              </button>

              {open && (
                <div className="absolute right-0 mt-3 bg-white border shadow-lg p-4 rounded text-sm w-72 z-50">
                  <p className="mb-2 font-semibold text-gray-700">
                    Contact Numbers:
                  </p>

                  <p className="hover:text-green-600 transition">
                    <a href="tel:+916354019144">
                      Nimesh Patel – +91 6354 019 144
                    </a>
                  </p>

                  <p className="hover:text-green-600 transition">
                    <a href="tel:+916353559096">
                      Dip Patel – +91 6353 559 096
                    </a>
                  </p>
                </div>
              )}
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 hover:text-green-600 transition">
              <FiMail className="text-green-600" size={18} />
              <a href="mailto:universalpellets@gmail.com">
                universalpellets@gmail.com
              </a>
            </div>

            {/* GST */}
            <div className="text-green-600 hover:text-green-700 transition">
              GST No:- 24AAIFU9820C1Z8
            </div>

          </div>

        </div>
      </div>

      {/* LOGO POPUP */}
      {logoOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setLogoOpen(false)}
        >
          <div className="relative">

            <button
              onClick={() => setLogoOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              <FiX />
            </button>

            <img
              src="/images/logo.jpeg"
              alt="Company Logo"
              className="max-h-[80vh] rounded-lg shadow-2xl"
            />

          </div>
        </div>
      )}
    </>
  )
}

export default HeaderTop