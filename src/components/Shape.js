import React, { useEffect, useState } from "react";

const Shape = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  let updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
  }, []);

  let shape = {
    width: "150px",
    height: "150px",
    backgroundColor: `blue`,
    position: "absolute",
    top: scrollPosition < 200 ? "500px" : "0px",
    left: scrollPosition ? "0px" : "300px",
    opacity: scrollPosition < 200 ? 1 : 0,
  };

  return (
    <div className="shape" style={shape}>
      Shape
    </div>
  );
};

export default Shape;
