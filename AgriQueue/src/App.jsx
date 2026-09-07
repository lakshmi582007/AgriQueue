import Login from "./pages/Login";
import FarmerRegistration from "./pages/FarmerRegistration";
import Payment from "./pages/Payment";
import ProcurementCentre from "./pages/ProcurementCentre";
import "./App.css";

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/login") {
    return <Login />;
  }
  if (currentPath === "/farmer-registration") {
    return <FarmerRegistration />;
  }
  if (currentPath === "/payment") {
    return <Payment />;
  }
  if (currentPath === "/procurement-centre") {
    return <ProcurementCentre />;
  }

  return (
    <div className="app-container">
      <div className="home-icon">🌾</div>
      <h1>AgriQueue</h1>
      <p>Smart Farmer Procurement Management Platform</p>
      <a href="/farmer-registration" className="registration-btn">
        Farmer Registration →
      </a>
      <br />
      <a href="/procurement-centre" className="registration-btn">
        Procurement Centre →
      </a>
      <br />
      <a href="/payment" className="registration-btn">
        Payment Status →
      </a>
      <br />
      <a href="/login" className="registration-btn">
        Login →
      </a>
    </div>
  );
}

export default App;