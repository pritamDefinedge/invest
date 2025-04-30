import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Events from "./page/Events";
// Import other pages here
import InvestMomentum from "./page/InvestMomentum"; // example page

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Events />} />
          {/* <Route path="/invest" element={<InvestMomentum />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
