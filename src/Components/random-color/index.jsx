import React from "react";
import { useState } from "react";
import "./rand.css";

// #123456 - hex
// rgb(25, 45, 67) - rgb

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    // #000000
    setTypeOfColor("hex");
    const hexRange = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let chosenClr = "#";

    for (let i = 0; i < 6; i++) {
      chosenClr += hexRange[Math.floor(Math.random() * hexRange.length)];
    }

    // console.log(chosenClr);
    setColor(chosenClr);
  }

  function handleCreateRandomRgbColor() {
    setTypeOfColor("rgb");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let finalRGB = `rgb(${r}, ${g}, ${b})`;
    setColor(finalRGB);
  }

  function generateRandom() {
    const arrayOfModes = ["rgb", "hex"];
    let chooseInd = Math.floor(Math.random() * arrayOfModes.length);
    let changeMode = arrayOfModes[chooseInd];
    console.log(changeMode);
    changeMode == 'rgb' ? handleCreateRandomRgbColor() : handleCreateRandomHexColor()
  }

  return (
    <section>
      <div
        style={{
          width: "70vw",
          height: "70vh",
          background: color,
        }}
        id="container"
      >
        <div id="controls">
          <button onClick={handleCreateRandomHexColor}>Create HEX Color</button>
          <button onClick={handleCreateRandomRgbColor}>Create RGB Color</button>
          <button onClick={generateRandom}>Create Random Color</button>
        </div>

        <div id="newColor">{color}</div>
      </div>
    </section>
  );
}

export default RandomColor;
