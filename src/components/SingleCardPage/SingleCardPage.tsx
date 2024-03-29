import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

import { SingleCardContent } from "./SingleCardContent";
import { SingleCardTour } from "./SignelCardTour";
import { Logo } from "../header/Logo";

import cardData from "../../inspirations.json";
import tours from "../../inspirations-tours.json";
import { ToursType } from "../../types/JsonTypes/ToursType";
import { Button } from "../reusable/button";

export const SingleCardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { imgUrlJPG, title, textTitle, text, information } =
    cardData[location.state.cardNum];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SignelCardPageStyled>
      <Logo color="white" />
      <SingleCardImage src={imgUrlJPG} />
      <SingleCardHeader>
        <div className="singleCard-header-title">
          <Button
            onClick={() => navigate("/inspirations")}
            text="FIND INSPIRATION"
            margins={false}
          ></Button>
          {/* <span onClick={() => navigate("/inspirations")}>
            FIND INSPIRATION
          </span> */}
          <h2>{title}</h2>
        </div>
        <div className="singleCard-header-information">
          <h4>{textTitle}</h4>
          <div>{text}</div>
        </div>
      </SingleCardHeader>
      <SingleCardContent information={information} />
      <ToursContainer>
        {tours &&
          tours.map((tour: ToursType) => {
            return (
              <SingleCardTour
                key={tour.name}
                name={tour.name}
                place={tour.place}
                img={tour.img}
                page={tour.page}
              />
            );
          })}
      </ToursContainer>
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
      font-family: "Work Sans", sans-serif;
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
        font-size: 1.7rem;
      }
      div {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 1441px) {
    margin-top: 400px;
    .singleCard-header-title {
      h2 {
        font-size: 5.5rem;
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

const ToursContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  height: auto;
`;
