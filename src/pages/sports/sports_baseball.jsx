import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportBaseballContent from "components/page_content/sport_baseball_content";

export default function BaseballSport() {
  return (
    <PageLayout>
      <Breadcrumb title="Beisbol" />
      <SportBaseballContent/>
    </PageLayout>
  );
}
