import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import inspirations from "../../inspirations.json";

import { Logo } from "../header/Logo";
import card1img from "../../assets/cards/card-bg_01.svg";
import { InspirationType } from "../../types/JsonTypes/InspirationsType";

export const Inspirations = () => {
  const navigate = useNavigate();

  const handleNavigate = (ins: InspirationType) => {
    const url = ins.title.split(" ").join("-");
    navigate(`/inspirations/${url}`, { state: { cardNum: ins.cardNum } });
  };

  return (
    <InspirationsStyled>
      <Logo color="blue" />
      <InspirationsHeader>
        <h1>
          <div>Explore the </div>
          <div>Pays des Lacs </div>
          <div>as you wish</div>
        </h1>
        <p>Perhaps your next adventure lies behind one of our selections.</p>
      </InspirationsHeader>

      <InspirationCardsContainer>
        {inspirations &&
          inspirations.map((inspiration: InspirationType) => {
            return (
              <InspirationCard
                onClick={() => handleNavigate(inspiration)}
                $bg={inspiration.backgroundColor}
                $backImg={card1img}
              >
                <img src={inspiration.imgUrlJPG} />
                <h3>{inspiration.title}</h3>
              </InspirationCard>
            );
          })}
      </InspirationCardsContainer>
    </InspirationsStyled>
  );
};

const InspirationsStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  min-height: 500px;
  svg {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const InspirationsHeader = styled.header`
  width: 100%;
  margin: 100px 100px 0 100px;
  display: flex;
  flex-direction: column;
  h1 {
    color: #1f218f;
    font-family: "Prospectus L Black";
    font-weight: 800;
    div {
      display: block;
      &:nth-child(1) {
        &::after {
          content: "";
          background-color: #1f218f;
          display: inline-block;
          height: 3px;
          transform: translate(0, -150%);
          width: 40px;
        }
      }
      &:nth-child(2) {
        margin-left: 30px;
      }
    }
  }
  p {
    color: #1f21b1;
    margin-top: 20px;
    width: 80%;
    font-size: 15px;
    line-height: 2;
    font-weight: 100;
    font-family: sans-serif;
    opacity: 0.8;
  }
  @media (max-width: 544px) {
    margin: 150px 20px 0 20px;
  }

  @media (min-width: 545px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 30px;
      div {
        margin-right: 10px;
        display: inline-block;
        &:nth-child(1) {
          &::after {
            content: none;
          }
        }
        &:nth-child(2) {
          margin-left: 0;
        }
      }
    }
  }
  @media (min-width: 769px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 1300px) {
    align-items: center;
    margin: 0;
    margin-top: 100px;
    p {
      text-align: center;
    }
  }
`;

const InspirationCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const InspirationCard = styled.div<{ $bg: string; $backImg: string }>`
  cursor: pointer;
  width: 80%;
  height: 320px;
  background-color: ${(props) => props.$bg};
  background-image: ${(props) => `url(${props.$backImg})`};
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  h3 {
    width: 80%;
    text-align: center;
  }
  @media (min-width: 600px) {
    width: 40%;
  }
  @media (min-width: 1300px) {
    width: 20%;
  }
`;
