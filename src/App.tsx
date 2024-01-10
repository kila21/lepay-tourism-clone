import { CardsContainer } from "./components/Cards/CardsContainer";
import { Challange } from "./components/challange/Challange";
import { Header } from "./components/header/Header";
import { Information } from "./components/information/Information";

function App() {
  return (
    <>
      <Header />
      <CardsContainer />
      <Challange />
      <Information />
    </>
  );
}

export default App;
