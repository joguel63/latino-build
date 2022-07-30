import React from 'react';
import PageLayout from "../layouts/page_layout";
import PersonalContent from "../components/page_content/personal_content";
import Breadcrumb from "../components/breadcrumb";
export default function Personal() {
  return (
   <PageLayout>
    <Breadcrumb title="Personal"/>
     <PersonalContent/>
   </PageLayout>
  );
}
