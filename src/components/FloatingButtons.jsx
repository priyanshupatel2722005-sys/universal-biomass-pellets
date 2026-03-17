import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { FiPhone, FiX } from "react-icons/fi"

function FloatingButtons() {
  const [showNumbers, setShowNumbers] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">

      {/* Phone Numbers Popup */}
      {showNumbers && (
        <div className="bg-white rounded-xl shadow-2xl p-4 text-sm w-56 border border-gray-100">

          {/* Close Button */}
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-gray-700">Contact Numbers</p>
            <button
              onClick={() => setShowNumbers(false)}
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Nimesh Patel */}
          <a
            href="tel:+916354019144"
            className="flex flex-col py-2 border-b border-gray-100 hover:text-green-700 transition"
          >
            <span className="font-medium text-gray-800">Nimesh Patel</span>
            <span className="text-green-700">+91 6354 019 144</span>
          </a>

          {/* Dip Patel */}
          <a
            href="tel:+916353559096"
            className="flex flex-col pt-2 hover:text-green-700 transition"
          >
            <span className="font-medium text-gray-800">Dip Patel</span>
            <span className="text-green-700">+91 6353 559 096</span>
          </a>

        </div>
      )}

      {/* Call Button - with bounce animation */}
      <button
        onClick={() => setShowNumbers(!showNumbers)}
        className="bg-[#14532d] hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white p-4 rounded-full shadow-xl animate-bounce"
      >
        <FiPhone size={24} />
      </button>

      {/* WhatsApp Button - without bounce */}
      <a
        href="https://wa.me/916354019144"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white p-4 rounded-full shadow-xl"
      >
        <FaWhatsapp size={24} />
      </a>

    </div>
  )
}

export default FloatingButtons


