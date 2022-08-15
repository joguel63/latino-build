import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportBallsContent from "components/page_content/sport_balls_content";

export default function BallsSport() {
  return (
    <PageLayout>
      <Breadcrumb title="Bolas Criollas"/>
      <SportBallsContent/>
    </PageLayout>
  );
}
