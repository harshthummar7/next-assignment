import React from "react";

export default function Heading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5px",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            backgroundColor: "#F89880",
            width: "22px",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <i className="bi bi-person"></i>
        </div>

        <label
          className="row form-text text-muted font-weight-bold"
          style={{ marginLeft: "10px" }}
        >
          Contacts
        </label>
      </div>
    </>
  );
}
