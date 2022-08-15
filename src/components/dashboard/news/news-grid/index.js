import React, { useEffect } from "react";
import { useNewsServices } from "core/hooks";
import { Button, Table } from "react-bootstrap";
import { GridRow } from "./grid-row";
import Spinner from "components/spinner";
import { useHistory } from "react-router-dom";

export const NewsGrid = () => {
  const [news, setNews] = React.useState();
  const history = useHistory();
  const { getAllNews, newsDelete } = useNewsServices();

  const refreshNews = () => {
    setNews(undefined);
    getAllNews(setNews);
  };
  const onDelete = (id) => {
    newsDelete(id, refreshNews);
  };
  useEffect(() => {
    getAllNews(setNews);
    //eslint-disable-next-line
  }, []);

  if (!news) return <Spinner />;
  return (
    <div className="user-grid-container">
      <Button
        variant="primary"
        className="create-user-button"
        onClick={() => history.push("/dashboard/news/create")}
      >
        Nueva Noticia
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Fecha de creacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {news.map(({ new: item }) => (
            <GridRow
              item={item}
              key={item.id}
              handleUpdate={() => {
                return "";
              }}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
