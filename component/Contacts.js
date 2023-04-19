import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import style from "../styles/Contacts.module.css";
import Card from "./Card";

export default function Contacts() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
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
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  //console.log(check);
  const handleCheck = (i) => {
    setIndex(i);
  };
  return (
    <>
      <div className={`${style.container} container`}>
        <div className="row">
          <div className={`${style.collg} col-lg-6`}>
            {/* <label className="row form-text text-muted font-weight-bold">
              Search
            </label> */}
            <input
              className="row form-control"
              type="text"
              placeholder="search contact"
              style={{
                borderRadius: "15px",
                width: "30vw",
                backgroundColor: "#dbd4d4",
                marginLeft: "0",
              }}
              onChange={handleSearchInput}
            />

            <div className="">
              <Link href={"/add-contact"}>
                <Button
                  style={{ backgroundColor: "#ed6330", marginLeft: "50px" }}
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
                    <p>Basic Info</p>
                    <p>Company</p>
                    <p></p>
                  </div>
                </div>
                {list.map((data, i) => {
                  return (
                    <div key={i} className={`${style.cardbody} card-body`}>
                      <div>
                        <i
                          className="bi bi-square"
                          onClick={() => handleCheck(i)}
                        ></i>
                      </div>
                      <div className={style.cardbodyDiv}>
                        <div className={`${style.info}`}>
                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                            style={{ width: "30px", height: "30px" }}
                          >
                            <span className="h4 font-weight-bold m-0">J</span>
                          </div>
                          <div>
                            <h4 className="card-title">{data.name} </h4>
                            <h6 classetChecksName="card-subtitle mb-2 text-muted">
                              {data.email}
                            </h6>
                          </div>
                        </div>

                        <div className={`${style.company} card-text`}>
                          {data.company}
                        </div>
                        <div>
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
      {/* {index && <Card index={index}></Card>} */}
    </>
  );
}

// <div className="row">
//   <table className="table table-striped">
//     <thead>
//       <tr>
//         <th className="text-center" scope="col">
//           Basic Info
//         </th>
//         <th className="text-center" scope="col">
//           Company
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       {list.map((data, i) => {
//         return (
//           <tr key={i}>
//             <td className="text-center">
//               <h4>{data.name}</h4>
//               <h6>{data.email}</h6>
//             </td>
//             <td className="text-center">{data.company}</td>
//             <td>
//               <button onClick={() => editList(i)}>
//                 <i className="bi bi-pen"></i>
//               </button>
//             </td>
//             <td>
//               <button onClick={() => deleteList(i)}>
//                 <i className="bi bi-trash"></i>
//               </button>
//             </td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
// </div>
