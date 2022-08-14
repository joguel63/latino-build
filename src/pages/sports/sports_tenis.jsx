import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportTenisContent from "components/page_content/sport_tenis_content";

export default function TenisSport() {
  return (
    <PageLayout>
      <Breadcrumb title="Tenis"/>
      <SportTenisContent/>
    </PageLayout>
  );
}
