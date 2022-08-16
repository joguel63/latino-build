import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportBasketballContent from "components/page_content/sport_basketball_content";
/* import img from "../../assets/images/sports/basquet.jpg"; */

export default function BasquetSport() {
  return (
    <PageLayout>
      <Breadcrumb title="Baloncesto"/>
      <SportBasketballContent/>
    </PageLayout>
  );
}
