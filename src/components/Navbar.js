import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState("navbar");
  const [logoStyle, setLogoStyle] = useState("logo");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  const onScroll = () => {
    if (window.scrollY >= 200) {
      setNavbarStyle("navbar shrink-navbar");
      setLogoStyle("logo shrink-logo");
    } else {
      setNavbarStyle("navbar");
      setLogoStyle("logo");
    }
  };

  const closeMenu = () => setClicked(false);

  window.addEventListener("scroll", onScroll);

  return (
    <div className={navbarStyle}>
      <Link to="/" className={logoStyle} onClick={closeMenu}>
        Just Post
      </Link>
      <ul className={clicked ? "links active" : "links"}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/store" onClick={closeMenu}>
          Store
        </Link>
      </ul>
      {clicked ? (
        <MdClose onClick={handleClick} className={"menu-icon"} />
      ) : (
        <FaBars onClick={handleClick} className={"menu-icon"} />
      )}
      {clicked ? (
        <div className="backdrop" onClick={closeMenu} />
      ) : (
        <div className="backdrop" style={{ display: "none" }} />
      )}
    </div>
  );
}
