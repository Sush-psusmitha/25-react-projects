// hex- #786554
// rgb - rgb(65,87,22)

import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOFColor, setTypeOFColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handlehexRandomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);

    setColor(hexColor);
  }
  function handlergbRandomColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOFColor === "rgb") handlergbRandomColor();
    else handlehexRandomColor();
  }, [typeOFColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOFColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOFColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOFColor === "hex" ? handlehexRandomColor : handlergbRandomColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>{typeOFColor === "rgb" ? "RGB Color:   " : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
