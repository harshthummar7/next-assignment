import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Contacts() {
  const router = useRouter();
  const [list, setList] = useState([]);
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

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <label className="row form-text text-muted font-weight-bold">
            Search
          </label>
          <input
            className="row form-control"
            type="text"
            placeholder="search"
            onChange={handleSearchInput}
          />
          <br></br>
          <div className="d-flex justify-content-center">
            <Link href={"/add-contact"}>
              <Button>Add Contact</Button>
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      {list.length === 0 ? null : (
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  Basic Info
                </th>
                <th className="text-center" scope="col">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">
                      <h4>{data.name}</h4>
                      <h6>{data.email}</h6>
                    </td>
                    <td className="text-center">{data.company}</td>
                    <td>
                      <button onClick={() => editList(i)}>
                        <i className="bi bi-pen"></i>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteList(i)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
