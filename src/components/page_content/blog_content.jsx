import React, { useEffect, useState } from "react";
import NewsCarousel from "components/widgets/carousel";
import NewsDisplay from "components/widgets/news_display";
import NewsPageNavigation from "components/widgets/news_page_navigator";
import newImg from "assets/images/logo2.jpg";
import { useGetNewsService } from "core/hooks/use-get-news-service";
import Spinner from "components/spinner";
import { Pagination } from "react-bootstrap";

export default function BlogContent() {
  const [news, setNews] = useState([]);
  const { getNewsPage } = useGetNewsService();
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(news.length / itemsPerPage);

  const newsSlice = news.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  useEffect(() => getNewsPage(setNews), []); //eslint-disable-line

  if (!news.length) return <Spinner />;

  return (
    <div className="content-body">
      <div className="container">
        <NewsCarousel />
        <h3
          style={{
            color: "#305C20",
            textAlign: "center",
            fontFamily: "Cambria",
          }}
          className="mb-5"
        >
          El Día a Día de la Familia del Centro Latino
        </h3>
        <div className="newsList">
          {newsSlice.map((item, index) => (
            <NewsDisplay
              key={index}
              title={item.new.title ?? ""}
              src={item?.pictures[0]?.url ?? newImg}
              link={item.new.id}
              content={item}
            />
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.First
              disabled={page === 0}
              onClick={() => setPage(0)}
            />
            <Pagination.Prev
              disabled={page - 1 < 0}
              onClick={() => setPage(page - 1)}
            />
            <Pagination.Item active >
              {page + 1}
            </Pagination.Item>
            <Pagination.Next
              disabled={page + 1 > numberOfPages - 1}
              onClick={() => setPage(page + 1)}
            />
            <Pagination.Last
              disabled={page === numberOfPages - 1}
              onClick={() => setPage(numberOfPages - 1)}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}
