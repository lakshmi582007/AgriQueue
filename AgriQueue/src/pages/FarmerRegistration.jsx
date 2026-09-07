import React, { useState } from "react";
import "./FarmerRegistration.css";

function FarmerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    aadhaar: "",
    district: "",
    village: "",
    khasra: "",
    crop: "",
    quantity: "",
    harvestDate: "",
  });

  const [registrationNumber, setRegistrationNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const registrationId =
      "FR-" + Math.floor(100000 + Math.random() * 900000);

    setRegistrationNumber(registrationId);
  };

  return (
    <div className="registration-page">

      {/* HEADER */}
      <header className="registration-header">

        <div className="logo-section">
          <div className="logo-icon">
            🌾
          </div>

          <div>
            <h1>AgriQueue</h1>
            <p>Smart Farmer Procurement</p>
          </div>
        </div>

        <button className="language-button">
          🌐 English ▾
        </button>

      </header>

      {/* MAIN */}
      <main className="registration-container">

        {/* PROGRESS */}
        <div className="progress-section">

          <div className="progress-step active">
            <span>1</span>
            <p>Registration</p>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>2</span>
            <p>Crop Details</p>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            <p>Complete</p>
          </div>

        </div>

        {/* CARD */}
        <div className="registration-card">

          {/* TITLE */}
          <div className="card-heading">

            <div className="heading-icon">
              👨‍🌾
            </div>

            <div>
              <h2>Farmer Registration</h2>

              <p>
                Register your details to access smart
                procurement services.
              </p>
            </div>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            {/* PERSONAL DETAILS */}
            <div className="section-title">
              <span>👤</span>
              Personal Details
            </div>

            <div className="form-grid">

              {/* NAME */}
              <div className="form-group full-width">

                <label>
                  Farmer Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* AADHAAR */}
              <div className="form-group">

                <label>
                  Aadhaar Number *
                </label>

                <input
                  type="text"
                  name="aadhaar"
                  placeholder="Enter 12-digit Aadhaar number"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  maxLength="12"
                  pattern="[0-9]{12}"
                  inputMode="numeric"
                  required
                />

                <small>
                  Enter your 12-digit Aadhaar number.
                </small>

              </div>

              {/* DISTRICT */}
              <div className="form-group">

                <label>
                  District *
                </label>

                <input
                  type="text"
                  name="district"
                  placeholder="Enter your district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* VILLAGE */}
              <div className="form-group">

                <label>
                  Village Panchayat *
                </label>

                <input
                  type="text"
                  name="village"
                  placeholder="Enter village panchayat"
                  value={formData.village}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* KHASRA */}
              <div className="form-group">

                <label>
                  Khasra Number *
                </label>

                <input
                  type="text"
                  name="khasra"
                  placeholder="Enter Khasra number"
                  value={formData.khasra}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* CROP DETAILS */}
            <div className="section-title crop-title">
              <span>🌱</span>
              Crop Details
            </div>

            <div className="form-grid">

              {/* CROP */}
              <div className="form-group">

                <label>
                  Crop Type *
                </label>

                <select
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select crop
                  </option>

                  <option value="Rice">
                    Rice
                  </option>

                  <option value="Wheat">
                    Wheat
                  </option>

                  <option value="Maize">
                    Maize
                  </option>

                  <option value="Cotton">
                    Cotton
                  </option>

                  <option value="Sugarcane">
                    Sugarcane
                  </option>

                  <option value="Groundnut">
                    Groundnut
                  </option>

                  <option value="Pulses">
                    Pulses
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* QUANTITY */}
              <div className="form-group">

                <label>
                  Quantity (Quintals) *
                </label>

                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* HARVEST DATE */}
              <div className="form-group">

                <label>
                  Harvest Date *
                </label>

                <input
                  type="date"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* INFORMATION */}
            <div className="info-box">

              <div className="info-icon">
                💡
              </div>

              <div>

                <strong>
                  Why do we need these details?
                </strong>

                <p>
                  Your registration details help us
                  recommend nearby procurement centres
                  and provide a smoother procurement
                  experience.
                </p>

              </div>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="submit-button"
            >
              Register Farmer
              <span>→</span>
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {registrationNumber && (

            <div className="success-box">

              <div className="success-icon">
                ✓
              </div>

              <h2>
                Registration Successful!
              </h2>

              <p>
                Your farmer registration has been completed.
              </p>

              <div className="registration-number">

                <span>
                  Registration Number
                </span>

                <strong>
                  {registrationNumber}
                </strong>

              </div>

              <p className="success-note">
                Please keep this registration number
                for future reference.
              </p>

              <button
                className="continue-button"
                onClick={() => {
                  alert("Crop Details page will be connected later.");
                }}
              >
                Continue to Crop Details →
              </button>

            </div>

          )}

        </div>

      </main>

      {/* FOOTER */}
      <footer>
        © 2026 AgriQueue | Smart Farmer Procurement Management Platform
      </footer>

    </div>
  );
}

export default FarmerRegistration;