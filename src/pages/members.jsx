import React from 'react';
import PageLayout from "../layouts/page_layout";
import MembersContent from "../components/page_content/members_content";
import Breadcrumb from "../components/breadcrumb";
export default function Members() {
  return (
   <PageLayout>
     <Breadcrumb title="Espacios"/>
     <MembersContent/>
   </PageLayout>
  );
}
