import styled from "styled-components";
import { Card } from "./Card";
import card1Img from "../../assets/cards/card-bg_01.svg";
import card2Img from "../../assets/cards/card-bg_02.svg";
import card3Img from "../../assets/cards/card-bg_03.svg";
import card4Img from "../../assets/cards/card-bg_04.svg";

export const CardsContainer = () => {
  return (
    <CardsContainerStyled>
      <Card
        backgroundColor="#1f218f"
        text="Exotic stays and accommodations"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_170x170_crop_center-center_82_none/8085/2021_08_05_REED_CAMPING-6611.webp"
        backImg={card1Img}
        cardNum={0}
      />
      <Card
        backgroundColor="#52795a"
        text="Activities for the little ones"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_170x170_crop_center-center_82_none/8132/2021_10_27_REED-22-PRINT.webp"
        backImg={card2Img}
        cardNum={1}
      />
      <Card
        backgroundColor="#e94f26"
        text="Flavours and gastronomy"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_170x170_crop_center-center_82_none/8123/Escav%C3%A8che.webp"
        backImg={card3Img}
        cardNum={2}
      />
      <Card
        backgroundColor="#4cb6ce"
        text="A bewitching heritage and history"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_340x340_crop_center-center_82_none/8114/Abbaye-Notre-Dame-de-Scourmont-6.webp"
        backImg={card4Img}
        cardNum={3}
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
  @media (min-width: 426px) {
    height: 1300px;
  }
`;
