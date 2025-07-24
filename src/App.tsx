import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "./utils/ga";

import InvestMomentum from "./page/InvestMomentum";

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (location.pathname) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <InvestMomentum />
    </div>
  );
}

export default App;
