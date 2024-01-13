import styled from "styled-components";
import { useState, useEffect } from "react";

import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import { Logo } from "./Logo";

export const HeaderLogo = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [width]);

  return (
    <HeaderLogoStyled>
      <Logo color="white" />
      {window.innerWidth > 768 && (
        <CircleLogosContainer>
          <CircleLogo>
            <a href="https://www.facebook.com/lepaysdeslacs/" target="_blank">
              <img src={facebook} alt="facebook logo" />
            </a>
          </CircleLogo>
          <CircleLogo>
            <a href="https://www.instagram.com/paysdeslacs/" target="_blank">
              <img src={instagram} alt="instagram logo" />
            </a>
          </CircleLogo>
        </CircleLogosContainer>
      )}
    </HeaderLogoStyled>
  );
};

const HeaderLogoStyled = styled.div`
  width: 100px;
  height: 100vh;
  border-right: 1px solid grey;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;
  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    flex-direction: row;
    padding-left: 20px;
    border-right: none;
  }
`;

//facebook and instagram circle logos container
const CircleLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
`;

const CircleLogo = styled.span`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid grey;
  margin-top: 10px;
`;
