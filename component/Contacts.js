import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import style from "../styles/Contacts.module.css";
import Card from "./Card";
import Heading from "./Heading";

export default function Contacts() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [cardData, setCardData] = useState({});
  const [c, setC] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  function fetchContact() {
    setList(JSON.parse(localStorage.getItem("contacts")) || []);
    console.log(list);
  }

  const filterFunction = (userInput) => {
    if (searchInput === "") {
      setList(JSON.parse(localStorage.getItem("contacts")));
      return;
    }
    const regex = new RegExp(userInput, "i");
    let filteredNames = list.filter((x) => {
      return regex.test(x.name);
    });
    setList(filteredNames);
    console.log(filteredNames);
  };

  useEffect(() => {
    filterFunction(searchInput);
  }, [searchInput]);

  useEffect(() => {
    fetchContact();
  }, []);

  const editList = (index) => {
    router.push(`/edit-list/${index}`);
  };

  const deleteList = (index) => {
    localStorage.setItem(
      "contacts",
      JSON.stringify([...list.slice(0, index), ...list.slice(index + 1)])
    );
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
    localStorage.removeItem(`${index}`);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleMouseOver = (i) => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    setCardData(data[i]);
    setC(localStorage.getItem(`${i}`));
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setCardData({});
    setIsHovering(false);
    setC("");
  };
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let index = 0;
  const clr = (i) => {
    const color = colors[index];
    index = (index + 1) % colors.length; // increment index, wrapping around to 0 if we reach the end of the array
    localStorage.setItem(`${i}`, color);
    return color;
  };

  return (
    <>
      <div className={`${style.container} container`}>
        <Heading></Heading>
        <div className="row">
          <div className={`${style.collg} col-lg-6`}>
            <input
              className={`${style.input} row form-control `}
              type="text"
              placeholder="search contact"
              style={{
                borderRadius: "15px",
                width: "30vw",
                backgroundColor: "#f5f2f2",
                marginLeft: "0",
              }}
              onChange={handleSearchInput}
              // <i class="bi bi-search"></i>
            />

            <div>
              <Link href={"/add-contact"}>
                <Button
                  style={{setList(filteredNames);ndColor: "#F89880",
                    marginLeft: "50px",
                    borderColor: "white",
                  }}
                >
                  Add Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        {list.length === 0 ? null : (
          <div className="row">
            <div className="col-md-4">
              <div className={`${style.card} card`}>
                <div className={`${style.cardheader} card-header`}>
                  <div>
                    <i className="bi bi-plus"></i>
                  </div>
                  <div className={style.cardheaderDiv}>
                    <div>
                      <p>Basic Info</p>
                    </div>
                    <div>
                      <p>Company</p>
                    </div>
                    <div></div>
                  </div>
                </div>
                {list.map((data, i) => {
                  return (
                    <div key={i} className={`${style.cardbody} card-body`}>
                      <div>
                        <i
                          style={{ fontSize: "10px" }}
                          className="bi bi-square"
                          onMouseOver={() => handleMouseOver(i)}
                          onMouseOut={handleMouseOut}
                        ></i>
                      </div>
                      <div className={style.cardbodyDiv}>
                        <div className={`${style.info}`}>
                          <div
                            className="rounded-circle text-white d-flex align-items-center justify-content-center mr-3"
                            style={{
                              width: "38px",
                              height: "38px",
                              backgroundColor: clr(i),
                            }}
                          >
                            <span className="h4 font-weight-bold m-0">
                              {data.name
                                .split(" ")
                                .map((name) => name.charAt(0))
                                .join("")}
                            </span>
                          </div>
                          <div style={{ overflow: "hidden", width: "101px" }}>
                            <h4
                              style={{ fontSize: "20px" }}
                              className="card-title"
                            >
                              {data.name}{" "}
                            </h4>
                            <p
                              style={{ fontSize: "10px" }}
                              className="card-subtitle mb-2 text-muted"
                            >
                              {data.email}
                            </p>
                          </div>
                        </div>

                        <div className={`${style.company} card-text`}>
                          {data.company}
                        </div>
                        <div
                          style={{
                            width: "40px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <i
                            className="bi bi-pen"
                            onClick={() => editList(i)}
                          ></i>
                          <i
                            className="bi bi-trash"
                            onClick={() => deleteList(i)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      {isHovering ? <Card value={cardData} color={c}></Card> : null}
    </>
  );
}
