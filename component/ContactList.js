import React from "react";
import style from "../styles/Contacts.module.css";

export const ContactList = ({
  list,
  handleMouseOver,
  handleMouseOut,
  editList,
  deleteList,
  columnName,
}) => {
  const colorFunction = (i) => {
    return list[i].color;
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className={`${style.card} card`}>
            <div className={`${style.cardheader} card-header`}>
              <div>
                <i className="bi bi-plus"></i>
              </div>
              <div className={style.cardheaderDiv}>
                <div>
                  <p>{columnName[0]}</p>
                </div>
                <div>
                  <p>{columnName[1]}</p>
                </div>
                <div></div>
              </div>
            </div>
            {list.map((data, i) => {
              return (
                <div key={i} className={`${style.cardbody} card-body`}>
                  <div>
                    <i
                      className={`${style.square} bi bi-square`}
                      onMouseOver={() => handleMouseOver(i)}
                      onMouseOut={handleMouseOut}
                    ></i>
                  </div>
                  <div className={style.cardbodyDiv}>
                    <div className={`${style.info}`}>
                      <div
                        className={`${style.circle} rounded-circle text-white d-flex align-items-center justify-content-center mr-3`}
                        style={{
                          backgroundColor: colorFunction(i),
                        }}
                      >
                        <span className="h4 font-weight-bold m-0">
                          {data.name
                            .split(" ")
                            .map((name) => name.charAt(0))
                            .join("")}
                        </span>
                      </div>
                      <div className={style.infoText}>
                        <h4 className="card-title">{data.name}</h4>
                        <p className="card-subtitle mb-2 text-muted">
                          {data.email}
                        </p>
                      </div>
                    </div>

                    <div className={`${style.company} card-text`}>
                      {data.company}
                    </div>
                    <div className={style.action}>
                      <i className="bi bi-pen" onClick={() => editList(i)}></i>
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
    </>
  );
};
