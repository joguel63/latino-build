import React from "react";
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import AdministrativePersonalContent from "components/page_content/administrative_personal_content";

export default function AdministrativePersonal(){
    return (<PageLayout>
        <Breadcrumb title="Personal administrativo"/>
        <AdministrativePersonalContent/>
    </PageLayout>)
}