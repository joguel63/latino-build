import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportSwimmingContent from "components/page_content/sport_swimming_content";

export default function SportSoccer() {
  return (
    <PageLayout>
      <Breadcrumb title="Natacion"/>
      <SportSwimmingContent/>
    </PageLayout>
  );
}
