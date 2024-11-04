import React from "react";

const ContactPage = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center p-10">
      <div className="col-md-8">
        {/* Section Title */}
        <div className="text-center mb-4 ">
          <span className="badge text-dark mb-2 fs-2 ">CONTACT US</span>
          <h2 className="fw-bold mt-3">Do you have any question?</h2>
          <p>
            For your car we will do everything advice, repairs and maintenance.
            We are the some preferred choice by many car owners because
          </p>
        </div>

        {/* Contact Form */}
        <form>
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Your E-mail"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-lg text-white"
              style={{
                background: "linear-gradient(to right, #3700FFFF, #6F22FFFF)",
                border: "none",
                width: "100%",
              }}
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
