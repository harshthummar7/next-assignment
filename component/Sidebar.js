import style from "../styles/Sidebar.module.css";
import React from "react";
import { icons } from "../utils/constants";

export const Sidebar = () => {
  return (
    <>
      <div className={style.main}>
        <div>
          <i className="bi bi-menu-down"></i>
        </div>
        {icons.map((icon) => (
          <MenuItem key={icon} icon={icon} />
        ))}
      </div>
    </>
  );
};

const MenuItem = ({ icon }) => {
  return (
    <div className={style.div}>
      <i className={`bi bi-${icon}`}></i>
    </div>
  );
};
