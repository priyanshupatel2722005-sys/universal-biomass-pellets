import { FaWhatsapp } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916354019144"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white p-4 rounded-full shadow-xl animate-bounce"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+916354019144"
        className="bg-[#14532d] hover:scale-110 hover:shadow-2xl transition-all duration-300 text-white p-4 rounded-full shadow-xl"
      >
        <FiPhone size={24} />
      </a>

    </div>
  )
}

export default FloatingButtons