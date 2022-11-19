import React from "react";
import ProfileComponent from "../features/Profile/index";
const Profile = (props) => {
  
  return (
    <ProfileComponent inputs={["name", "phone", "address"]} />
  );
};

export default Profile;
