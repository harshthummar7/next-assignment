import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import style from "../styles/Contacts.module.css";
import { Card } from "./Card";
import { Heading } from "./Heading";
import { columnName } from "@/utils/constants";
import { ContactList } from "../component/ContactList";
import { ContactHeader } from "./ContactHeader";
import { colorFunction, fetchContact, setLocalStorage } from "@/utils/helper";

export default function Contacts() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [mainList, setMainList] = useState([]);
  const [cardData, setCardData] = useState({});
  const [colorName, setColorName] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const listData = fetchContact() || [];
    setList(listData);
    setMainList(listData);
  }, []);

  useEffect(() => {
    if (searchInput === "") {
      setList(mainList);
      return;
    }

    const regex = new RegExp(searchInput, "i");
    if (Array.isArray(mainList) && mainList.length !== 0) {
      const filteredNames = mainList.filter((x) => regex.test(x.name));
      setList(filteredNames);
    }
  }, [searchInput, mainList]);

  const handleSearchInput = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  const editList = useCallback(
    (index) => {
      router.push(`/edit-list/${index}`);
    },
    [router]
  );

  const deleteList = useCallback((index) => {
    setList((prevList) => {
      const updatedList = prevList.filter((data, i) => i !== index);
      setLocalStorage(JSON.stringify(updatedList));
      setMainList(updatedList);
      return updatedList;
    });
  }, []);

  const handleMouseOver = useCallback(
    (i) => {
      setCardData(list[i]);
      setColorName(list[i].color);
      setIsHovering(true);
    },
    [list]
  );

  const handleMouseOut = useCallback(() => {
    setCardData({});
    setIsHovering(false);
    setColorName("");
  }, [list]);

  return (
    <>
      <div className={`${style.container} container`}>
        <Heading></Heading>
        <ContactHeader handleSearchInput={handleSearchInput} />
        <br></br>
        {list.length === 0 ? null : (
          <ContactList
            list={list}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            colorFunction={colorFunction}
            editList={editList}
            deleteList={deleteList}
            columnName={columnName}
          />
        )}
      </div>
      {isHovering ? <Card value={cardData} color={colorName}></Card> : null}
    </>
  );
}
