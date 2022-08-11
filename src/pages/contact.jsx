import React from "react";
import PageLayout from "../layouts/page_layout";
import ContactContent from "../components/page_content/contact_content";
import Breadcrumb from "../components/breadcrumb";

export default function Contact () {
    return(
        <PageLayout>
            <Breadcrumb title="Contacto"/>
            <ContactContent/>
        </PageLayout>
    );
}