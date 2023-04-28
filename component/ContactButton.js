import React from "react";
import { Button } from "react-bootstrap";
import style from "../styles/Contacts.module.css";

export const ContactButton = ({ buttonName }) => {
  return (
    <>
      <Button className={style.button} type="submit">
        {buttonName}
      </Button>
    </>
  );
};
