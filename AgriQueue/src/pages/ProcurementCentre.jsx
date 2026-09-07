import { useState } from "react";
import "./ProcurementCentre.css";

const procurementCentres = [
  {
    centre_id: 1,
    centre_name: "Chengalpattu Procurement Centre",
    distance: "2.8 km",
    demand: "High Demand",
    demandType: "high",
    queue: 18,
    waitingTime: "~75 min",
    address: "GST Road, Chengalpattu",
    recommended: false,
    slots: [
      "09:00 AM - 10:00 AM",
      "11:00 AM - 12:00 PM",
    ],
  },
  {
    centre_id: 2,
    centre_name: "Tambaram Procurement Centre",
    distance: "5.2 km",
    demand: "Low Demand",
    demandType: "low",
    queue: 5,
    waitingTime: "~20 min",
    address: "GST Road, Tambaram",
    recommended: true,
    slots: [
      "09:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
    ],
  },
  {
    centre_id: 3,
    centre_name: "Kanchipuram Procurement Centre",
    distance: "7.1 km",
    demand: "Medium Demand",
    demandType: "medium",
    queue: 9,
    waitingTime: "~35 min",
    address: "Bangalore Highway, Kanchipuram",
    recommended: false,
    slots: [
      "09:00 AM - 10:00 AM",
      "11:00 AM - 12:00 PM",
    ],
  },
];

function ProcurementCentre() {
  const [selectedCentre, setSelectedCentre] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [viewingSlots, setViewingSlots] = useState(null);
  const [location, setLocation] = useState("Chengalpattu, Tamil Nadu");
  const [loading, setLoading] = useState(false);

  // GPS LOCATION
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        setLocation(
          `Location detected (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`
        );

        setLoading(false);
      },
      () => {
        alert("Please allow location access.");
        setLoading(false);
      }
    );
  };

  // SELECT CENTRE
  const selectCentre = (centre) => {
    setSelectedCentre(centre);
    setSelectedSlot(null);
  };

  // VIEW SLOTS
  const viewSlots = (centre) => {
    setViewingSlots(centre);
    setSelectedCentre(centre);
    setSelectedSlot(null);
  };

  // SELECT SLOT
  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  // GET TOKEN
  const getToken = () => {
    if (!selectedCentre) {
      alert("Please select a procurement centre first.");
      return;
    }

    if (!selectedSlot) {
      alert("Please select a time slot first.");
      return;
    }

    alert(
      `Centre: ${selectedCentre.centre_name}\n` +
      `Slot: ${selectedSlot}\n\n` +
      `Token generation will be done next.`
    );
  };

  return (
    <div className="procurement-page">

      {/* NAVBAR */}
      <nav className="procurement-navbar">

        <div className="procurement-logo">
          🌾 AgriQueue
        </div>

        <div className="procurement-nav-links">
          <a href="/">Home</a>
          <a href="/farmer">Registration</a>
          <a href="/crop-details">Crop Details</a>
          <a href="/procurement">Procurement</a>
        </div>

      </nav>

      {/* HERO */}
      <section className="procurement-hero">

        <p>SMART AGRICULTURAL PROCUREMENT</p>

        <h1>
          Choose Your
          <span> Procurement Centre</span>
        </h1>

        <h3>
          Compare distance, demand and waiting time before booking your slot.
        </h3>

      </section>

      {/* LOCATION */}
      <section className="location-section">

        <div className="location-box">

          <div>
            <p>📍 YOUR LOCATION</p>
            <h3>{location}</h3>
          </div>

          <button
            className="location-btn"
            onClick={getCurrentLocation}
          >
            {loading
              ? "Detecting Location..."
              : "📍 Use Current Location"}
          </button>

        </div>

      </section>

      {/* SUGGESTED CENTRES */}
      <section className="centres-section">

        <div className="section-heading">

          <div>
            <p>RECOMMENDED FOR YOU</p>
            <h2>3 Suggested Centres</h2>
          </div>

          <span>3 Centres</span>

        </div>

        {/* CENTRE TABLE */}
        <div className="centre-table-wrapper">

          <table className="centre-table">

            <thead>
              <tr>
                <th>Procurement Centre</th>
                <th>Distance</th>
                <th>Demand Level</th>
                <th>Current Queue</th>
                <th>Expected Waiting Time</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {procurementCentres.map((centre) => (

                <tr
                  key={centre.centre_id}
                  className={
                    selectedCentre?.centre_id === centre.centre_id
                      ? "selected-row"
                      : ""
                  }
                >

                  {/* CENTRE */}
                  <td>

                    <div className="centre-name">

                      <div className="centre-icon">
                        🏢
                      </div>

                      <div>

                        <strong>
                          📍 {centre.centre_name}

                          {centre.recommended && (
                            <span className="recommended-star">
                              ⭐
                            </span>
                          )}
                        </strong>

                        {centre.recommended && (
                          <small>
                            Recommended
                          </small>
                        )}

                        <p>
                          {centre.address}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* DISTANCE */}
                  <td>
                    <span className="distance-text">
                      📍 {centre.distance}
                    </span>
                  </td>

                  {/* DEMAND */}
                  <td>

                    <span
                      className={`demand-badge ${centre.demandType}`}
                    >

                      {centre.demandType === "low" && "🟢"}
                      {centre.demandType === "medium" && "🟠"}
                      {centre.demandType === "high" && "🔴"}

                      {" "}
                      {centre.demand}

                    </span>

                  </td>

                  {/* QUEUE */}
                  <td>

                    <strong className="queue-number">
                      {centre.queue}
                    </strong>{" "}
                    farmers

                  </td>

                  {/* WAITING TIME */}
                  <td>

                    <span className="waiting-time">
                      ⏱ {centre.waitingTime}
                    </span>

                  </td>

                  {/* ACTION */}
                  <td>

                    <button
                      className="view-slots-btn"
                      onClick={() => viewSlots(centre)}
                    >
                      View Slots →
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* DEMAND INDICATORS */}
        <div className="demand-section">

          <h3>Demand Indicators</h3>

          <div className="demand-list">

            <div className="demand-item low">
              <span>🟢</span>

              <div>
                <strong>Low Demand</strong>
                <p>Less crowd / shorter waiting time</p>
              </div>

            </div>

            <div className="demand-item medium">
              <span>🟠</span>

              <div>
                <strong>Medium Demand</strong>
                <p>Moderate crowd / moderate waiting time</p>
              </div>

            </div>

            <div className="demand-item high">
              <span>🔴</span>

              <div>
                <strong>High Demand</strong>
                <p>More crowd / longer waiting time</p>
              </div>

            </div>

          </div>

        </div>

        {/* MANUAL SELECTION */}
        <div className="choose-own-box">

          <p>
            Don't want to use the suggested centres?
          </p>

          <button
            className="choose-own-btn"
            onClick={() => setShowAll(!showAll)}
          >

            {showAll
              ? "Hide All Centres ↑"
              : "Choose From All Procurement Centres →"}

          </button>

        </div>

        {/* ALL CENTRES */}
        {showAll && (

          <div className="all-centres">

            <div className="all-heading">

              <p>AVAILABLE CENTRES</p>

              <h2>
                Choose Any Procurement Centre
              </h2>

            </div>

            <div className="all-centres-list">

              {procurementCentres.map((centre) => (

                <div
                  className={`all-centre-card ${
                    selectedCentre?.centre_id === centre.centre_id
                      ? "selected-all-centre"
                      : ""
                  }`}
                  key={centre.centre_id}
                >

                  <div className="all-centre-icon">
                    🏢
                  </div>

                  <div className="all-centre-details">

                    <h3>
                      {centre.centre_name}
                    </h3>

                    <p>
                      📍 {centre.address}
                    </p>

                    <small>
                      👥 {centre.queue} farmers currently in queue
                    </small>

                  </div>

                  <button
                    className="select-all-btn"
                    onClick={() => selectCentre(centre)}
                  >

                    {selectedCentre?.centre_id === centre.centre_id
                      ? "✓ Selected"
                      : "Select"}

                  </button>

                </div>

              ))}

            </div>

          </div>

        )}

      </section>

      {/* SLOT SECTION */}
      {viewingSlots && (

        <section className="slots-section">

          <div className="slots-header">

            <div>

              <p>AVAILABLE SLOTS</p>

              <h2>
                {viewingSlots.centre_name}
              </h2>

              <span>
                📍 {viewingSlots.distance}
                {" • "}
                {viewingSlots.demand}
                {" • "}
                ⏱ {viewingSlots.waitingTime}
              </span>

            </div>

            <button
              className="close-slots"
              onClick={() => setViewingSlots(null)}
            >
              ✕
            </button>

          </div>

          <div className="slots-grid">

            {viewingSlots.slots.map((slot) => (

              <button
                key={slot}
                className={
                  selectedSlot === slot
                    ? "slot-card selected-slot"
                    : "slot-card"
                }
                onClick={() => selectSlot(slot)}
              >

                <span>🕐</span>

                <strong>
                  {slot}
                </strong>

                {selectedSlot === slot && (
                  <small>
                    ✓ Selected
                  </small>
                )}

              </button>

            ))}

          </div>

        </section>

      )}

      {/* SELECTED CENTRE */}
      {selectedCentre && (

        <section className="selected-section">

          <div className="selected-summary">

            <div>

              <p>SELECTED PROCUREMENT CENTRE</p>

              <h2>
                {selectedCentre.centre_name}
              </h2>

              <span>
                📍 {selectedCentre.distance}
                {" • "}
                {selectedCentre.address}
              </span>

              {selectedSlot && (

                <div className="selected-slot-text">
                  🕐 Selected Slot:{" "}
                  <strong>{selectedSlot}</strong>
                </div>

              )}

            </div>

            <button
              className="token-btn"
              onClick={getToken}
            >
              Get Token →
            </button>

          </div>

        </section>

      )}

    </div>
  );
}

export default ProcurementCentre;