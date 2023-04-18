// import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import style from "../styles/Sidebar.module.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={style.main}>
      <CDBSidebar
        // textColor="#fff"
        // backgroundColor="#F89880"
        className={style.sidebar}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <CDBSidebarHeader className={style.header}>
          <i className="fa fa-bars fa-large"></i>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="bi bi-house-door"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="bi bi-person"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="bi bi-file-earmark-ruled"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="bi bi-alarm"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="fas fa-database"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="bi bi-calendar"></i>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i class="bi bi-gear"></i>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
// import React from "react";

// export default function Sidebar() {
//   return <div>sidebar</div>;
// }
// import Link from "next/link";
// import style from "../styles/Sidebar.module.css";
