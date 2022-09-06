import React from "react";
import Breadcrumb from "../components/breadcrumb";
import BlogContent from "components/page_content/blog_content";
import PageLayout from "layouts/page_layout";

export default function BlogPage() {
  return (
    <PageLayout>
      {/*  <Breadcrumb title="Noticias" /> */}
      <BlogContent />
    </PageLayout>
  );
}
