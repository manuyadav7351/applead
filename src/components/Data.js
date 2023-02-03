import React from "react";
import { useState } from "react";

const Data = ({props, i}) => {
  console.log(props, i);
  const [visible, setVisible] = useState(null);

  const toggle = (i) => {
    if (visible === i) {
      return setVisible(null);
    }
    setVisible(i);
  };
  return (
    <div key={i}>
      <div className="main">
        <ul className="table">
          <li className="table-row">
            <div className="item">{props.item.name}</div>
            <div className="item">
              <div className="heading">CONTACT</div>
              {props.item.phone}
              <div></div>
            </div>
            <div className="item">
              <div className="heading">CITY</div>
              <div>{props.item.address.city}</div>
            </div>
            <div className="item">
              <div className="heading">STATE</div>
              <div>{props.item.address.street}</div>
            </div>
            <button onClick={() => toggle(i)}>View Details</button>
          </li>
          <li>
            <div className="contain">
              {visible === i ? (
                <div className="container">
                  <div className="left">
                    <div className="detail">
                      <p>username</p>
                      {props.item.username}
                    </div>
                    <div className="detail">
                      <p>phone</p>
                      {props.item.phone}
                    </div>
                    <div className="detail">
                      <p>email</p>
                      {props.item.email}
                    </div>
                    <div className="detail">
                      <p>website</p>
                      {props.item.website}
                    </div>
                  </div>
                  <div className="right">
                    <div className="detail">
                      <p>street</p>
                      {props.item.address.street}
                    </div>
                    <div className="detail">
                      <p>suite</p>
                      {props.item.address.suite}
                    </div>
                    <div className="detail">
                      <p>city</p>
                      {props.item.address.city}
                    </div>
                    <div className="detail">
                      <p>zipcode</p>
                      {props.item.address.zipcode}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Data;
