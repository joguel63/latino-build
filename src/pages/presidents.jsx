import PresidentsContent from "components/page_content/presidents_content";
import PageLayout from "layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import React from "react";

export default function PresidentsPage(){
    return (
        <PageLayout>
            <Breadcrumb title="Galería de presidentes"/>
            <PresidentsContent/>
        </PageLayout>
    )
}