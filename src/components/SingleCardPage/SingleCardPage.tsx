import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { Logo } from "../header/Logo";

import cardData from "../../inspirations.json";
import { SingleCardContent } from "./SingleCardContent";

export const SingleCardPage = () => {
  const location = useLocation();

  const { imgUrlJPG, title, textTitle, text, information } =
    cardData[location.state.cardNum];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SignelCardPageStyled>
      <Logo />
      <SingleCardImage src={imgUrlJPG} />
      <SingleCardHeader>
        <div className="singleCard-header-title">
          <span>FIND INSPIRATION</span>
          <h2>{title}</h2>
        </div>
        <div className="singleCard-header-information">
          <h4>{textTitle}</h4>
          <div>{text}</div>
        </div>
      </SingleCardHeader>
      <SingleCardContent information={information[0]} />
    </SignelCardPageStyled>
  );
};

const SignelCardPageStyled = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: #fff;
  font-size: 1.3rem;
  svg {
    position: absolute;
    left: 30px;
    top: 20px;
  }
  .info {
    width: 100%;
    height: 600px;
    background-color: #fff;
  }
`;

const SingleCardImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  @media (min-width: 1441px) {
    height: 900px;
  }
`;

const SingleCardHeader = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  .singleCard-header-title {
    width: 80%;
    span {
      display: block;
      background-color: #e94f26;
      width: 200px;
      height: 20px;
      border-radius: 20px;
      text-align: center;
      font-weight: 900;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }

    h2 {
      font-family: "Prospectus L Black";
      margin-top: 30px;
      width: 60%;
    }
  }
  .singleCard-header-information {
    width: 90%;
    min-height: 350px;
    border-radius: 40px;
    margin-top: 50px;
    background-color: #1f218f;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 80%;
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 2;
      margin-bottom: 50px;
      margin-top: 30px;
    }
    h4 {
      margin-top: 30px;
      width: 80%;
      font-size: 1.3rem;
      font-family: "Prospectus L Black";
      font-weight: bold;
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    margin-top: 150px;
    .singleCard-header-title {
      h2 {
        font-size: 3.5rem;
      }
    }
    .singleCard-header-information {
      width: 40%;
      h4 {
        font-size: 2rem;
      }
      div {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1441px) {
    margin-top: 400px;
    .singleCard-header-title {
      h2 {
        font-size: 5.5rem;
      }
      span {
        width: 400px;
        height: 55px;
        font-size: 2.5rem;
      }
    }
    .singleCard-header-information {
      width: 60%;
      h4 {
        font-size: 2.5rem;
      }
      div {
        font-size: 1.5rem;
      }
    }
  }
`;
