import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(import.meta.env.VITE_APP_SECRETKEY);
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
}
