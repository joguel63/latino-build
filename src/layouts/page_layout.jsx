import React from 'react';
import Header from "../components/header";
import NavMenu from "../components/nav_menu";
import Footer from "../components/footer";
import useSwitch from "../hooks/use_switch";

export default function PageLayout(props) {
  const [showSwitch, controlSwitch] = useSwitch();
  return (
    <>
    <Header 
      controlMenu={controlSwitch}
      showMenu={showSwitch}
    />
    <NavMenu
      showMenu={showSwitch}
    />
      {props.children}
    <Footer/>
    </>
  );
}
