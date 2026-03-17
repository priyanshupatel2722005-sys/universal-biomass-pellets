import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import {
  FiUser,
  FiMapPin,
  FiPhone,
  FiGlobe
} from "react-icons/fi";

const Contact = () => {

  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [showNimesh, setShowNimesh] = useState(false);
  const [showDip, setShowDip] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_307l2mw",
        "template_7uasi7d",
        form.current,
        "iGjOUltydn-qNbGsl"
      )
      .then(() => setSubmitted(true));

    e.target.reset();
  };

  return (
    <div className="page-container-wide">

      {/* PAGE TITLE */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-green-700">
          Contact
        </h1>

        <div className="mt-3 bg-gray-100 px-4 py-2 rounded text-sm text-gray-600">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>{" "}
          / Contact
        </div>

      </div>

      {/* CONTACT CARD */}

      <div className="border rounded-xl shadow-sm grid md:grid-cols-2 overflow-hidden">

        {/* LEFT PANEL */}

        <div className="bg-gray-50 p-8">

          <h2 className="text-2xl font-semibold mb-8">
            Universal Biomass Pellets
          </h2>

          {/* CONTACT PERSON */}

          <div className="flex gap-4 pb-6 border-b border-dashed border-gray-300 group transition duration-300 hover:bg-white hover:shadow-sm hover:pl-2 rounded-md">

            <FiUser size={22} className="text-gray-500 mt-1 group-hover:text-green-700"/>

            <div>

              <h3 className="font-semibold text-lg">
                Contact Person
              </h3>

              <p
                className="text-gray-600 cursor-pointer hover:text-green-700"
                onClick={() => setShowNimesh(!showNimesh)}
              >
                Nimesh Patel
              </p>

              {showNimesh && (
                <a
                  href="tel:+919999999999"
                  className="text-green-700 block"
                >
                  +91 6354019144
                </a>
              )}

              <p
                className="text-gray-600 cursor-pointer hover:text-green-700 mt-2"
                onClick={() => setShowDip(!showDip)}
              >
                Dip Patel
              </p>

              {showDip && (
                <a
                  href="tel:+918888888888"
                  className="text-green-700 block"
                >
                  +91 6353559096
                </a>
              )}

            </div>

          </div>

          {/* ADDRESS */}

          <div className="flex gap-4 py-6 border-b border-dashed border-gray-300 group transition duration-300 hover:bg-white hover:shadow-sm hover:pl-2 rounded-md">

            <FiMapPin size={22} className="text-gray-500 mt-1 group-hover:text-green-700"/>

            <div>

              <h3 className="font-semibold text-lg">
                Address
              </h3>

              <a
                href="https://maps.app.goo.gl/D5zKoKseQZCRvSdu9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700"
              >
                UNIVERSAL BIOMASS PELLETS
                <br/>
                Ad. Survey No. 3, Village : Ambavpura
                <br/>
                Chhatral - Pansar Rd, behind Chhatral - GIDC
                <br/>
                Pansar, Kadi, Gujarat 382729
              </a>

            </div>

          </div>

          {/* CALL */}

          <div className="flex gap-4 py-6 border-b border-dashed border-gray-300 group transition duration-300 hover:bg-white hover:shadow-sm hover:pl-2 rounded-md">

            <FiPhone size={22} className="text-gray-500 mt-1 group-hover:text-green-700"/>

            <div>

              <h3 className="font-semibold text-lg">
                Call Us
              </h3>

              <span className="text-gray-600">
                Click contact name above
              </span>

            </div>

          </div>

          {/* WEB */}

          <div className="flex gap-4 pt-6 group transition duration-300 hover:bg-white hover:shadow-sm hover:pl-2 rounded-md">

            <FiGlobe size={22} className="text-gray-500 mt-1 group-hover:text-green-700"/>

            <div>

              <h3 className="font-semibold text-lg">
                Web Address
              </h3>

              <a
                href="https://universalbiomasspellets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700"
              >
                www.universalbiomasspellets.com
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}

        <div className="bg-white p-8">

          {submitted ? (
            <h2 className="text-xl font-semibold text-green-700">
              Thank you for your inquiry. We will contact you soon.
            </h2>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-6">
                Contact Us
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">

                <input
                  className="border border-gray-300 rounded-md p-3 w-full transition hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />

                <input
                  className="border border-gray-300 rounded-md p-3 w-full transition hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />

                <input
                  className="border border-gray-300 rounded-md p-3 w-full transition hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  required
                />

                <input
                  className="border border-gray-300 rounded-md p-3 w-full transition hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  type="number"
                  name="quantity"
                  placeholder="Quantity (in Tons)"
                  required
                />

                <textarea
                  className="border border-gray-300 rounded-md p-3 w-full h-32 transition hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                  name="message"
                  placeholder="Your Message"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition"
                >
                  Send Inquiry
                </button>

              </form>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default Contact;
