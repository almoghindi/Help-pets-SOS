import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Logo() {
 return (
     <Link to="/">
         <img alt="logo" src={logo} width="120px" height="120px" padding="0" />
     </Link>
 );
}