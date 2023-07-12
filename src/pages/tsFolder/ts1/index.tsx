import React from "react";

// 联合类型

const ts1: React.FC = () => {
  return (
    <div style={{ background: "#fff", padding: 24 }}>
      <h3>页面主要写一些ts相关的知识</h3>
      {`
      interface Person {
        name: string;
        age: number;
        
    }`}
    </div>
  );
};

export default ts1;
