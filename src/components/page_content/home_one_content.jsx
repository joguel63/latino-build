import React from "react";
import logo from "../../assets/images/logo2.jpg";
import NewsCarousel from "components/widgets/carousel";

export default function HomeOneContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <NewsCarousel />
          </div>
          <div className="title">
            <h2
              style={{
                color: "#305C20",
                textAlign: "center",
                fontFamily: "Cambria",
              }}
              className="mb-5"
            >
              Un lugar para toda la familia
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
