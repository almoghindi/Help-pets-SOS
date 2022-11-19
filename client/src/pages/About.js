import React from 'react';
import AboutComp from '../features/About/index';
const About = () => {
 return <AboutComp data={ [{
     id:1,
     img: "https://i.imgur.com/S7FJza5.png",
     title: "We're Free",
     description:
       "We operate entirely voluntarily, With love to help our sweathearts pets from bad peoples, the only thing that cost money is the store that you able to donate food and games for pets in non-profit organizations.",
   },
  {
     id:2,
     img: "https://i.imgur.com/xUWJuHB.png",
     title: "We're Unbiased and came from love",
     description:
       "We don't accept ads from anyone. The creators of the organization is people that care of pets and wants to help the community, everyone here came in purpose to give us a platform to made our world better.",
   },
  {
    id:3,
    img: "https://i.imgur.com/rG3CGn3.png",
    title: "We take care of everything",
    description:"The only thing do you need to do is to report us, we gonna take care of the event. We want to help in the best way we can do - start from save the pet and take care until they will find a new owner."
   }]} />;
}
export default About;