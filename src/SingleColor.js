import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: hex }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`#${hexColor}`}</p>
      {alert && <p>Copy to clipboard</p>}
    </div>
  );
};

export default SingleColor;
