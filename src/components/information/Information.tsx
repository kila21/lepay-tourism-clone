import styled from "styled-components";
import cardImage from "../../assets/card-background.jpg";
import { Stats } from "./stats";

export const Information = () => {
  return (
    <InformationStyled>
      <InformationHeaderStyled>
        <HeaderImageCard>
          <img src={cardImage} alt="card background,tourists" />
        </HeaderImageCard>
        <h2>
          No need to travel far to get away. Today, travelling also means a
          commitment to the environment and the local economy.
        </h2>
      </InformationHeaderStyled>
      <Stats />
    </InformationStyled>
  );
};

const InformationStyled = styled.div`
  width: 100%;

  background-color: white;
  margin-top: -300px;
  z-index: 1;
  position: relative;

  @media (max-width: 1024px) {
    margin-top: 0px;
  }

  @media (min-width: 1440px) {
    margin-top: -140px;
  }
`;

const InformationHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  h2 {
    line-height: 1.25;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    color: #1f218f;
    font-family: "Prospectus L Black";
    font-style: italic;
    font-size: 1.8rem;
    font-weight: 900;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    h2 {
      margin-top: -130px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 1025px) {
    h2 {
      margin-top: 100px;
      width: 60%;
      font-size: 40px;
    }
  }
  @media (min-width: 1441px) {
    h2 {
      margin-top: 100px;
      width: 30%;
      height: 300px;
      font-size: 58px;
    }
  }
`;

const HeaderImageCard = styled.div`
  width: 80%;
  height: 300px;
  background-color: #f5f5f5;
  filter: drop-shadow(0 1rem 1rem rgba(0, 0, 0, 0.11));
  display: flex;
  align-items: center;
  justify-content: center;
  rotate: -5deg;
  margin-left: 30px;

  img {
    width: 85%;
    height: 90%;
  }

  @media (max-width: 425px) and (min-width: 350px) {
    height: 400px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    width: 60%;
    height: 400px;
    margin: 0;
    transform: translate(30%, -5%) scale(0.9);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 55%;
    height: 550px;
    margin: 0;
    transform: translate(30%, -15%) scale(0.7);
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 50%;
    height: 600px;
    scale: calc(0.7);
    transform: translate(0, -25%);
  }
  @media (min-width: 1441px) {
    width: 50%;
    height: 900px;
    scale: 0.8;
    transform: translate(0, -25%);
  }
`;
