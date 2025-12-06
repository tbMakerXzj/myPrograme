import React, { useState } from "react";

const arr = [1, 2, 3, 4, 5, 6, 7];

const Demo5 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {arr.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: hoveredIndex === index ? "#1890ff" : "#f5f5f5",
            borderRadius: "8px",
            height: hoveredIndex === index ? "80px" : "40px",
            textAlign: "center",
            color: hoveredIndex === index ? "white" : "black",
            alignItems: "center",
            transition: "height .30s ease",
            cursor: "pointer",
          }}
          key={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Demo5;
