import React from "react";

export default function Footer() {
  return (
    <div className="footer text-center">
      <div className="container">
        <div className="row">
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
