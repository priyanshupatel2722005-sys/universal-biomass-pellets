import React from "react";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image"; // <- import lightbox component

function Products() {
  return (
    <div className="page-container-wide">

      {/* PAGE TITLE */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-green-700">
          Products
        </h1>

        <div className="mt-3 bg-gray-100 px-4 py-2 rounded text-sm text-gray-600">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>{" "}
          / Products
        </div>

      </div>

      {/* PRODUCT IMAGE WITH LIGHTBOX */}
      <div className="flex justify-center mb-6">
        <ModalImage
          small="/images/pellets.jpeg"   // thumbnail
          large="/images/pellets.jpeg"   // full image
          alt="Pure Pine Wood Pellets"
          className="w-80 h-auto rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
        />
      </div>

      {/* PRODUCT TITLE */}
      <h1 className="heading-primary text-center text-2xl font-semibold">
        Pure Pine Wood Pellets
      </h1>

      <p className="paragraph text-center max-w-225 mx-auto">
        Our flagship Pure Pine Wood Pellets are manufactured using top-grade pine wood,
        ensuring high calorific value, low ash content, and a consistently clean burn.
        Ideal for heating systems and industrial boiler applications.
      </p>

      <div className="product-box">

        <h2 className="heading-primary text-xl font-semibold">
          Specifications & Quality Details
        </h2>

        <ul className="leading-8 mt-5">
          <li><strong>Material:</strong> 100% Pure Pine Wood</li>
          <li><strong>Moisture Content:</strong> 7–8%</li>
          <li><strong>Ash Content:</strong> ≤ 4%</li>
          <li><strong>GCV:</strong> 4500+</li>
          <li><strong>Quality Assurance:</strong> Auditor-certified, impurity-free</li>
          <li><strong>Packaging:</strong> Secure 25 kg bags</li>
          <li><strong>Production Capacity:</strong> High-volume metric ton capacity</li>
        </ul>

        <h2 className="heading-secondary text-xl font-semibold">
          Price: ₹13.00 per KG
        </h2>

        <div className="mt-8">
          <a href="/contact">
            <button className="order-button">
              Order Now / Contact for Bulk Pricing
            </button>
          </a>
        </div>

      </div>

    </div>
  );
}

export default Products;