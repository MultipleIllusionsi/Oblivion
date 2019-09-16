import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./registration.scss";

const Registration = () => (
  <div className="registration">
    <SignIn />
    <SignUp />
  </div>
);

export default Registration;
