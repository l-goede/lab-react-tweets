import React from "react";

function Message({ children }) {
  return (
    <div>
      <p className="message"> {children} </p>
    </div>
  );
}

export default Message;
