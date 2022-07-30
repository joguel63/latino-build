import React from 'react';
import PageLayout from "../layouts/page_layout";
import PaymentContent from "../components/page_content/payment_content";
import Breadcrumb from "../components/breadcrumb";
export default function PaymentPage() {
  return (
   <PageLayout>
    <Breadcrumb title="Payment"/>
    <PaymentContent/>
   </PageLayout>
  );
}
