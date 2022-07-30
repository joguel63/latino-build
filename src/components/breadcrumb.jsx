import React from 'react';
import { Link } from "react-router-dom";
export default function Breadcrumb(props) {
  return (
    <div className="page-title">
      <div className="container">
        <div className="row">
          <div className="col-5">
          <h1>{props.title}</h1>
          </div>
          <div className="col-7">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
