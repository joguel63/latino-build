import React from "react";
import logo from "../../assets/images/logo2.jpg";
import NewsCarousel from "components/widgets/carousel";


export default function HomeOneContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="homeLogoDiv">
            <h1>Centro Latino San Cristobal</h1>
            <img className="homeLogo img-fluid" alt="logo" width={200} src={logo} />
          </div>
          <div className="col-xl-12">
          <NewsCarousel/>
          </div>
          <div className="title">
            <h2>Noticias</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
