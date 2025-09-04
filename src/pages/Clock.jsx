import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("black");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div style={{ color: color, textAlign: "center", padding: "20px" }}>
        <h1>{time}</h1>
      </div>

      <select onChange={(e) => setColor(e.target.value)}>
        <option disabled selected>
          Select Clock Colors
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
      </select>
    </>
  );
}

export default Clock;
