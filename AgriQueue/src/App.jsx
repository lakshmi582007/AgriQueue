import FarmerRegistration from "./pages/FarmerRegistration";
import "./App.css";

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/farmer-registration") {
    return <FarmerRegistration />;
  }

  return (
    <div className="app-container">
      <div className="home-icon">🌾</div>

      <h1>AgriQueue</h1>

      <p>
        Smart Farmer Procurement Management Platform
      </p>

      <a
        href="/farmer-registration"
        className="registration-btn"
      >
        Farmer Registration →
      </a>
    </div>
  );
}

export default App;