import React, { useEffect, useState } from "react";
import style from "../styles/Card.module.css";
export default function Card(props) {
  console.log(props.index);
  const [value, setValue] = useState({});
  const [index, setIndex] = useState(props.index);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    setValue(data[index]);
  }, []);

  useEffect(() => {
    setIndex(props.index);
  }, [props.index]);

  console.log(value);
  return (
    <div className={style.main}>
      <div className={`${style.card} card`}>
        <div className="card-header">
          <div className={style.header}>
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mr-3"
              style={{ width: "50px", height: "50px" }}
            >
              <span className="h4 font-weight-bold m-0">
                {value.name.charAt(0)}
              </span>
            </div>
            <h5 className="card-title mb-0">{value.name}</h5>
          </div>
        </div>
        <div className={`${style.cardbody} card-body`}>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Full Name</p>
            <p className={`${style.value} card-text`}>{value.name}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Email</p>
            <p className={`${style.value} card-text`}>{value.email}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Phone</p>
            <p className={`${style.value} card-text`}>{value.phone}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Company</p>
            <p className={`${style.value} card-text`}>{value.company}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Address</p>
            <p className={`${style.value} card-text`}>{value.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
