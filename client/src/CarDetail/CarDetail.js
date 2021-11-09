import React from "react";
import { useParams } from "react-router";

export const CarDetail = (props) => {
  const params = useParams();

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>{params.name}</h1>
    </div>
  );
};
