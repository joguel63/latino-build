import React from "react";
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import StatutesContent from "components/page_content/statutes_content";

export default function Statutes(){
    return (<PageLayout>
        <Breadcrumb title="Estatutos"/>
        <StatutesContent/>
    </PageLayout>)
}