import React from 'react';
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import SpaceScheduleContent from 'components/page_content/space_schedule_content';
export default function SpaceSchedulePage() {
  return (
   <PageLayout>
    <Breadcrumb title="Horarios"/>
    <SpaceScheduleContent/>
   </PageLayout>
  );
}
