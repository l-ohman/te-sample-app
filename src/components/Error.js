import React from "react";

export default function Error({ msg }) {
  return <h2>{msg || "Error"}</h2>;
}
