import styled from "styled-components";
import { Card } from "./Card";
import card1Img from "../../assets/cards/card-bg_01.svg";
import card2Img from "../../assets/cards/card-bg_02.svg";
import card3Img from "../../assets/cards/card-bg_03.svg";
import card4Img from "../../assets/cards/card-bg_04.svg";

import cardData from "../../inspirations.json";

export const CardsContainer = () => {
  return (
    <CardsContainerStyled>
      <Card
        backgroundColor={cardData[0].backgroundColor}
        title={cardData[0].title}
        imgUrlWebp={cardData[0].imgUrlWebp}
        backImg={card1Img}
        cardNum={cardData[0].cardNum}
      />
      <Card
        backgroundColor={cardData[1].backgroundColor}
        title={cardData[1].title}
        imgUrlWebp={cardData[1].imgUrlWebp}
        backImg={card2Img}
        cardNum={cardData[1].cardNum}
      />
      <Card
        backgroundColor={cardData[2].backgroundColor}
        title={cardData[2].title}
        imgUrlWebp={cardData[2].imgUrlWebp}
        backImg={card3Img}
        cardNum={cardData[2].cardNum}
      />
      <Card
        backgroundColor={cardData[3].backgroundColor}
        title={cardData[3].title}
        imgUrlWebp={cardData[3].imgUrlWebp}
        backImg={card4Img}
        cardNum={cardData[3].cardNum}
      />
    </CardsContainerStyled>
  );
};

const CardsContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  justify-content: space-evenly;
  @media (min-width: 426px) and (max-width: 768px) {
    height: 1300px;
  }
  @media (min-width: 769px) {
    height: 1000px;
  }
`;
