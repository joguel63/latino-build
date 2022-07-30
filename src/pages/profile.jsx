import React from 'react';
import PageLayout from "../layouts/page_layout";
import ProfileContent from "../components/page_content/profile_content";
import Breadcrumb from "../components/breadcrumb";
export default function Profile() {
  return (
      <PageLayout>
        <Breadcrumb title="Profile"/>
         <ProfileContent/>
      </PageLayout>
  );
}
