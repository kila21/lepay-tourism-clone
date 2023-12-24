import styled from "styled-components";
import { Card } from "./Card";
import card1Img from "../../assets/cards/card-bg_01.svg";

export const CardsContainer = () => {
  return (
    <CardsContainerStyled>
      <Card
        backgroundColor="#4cb6ce"
        text="A bewitching heritage and history"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_340x340_crop_center-center_82_none/8114/Abbaye-Notre-Dame-de-Scourmont-6.webp"
        backImg={card1Img}
        clipPath={true}
        cardNum={0}
      />
      <Card
        backgroundColor="#4cb6ce"
        text="A bewitching heritage and history"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_340x340_crop_center-center_82_none/8114/Abbaye-Notre-Dame-de-Scourmont-6.webp"
        backImg={card1Img}
        clipPath={false}
        cardNum={1}
      />
      <Card
        backgroundColor="#4cb6ce"
        text="A bewitching heritage and history"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_340x340_crop_center-center_82_none/8114/Abbaye-Notre-Dame-de-Scourmont-6.webp"
        backImg={card1Img}
        clipPath={false}
        cardNum={2}
      />
      <Card
        backgroundColor="#4cb6ce"
        text="A bewitching heritage and history"
        imgUrl="https://www.lepaysdeslacs.be/uploads/themes/_340x340_crop_center-center_82_none/8114/Abbaye-Notre-Dame-de-Scourmont-6.webp"
        backImg={card1Img}
        clipPath={false}
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
  height: 1500px;
  background-color: red;
  justify-content: space-evenly;
`;
