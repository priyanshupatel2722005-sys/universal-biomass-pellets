import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [showNumbers, setShowNumbers] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-4 gap-10">

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1 space-y-8">

          {/* COMPANY HIGHLIGHTS */}
          <div className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">
            <div className="bg-green-700 text-white font-bold px-5 py-3">
              Company Highlights
            </div>

            <div className="p-5 text-sm text-gray-700">

              <div className="flex justify-between py-2 border-b border-dashed border-gray-300">
                <span>Production Capacity</span>
                <span className="font-semibold">300 Tons/Month</span>
              </div>

              <div className="flex justify-between py-2 border-b border-dashed border-gray-300">
                <span>Industrial Clients</span>
                <span className="font-semibold">15+</span>
              </div>

              <div className="flex justify-between py-2">
                <span>Quality Assurance</span>
                <span className="font-semibold">99%</span>
              </div>

              <Link
                to="/products"
                className="text-green-700 font-semibold hover:underline block mt-4"
              >
                Explore Products
              </Link>

            </div>
          </div>

          {/* CONTACT US */}
          <div className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">

            <div className="bg-green-700 text-white font-bold px-5 py-3">
              Contact Us
            </div>

            <div className="p-5 text-sm text-gray-700 space-y-4">

              <div className="pb-3 border-b border-gray-200 font-semibold text-gray-900">
                UNIVERSAL BIOMASS PELLETS
              </div>

              <div className="pb-3 border-b border-gray-200">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=UNIVERSAL+BIOMASS+PELLETS+Ambavpura+Kadi+Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block leading-relaxed hover:text-green-700"
                >
                  Post :, Survey No. 3,<br />
                  Village : Ambavpura,<br />
                  Chhatral - Pansar Rd,<br />
                  behind Chhatral, D.C, G.I,<br />
                  Pansar, Kadi,<br />
                  Gujarat 382729
                </a>
              </div>

              {!showNumbers && (
                <button
                  onClick={() => setShowNumbers(true)}
                  className="text-green-700 font-semibold hover:underline"
                >
                  View Mobile Number
                </button>
              )}

              {showNumbers && (
                <div className="space-y-2">

                  <a
                    href="tel:+916354019144"
                    className="block text-green-700 hover:underline"
                  >
                    Nimesh Patel - +91 6354019144
                  </a>

                  <a
                    href="tel:+916353559096"
                    className="block text-green-700 hover:underline"
                  >
                    Dip Patel - +91 6353559096
                  </a>

                </div>
              )}

            </div>
          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* PAGE TITLE */}
          <div>

            <h1 className="text-3xl font-bold text-green-700">
              About Us
            </h1>

            {/* Highlight Strip */}
            <div className="mt-3 bg-gray-100 px-4 py-2 rounded text-sm text-gray-600">
              <Link to="/" className="hover:text-green-700">
                Home
              </Link>{" "}
              / About Us
            </div>

          </div>


          {/* ABOUT */}
          <div className="bg-white p-6 rounded shadow-sm">

            <h2 className="text-xl font-semibold text-green-700 mb-4">
              About Universal Biomass Pellets
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Universal Biomass Pellets is a trusted manufacturer and supplier
              of high-quality biomass fuel products. We specialize in producing
              premium pine wood pellets that provide efficient, eco-friendly,
              and sustainable energy solutions for industrial applications.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our production facility is equipped with advanced technology that
              ensures consistent pellet density, controlled moisture levels,
              and high combustion efficiency. Through strict quality control
              and reliable supply, we support industries with sustainable
              fuel alternatives.
            </p>

          </div>


          {/* MISSION & VISION */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                Our Mission
              </h3>

              <p className="text-gray-700">
                Our mission is to provide industries with reliable biomass fuel
                solutions by delivering premium quality pellets and promoting
                environmentally responsible energy practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                Our Vision
              </h3>

              <p className="text-gray-700">
                To become one of the leading biomass pellet manufacturers in
                India by delivering sustainable energy solutions and maintaining
                the highest product quality standards.
              </p>
            </div>

          </div>


          {/* WHY CHOOSE US */}
          <div className="bg-white p-6 rounded shadow-sm">

            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-3 text-gray-700">

              <p>• Premium Quality Pine Wood Pellets</p>
              <p>• Timely Bulk Supply</p>
              <p>• Trusted by Industrial Clients</p>
              <p>• Guaranteed Product Purity</p>
              <p>• High Combustion Performance</p>

            </div>

          </div>


          {/* FACTORY */}
          <div>

            <h2 className="text-xl font-bold text-green-700 mb-6">
              Our Factory
            </h2>

            <div className="grid md:grid-cols-4 gap-4">

              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="factory"
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer rounded shadow hover:scale-105 transition"
                />
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}

    </div>
  );
};

export default About;