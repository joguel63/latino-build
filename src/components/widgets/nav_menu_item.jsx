import React from "react";
import "metismenujs/dist/metismenujs.css";
import { Link, useLocation } from "react-router-dom";

export default function NavMenuItem({ route, icon, title, subitems }) {
  const location = useLocation();

  const isActive = (route) => route === location.pathname;


  if (!!subitems)
    return (
      <li>
        <a href="https://www.google.com/">{title}</a>
        <hr />
        {subitems && subitems.length > 0 && (
          <ul>
            {subitems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link ?? ""}
                  className={isActive(item.link) ? "active" : "inactive"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  return (
    <li>
      <Link
        to={route ?? ""}
        className={isActive(route) ? "active" : "inactive"}
      >
        {title}
      </Link>
      <hr className={isActive(route) ? "active" : "inactive"} />
    </li>
  );
}
