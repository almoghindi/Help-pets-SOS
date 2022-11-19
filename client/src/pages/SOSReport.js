import React from 'react';
import SOSReport from '../features/SOS-Report/index';

export default function Report() {
 return (
   <SOSReport
     loginInputs={["city", "state", "address"]}
     noLoginInputs={["fullname", "phone", "email", "city", "state", "address"]}
   />
 );
}