import React from 'react';
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import SpacesContent from '../components/page_content/spaces_content';
export default function Spaces() {
  return (
   <PageLayout>
     <Breadcrumb title="Espacios"/>
     <SpacesContent/>
   </PageLayout>
  );
}
