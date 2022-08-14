import React, { useEffect, useState } from "react";
import NewsCarousel from "components/widgets/carousel";
import NewsDisplay from "components/widgets/news_display";
import NewsPageNavigation from "components/widgets/news_page_navigator";
import newImg from "assets/images/logo2.jpg";
import { useGetNewsService } from "core/hooks/use-get-news-service";

export default function BlogContent() {
  const [news, setNews] = useState([]);
  const { getNewsPage } = useGetNewsService();
  const newsArray = [];
  useEffect(() => {
    getNewsPage(setNews);
  }, []);

  const getTheShitTogether = () => {
    return news.map((item) => {
      const title = item.new.title;
      const src = item.pictures[0] ?? newImg;
      newsArray.push({ title: title, src: src });
    });
  };

  getTheShitTogether();

  return (
    <div className="content-body">
      <div className="container">
        <NewsCarousel />
        <div className="newsList">
          {newsArray.map((item, index) => {
            return (
              <NewsDisplay
                key={index}
                title={item.title}
                src={item.src.url ?? item.src.url ?? newImg}
              />
            );
          })}
        </div>

        <NewsPageNavigation page="1" />
      </div>
    </div>
  );
}
