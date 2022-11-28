import { Container } from "./style";
import { useEffect, useState } from "react";
import { isOnScreen } from "../Footer/isOnScreen";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sections } from "../model/Sections";

export function Page() {
    useEffect
  return (
    <Container >
      <Header/>
      
      <Sections onLoad={isOnScreen()}/>
      
      <Footer/>

    </Container>
  );
}
