import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import PageLayout from "layouts/page_layout";
import { useParams } from 'react-router-dom';
import NewDetailedContent from "components/page_content/new_page_content";

export default function NewsDetails() {
  const { id } = useParams();
  return (
    <PageLayout>
      <Breadcrumb title="Noticias" />
      <NewDetailedContent id={id}/>
    </PageLayout>
  );
}
