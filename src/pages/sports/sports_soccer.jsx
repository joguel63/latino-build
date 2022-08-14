import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportSoccerContent from "components/page_content/sport_volleyball_content";

export default function SportSoccer() {
  return (
    <PageLayout>
      <Breadcrumb title="Futbol"/>
      <SportSoccerContent/>
    </PageLayout>
  );
}
