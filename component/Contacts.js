import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Contacts() {
  const router = useRouter();
  const [list, setList] = useState([]);
  function fetchContact() {
    setList(JSON.parse(localStorage.getItem("contacts")) || []);
    console.log(list);
  }

  useEffect(() => {
    fetchContact();
  }, []);

  function editList(index) {
    router.push(`/edit-list/${index}`);
  }

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
          />
          <br></br>
          <div className="d-flex justify-content-center">
            <Link href={"/add-contact"}>
              <Button>Add Contact</Button>
            </Link>
          </div>
        </div>
      </div>

      {list.length === 0 ? null : (
        <div className="row">
          <table class="table table-striped">
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
                      <h7>{data.email}</h7>
                    </td>
                    <td className="text-center">{data.company}</td>
                    <td>
                      <button onClick={() => editList(i)}>
                        <i class="bi bi-pen"></i>
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
