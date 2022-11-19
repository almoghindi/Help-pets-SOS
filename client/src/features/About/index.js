import React from 'react';
import Card from './Card';
import "./about.css";

const About = (props) => {
  const data = props.data;
 return (
   <div
     className="container-fluid mx-auto mt-5 mb-5 col-12"
     style={{ textAlign: "center" }}
   >
     <div className="hd">Why People Believe in Us</div>
     <p>
       <small className="text-muted">
         We do it fully voluntarily, with love and passion <br />
         we do everything we could, no matter what your ask may be.
       </small>
     </p>
     <div className="row" style={{ justifyContent: "center" }}>
    {data && data.map(item =>
     <Card key={item.id} id={item.id} img={item.img} title={item.title} description={item.description}/>)}
     </div>
     <div className="ft">
       <p className="chk">
         <small className="text-muted">Still not sure?</small>
       </p>
       <div className="btn btn-secondary">Read All Testimonials</div>
     </div>
   </div>
 );
}
export default About;