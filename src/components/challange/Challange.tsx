import styled from "styled-components";
import { ChallangeImage } from "./ChallangeImage";
import { Button } from "../reusable/button";

export const Challange = () => {
  return (
    <ChallangeStyled>
      <ChallangeImage />
      <ChallangeContent>
        <div>
          <h3>Challenges throughout the Pays des Lacs</h3>
          <p>
            Explore our map and take on our challenges We have come up with some
            surprising challenges to help you discover the Pays des Lacs in a
            unique way.
          </p>
          {/* <button>PLAY AND EXPLORE.</button> */}
          <Button
            text="Play and Explore"
            onClick={() => {}}
            margins={true}
          ></Button>
        </div>
      </ChallangeContent>
    </ChallangeStyled>
  );
};

const ChallangeStyled = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ChallangeContent = styled.div`
  background-color: #1f218f;
  width: 100%;
  height: auto;
  margin-top: -200px;
  rotate: 0deg;
  div {
    background-color: #2d2fa3;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;

    h3 {
      margin: 20px 30px;
      font-size: 40px;
      word-wrap: break-word;
      font-family: "Prospectus L Black", sans-serif;
      word-spacing: 10px;
    }
    p {
      margin: 20px 30px;
      font-size: 17px;
      word-spacing: 5px;
      letter-spacing: 1px;
      font-family: "Work Sans", sans-serif;
    }
  }
  @media (max-width: 768px) and (min-width: 425px) {
    width: 100%;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 60%;
      height: 500px;
      h3 {
        font-size: 58px;
      }
      p {
        font-size: 16px;
        width: 70%;
      }
    }
  }

  @media (min-width: 1025px) {
    width: 400px;
    height: 600px;
    position: absolute;
    top: 300px;
    left: 100px;
    div {
      h3 {
        font-size: 47px;
      }
      p {
        width: 60%;
        line-height: 1.6;
      }
    }
  }
  @media (min-width: 1440px) {
    width: 700px;
    height: 450px;
    div {
      h3 {
        font-size: 55px;
      }
    }
  }
`;
