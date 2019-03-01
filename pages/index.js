import React from "react";

export default () => (
  <div
    style={{
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <input
      placeholder="Sign up"
      style={{
        width: "33vw",
        height: "40px",
        borderRadius: "3px",
        appearance: "none",
        border: "1px solid #333",
        paddingLeft: "10px",
        outline: "none"
      }}
    />
  </div>
);
