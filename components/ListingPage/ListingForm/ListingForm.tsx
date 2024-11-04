"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Dropzone from "dropzone";
import SectionHeading from "@/components/Helper/SectionHeading";

const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    type: "",
    price: "",
    area: "",
    rooms: "",
  });

  useEffect(() => {
    // Initialize Dropzone after the component mounts
    Dropzone.autoDiscover = false;
    const dropzone = new Dropzone("#property-gallery-dropzone", {
      url: "/file-upload", // Set your upload URL
      maxFiles: 10,
      maxFilesize: 5, // MB
      acceptedFiles: "image/*",
    });

    return () => {
      dropzone.destroy();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-6 pb-6">
      <div className="w-[80%] mx-auto ">
        <SectionHeading heading='Add Form Listing' />
        <div className="container-fluid mt-5 p-16">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  Basic Information
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Property Gallery
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Property Information
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Property Contact Details
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="col-md-9">
              <div className="card">
                <div className="card-header bg-dark text-white">
                  Property Basic Information
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="title" className="form-label">
                        Property Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Property Title"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Your Message"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <select
                          className="form-select"
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                        >
                          <option>Status</option>
                          <option>Available</option>
                          <option>Sold</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="type" className="form-label">
                          Type
                        </label>
                        <select
                          className="form-select"
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                        >
                          <option>Type</option>
                          <option>Apartment</option>
                          <option>House</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="price" className="form-label">
                          Price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="Rp"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="area" className="form-label">
                          Area
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="area"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          placeholder="Sq Ft"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="rooms" className="form-label">
                        Rooms
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="rooms"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        placeholder="Rooms"
                      />
                    </div>
                  </form>
                </div>
                <div className="container mt-5">
                  {" "}
                  {/* Menambahkan margin top */}
                  <div className="card mt-3">
                    <div className="card-header bg-dark text-white">
                      Property Gallery
                    </div>
                    <div className="card-body">
                      <form
                        action="/upload"
                        className="dropzone"
                        id="property-gallery-dropzone"
                      >
                        <div className="dz-message text-center">
                          <i className="bi bi-cloud-upload fs-1"></i>
                          <p>Drag & Drop files here or click to browse</p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Property Contact Details Section */}
                <div className="card mt-4">
                  <div className="card-header bg-dark text-white">
                    Property Contact Details
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="form-label">
                          Your E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your E-Mail"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button
                    className="btn btn-lg text-white"
                    style={{
                      background:
                        "linear-gradient(to right, #0011FFFF, #2622FFFF)",
                      border: "none",
                      width: "100%",
                    }}
                  >
                    SUBMIT PROPERTY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingForm;
