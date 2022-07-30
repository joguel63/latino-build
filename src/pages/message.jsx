import React from 'react';
import PageLayout from "../layouts/page_layout";
import MessageContent from "../components/page_content/message_content";
import Breadcrumb from "../components/breadcrumb";
export default function Message() {
  return (
   <PageLayout>
    <Breadcrumb title="Message"/>
    <MessageContent/>
   </PageLayout>
  );
}
