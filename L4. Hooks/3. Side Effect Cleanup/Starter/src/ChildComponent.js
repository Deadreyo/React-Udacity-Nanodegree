import React, { useState, useEffect } from "react";

function  ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let timer = setTimeout(() => setColor("green"), 3000);

    return () => {
      clearTimeout(timer)
    }
  });

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
