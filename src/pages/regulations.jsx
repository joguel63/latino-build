import React from "react";
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import RegulationsContent from "components/page_content/regulations_content";

export default function Regulations(){
    return (<PageLayout>
        <Breadcrumb title="Regulaciones"/>
        <RegulationsContent/>
    </PageLayout>)
}