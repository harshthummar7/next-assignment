import React from "react";
import style from "../styles/AddContact.module.css";
import searchStyle from "../styles/Contacts.module.css";

export const NameInput = ({ handleInputChange, action }) => {
  return (
    <>
      <label className="row form-text text-muted">Full name</label>
      <input
        className={`${style.data} row form-control`}
        type="text"
        name="name"
        defaultValue={action !== "add" ? action.name : null}
        required
        pattern="^[a-zA-Z]+ ?[a-zA-Z]+$"
        maxLength={15}
        placeholder="Full name"
        onInvalid={(e) =>
          e.target.setCustomValidity(
            "Please enter a valid full name containing only alphabets and maximum 15 length"
          )
        }
        onInput={(e) => e.target.setCustomValidity("")}
        onChange={handleInputChange}
      />
      <br></br>
    </>
  );
};

export const EmailInput = ({ handleInputChange, action }) => {
  return (
    <>
      <label className="row form-text text-muted">Email</label>
      <input
        className={`${style.data} row form-control`}
        type="Email"
        name="email"
        defaultValue={action !== "add" ? action.email : null}
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        placeholder="Email"
        onInvalid={(e) =>
          e.target.setCustomValidity("Please enter valid email address")
        }
        onInput={(e) => e.target.setCustomValidity("")}
        onChange={handleInputChange}
      />
      <br></br>
    </>
  );
};

export const PhoneInput = ({ handleInputChange, action }) => {
  return (
    <>
      <label className="row form-text text-muted">Phone</label>
      <input
        className={`${style.data} row form-control`}
        type="tel"
        name="phone"
        defaultValue={action !== "add" ? action.phone : null}
        required
        pattern="[0-9]{10}"
        placeholder="***** *****"
        onInvalid={(e) =>
          e.target.setCustomValidity("Please enter a valid phone number")
        }
        onInput={(e) => e.target.setCustomValidity("")}
        onChange={handleInputChange}
      />
      <br></br>
    </>
  );
};

export const CompanyInput = ({ handleInputChange, action }) => {
  return (
    <>
      <label className="row form-text text-muted">Company</label>
      <input
        className={`${style.data} row form-control`}
        type="text"
        name="company"
        defaultValue={action !== "add" ? action.company : null}
        required
        placeholder="Company"
        onChange={handleInputChange}
      />
      <br></br>
    </>
  );
};

export const AddressInput = ({ handleInputChange, action }) => {
  return (
    <>
      <label className="row form-text text-muted">Address</label>
      <input
        className={`${style.data} row form-control`}
        type="text"
        name="address"
        defaultValue={action !== "add" ? action.address : null}
        maxLength={20}
        required
        placeholder="Address"
        onChange={handleInputChange}
      />
      <br></br>
    </>
  );
};

export const SearchInput = ({ handleSearchInput }) => {
  return (
    <>
      <input
        className={`${searchStyle.input} row form-control `}
        type="text"
        placeholder="search contact"
        onChange={handleSearchInput}
      />
    </>
  );
};
