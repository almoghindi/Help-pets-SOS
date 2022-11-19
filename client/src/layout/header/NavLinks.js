import React from 'react';
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavigationBarLink from "./NavigationBarLink";
import AuthLink from "./AuthLink";
import CartLink from "./CartLink";

export default function NavLinks() {
 const links = [
   { title: "Home", icon: "house", link: "/" },
   { title: "About", icon: "address-card", link: "/about" },
   { title: "Store", icon: "shop", link: "/store?page=1" },
 ];
 
 return (
   <Offcanvas.Body>
     <Nav className="flex-grow-1 pe-3 m-2">
       {links.map((link) => (
         <NavigationBarLink
           key={link.title}
           link={link.link}
           icon={link.icon}
           title={link.title}
         />
       ))}
     </Nav>
     <Nav>
       <CartLink/>
       <AuthLink />
     </Nav>
   </Offcanvas.Body>
 );
}