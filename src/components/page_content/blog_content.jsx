import React, { useEffect } from "react";
import NewsCarousel from "components/widgets/carousel";
import NewsDisplay from "components/widgets/news_display";
import NewsPageNavigation from "components/widgets/news_page_navigator";
import newImg from "assets/images/news/noticia1.jpg";
import { useGetNewsService } from "core/hooks/use-get-news-service";

export default function BlogContent() {
  const { getNewsPage } = useGetNewsService();
  useEffect(getNewsPage, []);
  //TODO: dinamically generate
  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <NewsCarousel />
          <div className="col-lg">
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
          </div>
          <div className="col-lg">
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
          </div>
          <div className="col-lg">
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
            <NewsDisplay title="Titulo de noticia" src={newImg} />
          </div>
        </div>
        <NewsPageNavigation page="1" />
      </div>
    </div>
  );
}
