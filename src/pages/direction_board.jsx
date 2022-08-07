import React from "react";
import PageLayout from "../layouts/page_layout";
import Breadcrumb from "../components/breadcrumb";
import DirectionBoardContent from "components/page_content/direction_board_content";

export default function DirectionBoard(){
    return (<PageLayout>
        <Breadcrumb title="Junta directiva"/>
        <DirectionBoardContent/>
    </PageLayout>)
}