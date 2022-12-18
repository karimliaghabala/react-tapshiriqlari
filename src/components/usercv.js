import React, { Component } from "react";
import PersonalInfo from "../components/personalinfo";
import Experience from "../components/experience";
import Contacts from "../components/contacts";

class UserCv extends Component {
  render() {
    return (
      <>
        <PersonalInfo />
        <Experience />
        <Contacts />
      </>
    );
  }
}
export default UserCv;
