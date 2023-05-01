import React, { useEffect, useState } from "react";
import style from "../styles/AddContact.module.css";
import { Form } from "react-bootstrap";
import {
  NameInput,
  EmailInput,
  PhoneInput,
  CompanyInput,
  AddressInput,
} from "../component/ContactInput";
import { ContactButton } from "../component/ContactButton";

export const ContactForm = ({ handleSubmit, handleInputChange, action }) => {
  return (
    <div className={`${style.form} container`}>
      <div
        className={`${style.form} row justify-content-center align-items-center`}
      >
        <div className={`${style.collg} col-lg-6`}>
          <div className="container">
            <Form onSubmit={handleSubmit}>
              <label className="row justify-content-center font-weight-bold">
                {action !== "add" ? "Edit Contact" : "Add Contact"}
              </label>

              <div className="row ml-1">
                <NameInput
                  handleInputChange={handleInputChange}
                  action={action}
                />
                <EmailInput
                  handleInputChange={handleInputChange}
                  action={action}
                />
                <PhoneInput
                  handleInputChange={handleInputChange}
                  action={action}
                />
                <CompanyInput
                  handleInputChange={handleInputChange}
                  action={action}
                />
                <AddressInput
                  handleInputChange={handleInputChange}
                  action={action}
                />
                <div className="d-flex justify-content-center">
                  <ContactButton buttonName={"Submit"} />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
