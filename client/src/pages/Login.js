import React from 'react';
import Auth from '../features/Authentication/Auth/index';

export default function Login() {
 return (
   <Auth
     login={["email", "password"]}
     signup={["email", "password", "name", "phone"]}
   />
 );
}