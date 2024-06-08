"use client";

import React from "react";
import Notes from "../../components/notes";

const Homepage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Notes />
    </div>
  );
};

export default Homepage;
