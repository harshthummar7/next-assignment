import React from "react";
import Link from "next/link";
import { SearchInput } from "../component/ContactInput";
import { ContactButton } from "./ContactButton";
import style from "../styles/Contacts.module.css";

export const ContactHeader = ({ handleSearchInput }) => {
  return (
    <>
      <div className="row">
        <div className={`${style.collg} col-lg-6`}>
          <SearchInput handleSearchInput={handleSearchInput} />
          <div className={style.add}>
            <Link href={"/add-contact"}>
              <ContactButton buttonName={"Add Contact"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
