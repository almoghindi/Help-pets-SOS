import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
export default function Header() {
 return (
   <>
     <Navbar
       key="lg"
       expand="lg"
       className="mb-3"
       style={{ background: "#eecab1" }}
     >
       <Container fluid>
         <Logo />
         <NavigationBar />
       </Container>
     </Navbar>
   </>
 );
}