import HomeNewsItem from "components/widgets/home_news_item";
import React from "react";
import noticia1 from "../../assets/images/news/noticia1.jpg";
import logo from "../../assets/images/logo2.jpg";
import HomeCarousel from "components/widgets/home_carousel";


export default function HomeOneContent() {
  return (
    <div className="content-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="homeLogoDiv">
            <h1>Centro Latino San Cristobal</h1>
            <img className="homeLogo img-fluid" width={200} src={logo} />
          </div>
          <div className="col-xl-12">
          <HomeCarousel/>
          </div>
          <div className="title">
            <h2>Noticias</h2>
          </div>
          <HomeNewsItem
            label="Jornada de carnetizacion"
            src={noticia1}
            alt=""
          ></HomeNewsItem>
          <HomeNewsItem
            label="Jornada de carnetizacion"
            src={noticia1}
            alt=""
          ></HomeNewsItem>
          <HomeNewsItem
            label="Jornada de carnetizacion"
            src={noticia1}
            alt=""
          ></HomeNewsItem>
        </div>
      </div>
    </div>
  );
}
