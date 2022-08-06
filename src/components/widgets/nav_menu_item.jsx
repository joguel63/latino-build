import React, { useState, useEffect } from "react";
import "metismenujs/dist/metismenujs.css";
import { Link } from "react-router-dom";

export default function NavMenuItem({ route, icon, title, subitems }) {
  return (
    <li>
      {subitems ? <a className="has-arrow" href="https://www.google.com/">
                    <span className={icon}></span> {title}
                  </a>:<Link to={route}>
                    <span className={icon}></span>
                    {title}
                  </Link>}
      {subitems && subitems.length > 0 && (
        <ul>
          {subitems.map((item) => {
            return (
              <li>
                <Link to={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
