import React from "react";

const BulletPoint: React.FC = () => {
  return (
    <svg
      
      width="80"
      height="20"
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static Line */}
      <rect y="10" width="50" height="2" fill="#F4851F"></rect>

      {/* Rotating Arrow */}
      <rect
        className="spin"
        x="50"
        y="5"
        width="11"
        height="11"
        fill="#F4851F"
        style={{
          transformOrigin: "55.5px 10.5px", 
        }}
      ></rect>
    </svg>
  );
};

export default BulletPoint;
