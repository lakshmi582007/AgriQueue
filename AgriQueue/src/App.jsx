import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<CreateAccount />} />

        <Route path="/create-account" element={<CreateAccount />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;