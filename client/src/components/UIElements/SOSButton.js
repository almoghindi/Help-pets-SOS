import React from 'react';
import "./SOSButton.css";
import { Link } from "react-router-dom";

export default function SOSButton(props) {
 return (
  <Link to={props.link}>
   <button className="sos-btn">S.O.S. Help a pet !</button>
  </Link>
 );
}