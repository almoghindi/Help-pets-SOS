import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
import ProfileLink from './ProfileLink';
import Button from "react-bootstrap/Button";

export default function AuthLink() {
 const auth = useContext(AuthContext);

 return (
   <>
     {auth.isLoggedIn && <ProfileLink />}
     {!auth.isLoggedIn && (
       <Link to="/auth" className="justify-content-end" >
         <Button type="button" variant="dark" className="m-4" size="md">
           Log in
         </Button>
       </Link>
     )}
   </>
 );
}