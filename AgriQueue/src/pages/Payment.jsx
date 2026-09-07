import React, { useState } from "react";
import "./Payment.css";

function Payment() {
  const [paymentStatus, setPaymentStatus] = useState("processing");
  const [showNotification, setShowNotification] = useState(false);

  const handleCheckPayment = () => {
    setPaymentStatus("success");
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="payment-page">

      {/* Header */}
      <header className="payment-header">
        <div className="logo-section">
          <div className="logo-icon">🌾</div>
          <div>
            <h2>Smart Farmer</h2>
            <p>Procurement Management</p>
          </div>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          Payment Tracking
        </div>
      </header>

      {/* Main Content */}
      <main className="payment-container">

        {/* Page Title */}
        <section className="payment-title">
          <span className="title-icon">💰</span>
          <div>
            <h1>Payment Status</h1>
            <p>Track your procurement payment easily</p>
          </div>
        </section>

        {/* Payment Card */}
        <section className="payment-card">

          <div className="card-top">
            <div>
              <p className="small-heading">PROCUREMENT PAYMENT</p>
              <h2>Payment Details</h2>
            </div>

            <div
              className={`payment-badge ${
                paymentStatus === "success" ? "success" : "processing"
              }`}
            >
              {paymentStatus === "success" ? "✓ Successful" : "⏳ Processing"}
            </div>
          </div>

          {/* Amount */}
          <div className="amount-section">
            <p>Total Amount</p>
            <h1>₹25,500</h1>
          </div>

          {/* Details */}
          <div className="details-grid">

            <div className="detail-box">
              <span className="detail-icon">🌾</span>
              <div>
                <p>Crop Type</p>
                <h3>Wheat</h3>
              </div>
            </div>

            <div className="detail-box">
              <span className="detail-icon">⚖️</span>
              <div>
                <p>Quantity</p>
                <h3>500 kg</h3>
              </div>
            </div>

            <div className="detail-box">
              <span className="detail-icon">📅</span>
              <div>
                <p>Procurement Date</p>
                <h3>10 September 2026</h3>
              </div>
            </div>

            <div className="detail-box">
              <span className="detail-icon">🏢</span>
              <div>
                <p>Procurement Centre</p>
                <h3>Centre A</h3>
              </div>
            </div>

          </div>

          {/* Transaction Details */}
          <div className="transaction-section">

            <h3>Transaction Information</h3>

            <div className="transaction-row">
              <span>Transaction ID</span>
              <strong>
                {paymentStatus === "success"
                  ? "TXN202609100025"
                  : "Processing..."}
              </strong>
            </div>

            <div className="transaction-row">
              <span>Payment Date</span>
              <strong>
                {paymentStatus === "success"
                  ? "10 September 2026"
                  : "Not available"}
              </strong>
            </div>

            <div className="transaction-row">
              <span>Payment Method</span>
              <strong>Direct Bank Transfer</strong>
            </div>

          </div>

          {/* Payment Status Timeline */}
          <div className="timeline">

            <div className="timeline-item completed">
              <div className="timeline-circle">✓</div>
              <div>
                <h4>Procurement Completed</h4>
                <p>Your crop has been successfully procured.</p>
              </div>
            </div>

            <div
              className={`timeline-item ${
                paymentStatus === "success" ? "completed" : "active"
              }`}
            >
              <div className="timeline-circle">
                {paymentStatus === "success" ? "✓" : "2"}
              </div>

              <div>
                <h4>Payment Processing</h4>
                <p>
                  {paymentStatus === "success"
                    ? "Payment has been processed successfully."
                    : "Your payment is currently being processed."}
                </p>
              </div>
            </div>

            <div
              className={`timeline-item ${
                paymentStatus === "success" ? "completed" : ""
              }`}
            >
              <div className="timeline-circle">
                {paymentStatus === "success" ? "✓" : "3"}
              </div>

              <div>
                <h4>Payment Successful</h4>
                <p>
                  {paymentStatus === "success"
                    ? "Amount has been successfully transferred."
                    : "Waiting for payment completion."}
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          {paymentStatus === "processing" && (
            <button className="check-button" onClick={handleCheckPayment}>
              Check Payment Status
            </button>
          )}

          {paymentStatus === "success" && (
            <div className="success-message">
              <span>✓</span>
              Payment Successfully Completed
            </div>
          )}

        </section>

      </main>

      {/* Notification */}
      {showNotification && (
        <div className="payment-notification">
          <div className="notification-icon">🔔</div>
          <div>
            <h3>Payment Completed</h3>
            <p>
              Your procurement payment has been successfully processed.
            </p>
          </div>
        </div>
      )}

    </div>
}

export default Payment;