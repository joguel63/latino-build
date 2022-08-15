import React, { useEffect, useState } from "react";
import NewsCarousel from "components/widgets/carousel";
import NewsDisplay from "components/widgets/news_display";
import NewsPageNavigation from "components/widgets/news_page_navigator";
import newImg from "assets/images/logo2.jpg";
import { useGetNewsService } from "core/hooks/use-get-news-service";
import Spinner from "components/spinner";

export default function BlogContent() {
  const [news, setNews] = useState([]);
  const { getNewsPage } = useGetNewsService();

  useEffect(
    () => getNewsPage(setNews),
    //eslint-disable-next-line
    []
  );

  if (!news.length) return <Spinner />;

  return (
    <div className="content-body">
      <div className="container">
        <NewsCarousel />
        <div className="newsList">
          {news.map((item, index) => (
            <NewsDisplay
              key={index}
              title={item.new.title ?? ""}
              src={item?.pictures[0]?.url ?? newImg}
              link={item.new.id}
              content={item}
            />
          ))}
        </div>
        <NewsPageNavigation page="1" />
      </div>
    </div>
  );
}
