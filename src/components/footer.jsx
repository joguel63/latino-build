import React from "react";

export default function Footer() {
  return (
    <div className="footer text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <a
              type="button"
              className="btn btn-social-icon btn-twitter btn-rounded"
              href="https://twitter.com/centrolatinosc?lang=es"
              target="blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              type="button"
              className="btn btn-social-icon btn-instagram btn-rounded"
              href="https://www.instagram.com/centrolatinosc/?hl=es"
              target="blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="col-xl-12">
            <p>
              &copy; Copyright {new Date().getFullYear()} Centro latino. Todos
              los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
