import React from "react";
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import HistoryContent from "components/page_content/history_content";

export default function History() {
  return <PageLayout>
    <Breadcrumb title="Historia"/>
    <HistoryContent/>
  </PageLayout>;
}
