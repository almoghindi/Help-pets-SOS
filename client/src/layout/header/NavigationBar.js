import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
export default function NavigationBar() {

  return (
    <>
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
      <Navbar.Offcanvas
        id="offcanvasNavbar-expand-lg"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
            Help Pets SOS
          </Offcanvas.Title>
          <Logo />
        </Offcanvas.Header>
        <NavLinks />
      </Navbar.Offcanvas>
    </>
  );
}
