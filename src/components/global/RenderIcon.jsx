import React from "react";
import { ReactSVG } from "react-svg";

export default function RenderSvg({ path, size, type }) {
  return (
    <ReactSVG
      src={path}
      className={`${size ? size : ""} ${
        type === "destructive"
          ? "destructive-icons"
          : type === "save"
          ? "save-icons"
          : type === "black"
          ? "black-icons"
          : type === "nav"
          ? "nav-icons"
          : "gray-icons"
      }`}
    />
  );
}
