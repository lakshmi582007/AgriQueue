import { useState } from "react";
import "./Login.css";

function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const sendOTP = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    // Demo OTP
    setOtpSent(true);
    setMessage("OTP sent successfully! Demo OTP: 123456");
  };

  const verifyOTP = (e) => {
    e.preventDefault();

    if (otp === "123456") {
      setMessage("Login successful! Welcome to AgriQueue.");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">🌾</div>

        <h1>AgriQueue</h1>

        <p className="subtitle">
          Smart Farmer Procurement Platform
        </p>

        <h2>Welcome Back</h2>

        <p className="login-text">
          Login using your registered mobile number
        </p>

        {!otpSent ? (
          <form onSubmit={sendOTP}>

            <label>Mobile Number</label>

            <div className="mobile-input">
              <span>+91</span>

              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
                maxLength="10"
              />
            </div>

            <button type="submit">
              Send OTP
            </button>

          </form>
        ) : (
          <form onSubmit={verifyOTP}>

            <label>Enter OTP</label>

            <input
              className="otp-input"
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, ""))
              }
              maxLength="6"
            />

            <button type="submit">
              Verify OTP
            </button>

            <button
              type="button"
              className="change-number"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setMessage("");
              }}
            >
              Change Mobile Number
            </button>

          </form>
        )}

        {message && (
          <div className="message">
            {message}
          </div>
        )}

        <div className="register">
          <p>
            Don't have an account?
            <a href="#"> Create Account</a>
          </p>
        </div>

        <div className="footer">
          Secure & Transparent Procurement
        </div>

      </div>
    </div>
  );
}

export default Login;