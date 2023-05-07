import React, { useState } from "react";
import "./Header.css";

export default function Header({ bgImage, title, text }) {
  const [textStyle, setTextStyle] = useState("block");

  const bgStyle = {
    background: `url(${bgImage}) no-repeat center center`,
  };

  const onScroll = () => {
    if (window.scrollY >= 600) {
      setTextStyle("none");
    } else {
      setTextStyle("block");
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <header className="main-header" style={bgStyle}>
      <div className="header-content">
        <h1 style={{ display: textStyle }}>{title}</h1>
        <p style={{ display: textStyle }}>{text}</p>
      </div>
    </header>
  );
}
