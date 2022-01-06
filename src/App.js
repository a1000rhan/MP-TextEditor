import "./App.css";
import React, { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

const colorChange = (color) => {
  console.log(color);
};
function App() {
  const [changeValue, setChangeValue] = useState("");
  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => setChangeValue(style)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => setChangeValue((styles.color = { color: color }))}
    />
  ));
  console.log(styles);

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea style={styles[changeValue]} />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
