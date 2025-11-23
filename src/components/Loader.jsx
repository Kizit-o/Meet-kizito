import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load or fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Remove this and replace with your actual data loading
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {/* Your actual app content */}
      <h1>App Loaded</h1>
    </div>
  );
}

export default App;