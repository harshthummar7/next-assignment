import style from "../styles/Sidebar.module.css";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className={style.main}>
        <div>
          <i className="bi bi-menu-down"></i>
        </div>
        <div className={style.div}>
          <i className="bi bi-house-door"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-person"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-files"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-alarm"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-database"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-calendar"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-gear"></i>
        </div>
      </div>
    </>
  );
}
