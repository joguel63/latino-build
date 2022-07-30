import React from 'react';
import PageLayout from "../layouts/page_layout";
import NotificationContent from "../components/page_content/notification_content";
import Breadcrumb from "../components/breadcrumb";
export default function Notification() {
  return (
   <PageLayout>
     <Breadcrumb title="Notification"/>
     <NotificationContent/>
   </PageLayout>
  );
}
