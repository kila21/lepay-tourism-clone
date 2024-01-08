import { Header } from "./components/header/Header";
import { MenuBar } from "./components/header/navigation/MenuBar";
import { CardsContainer } from "./components/Cards/CardsContainer";
import { useCallback } from "react";
import { Challange } from "./components/challange/Challange";
import { Information } from "./components/information/Information";
import { Footer } from "./components/footer/Footer";

function App() {
  const changeOverflowY = useCallback((open: boolean) => {
    if (window.outerWidth <= 768) {
      document.body.style.overflowY = open ? "hidden" : "scroll";
    }
  }, []);

  return (
    <>
      <Header />
      <MenuBar isOpen={changeOverflowY} />
      <CardsContainer />
      <Challange />
      <Information />
      <Footer />
    </>
  );
}

export default App;
