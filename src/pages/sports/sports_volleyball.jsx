import React from "react";
import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import SportVolleyballContent from "components/page_content/sport_volleyball_content";

export default function SportVolleyball() {
  return (
    <PageLayout>
      <Breadcrumb title="Voleibol"/>
      <SportVolleyballContent/>
    </PageLayout>
  );
}
