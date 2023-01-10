import React from "react";
// React icons placeholder

export default function Loading({ data }) {
  return <h2>{`Loading ${data || "data"}...`}</h2>;
}
