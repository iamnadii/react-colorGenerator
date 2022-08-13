import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(`#f3f3f3`).all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColor = new Values(color).all(10);
      setList(newColor);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <>
      <div className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f5f5f5"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </div>
      <div className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
