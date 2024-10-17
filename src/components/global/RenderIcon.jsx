import React from "react";
import { ReactSVG } from "react-svg";

export default function RenderSvg({ path, size }) {
  return (
    <ReactSVG src={path} className={`${size ? size : "h-5 w-5"} gray-icons`} />
  );
}
