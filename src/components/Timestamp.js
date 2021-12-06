import React from "react";

function Timestamp({ children }) {
  return (
    <div>
      <span className="timestamp"> {children} </span>
    </div>
  );
}

export default Timestamp;
