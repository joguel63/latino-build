import React from 'react';
import Pagelayout from "../layouts/page_layout";
import DraftEventsContent from "../components/page_content/draft_events_content";
import Breadcrumb from "../components/breadcrumb";
export default function DraftEvents() {
  return (
      <Pagelayout>
        <Breadcrumb title="Draft Events"/>
        <DraftEventsContent/>
      </Pagelayout>
  );
}
