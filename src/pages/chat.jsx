import React from 'react';
import PageLayout from "../layouts/page_layout";
import ChatContent from "../components/page_content/chat_content";
import Breadcrumb from "../components/breadcrumb";
export default function ChatPage() {
  return (
       <PageLayout>
         <Breadcrumb title="Chat"/>
         <ChatContent/>
       </PageLayout>
  );
}
