import React from "react";
import SOSButton from '../components/UIElements/SOSButton';

export default function Home() {
 return (
   <>
     <SOSButton link="/helpets" />
     <p
       style={{
         textAlign: "center",
         fontSize: "20px",
         fontFamily: "Helvetica",
       }}
     >
       Help us to help the pets ! press the big{" "}
       <span style={{ color: "red" }}>RED</span> button in case you see or think
       that there is an pets abuse,
       <br />
       <span style={{ fontSize: "20px", fontWeight: "bold"}}>We will take care of the rest!</span>
       <br />
       We recommend to you to see our store where you can buy staff for your
       pets or the donate for our charity.
     </p>
   </>
 );
}