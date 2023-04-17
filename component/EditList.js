import React, { useEffect, useState } from "react";
import style from "../styles/AddContact.module.css";
import { Form, Button } from "react-bootstrap";

export default function EditList(props) {
  //   console.log(props.value);
  const [name, setName] = useState(props.value.name);
  const [email, setEmail] = useState(props.value.email);
  const [phone, setPhone] = useState(props.value.phone);
  const [company, setCompany] = useState(props.value.company);
  const [address, setAddress] = useState(props.value.address);

  console.log(name);
  const handlesbm = (e) => {
    e.preventDefault();
    let contact = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      address: address,
    };
    console.log(contact);
    props.newList(contact);
  };

  return (
    <div className={`${style.form} container`}>
      <div
        className={`${style.form} row justify-content-center align-items-center`}
      >
        <div className="col-lg-6" style={{ backgroundColor: "#d79797" }}>
          <div className="container">
            <Form onSubmit={handlesbm}>
              <label className="row justify-content-center font-weight-bold">
                Edit Contact
              </label>

              <div className="row ml-1">
                <label className="row form-text text-muted">Full name</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  required
                  pattern="[A-Za-z\s]+"
                  placeholder="Full name"
                  defaultValue={props.value.name}
                  onChange={(e) => setName(e.target.value)}
                  //   onInvalid={() =>
                  //     nameRef.current.setCustomValidity(
                  //       "Please enter a valid name"
                  //     )
                  //   }
                />
                <br></br>

                <label className="row form-text text-muted">Email</label>
                <input
                  className={`${style.data} row form-control`}
                  type="Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="Email"
                  defaultValue={props.value.email}
                  onChange={(e) => setEmail(e.target.value)}
                  //   onInvalid={() =>
                  //     emailRef.current.setCustomValidity(
                  //       "Please enter a valid email address"
                  //     )
                  //   }
                />
                <br></br>

                <label className="row form-text text-muted">Phone</label>
                <input
                  className={`${style.data} row form-control`}
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="Phone"
                  defaultValue={props.value.phone}
                  onChange={(e) => setPhone(e.target.value)}
                  //   onInvalid={() =>
                  //     phoneRef.current.setCustomValidity(
                  //       "Please enter a 10-digit phone number"
                  //     )
                  //   }
                />
                <br></br>

                <label className="row form-text text-muted">Company</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  required
                  placeholder="Company"
                  defaultValue={props.value.company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <br></br>

                <label className="row form-text text-muted">Address</label>
                <input
                  className={`${style.data} row form-control`}
                  type="text"
                  required
                  placeholder="Address"
                  defaultValue={props.value.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br></br>

                <div className="d-flex justify-content-center">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
