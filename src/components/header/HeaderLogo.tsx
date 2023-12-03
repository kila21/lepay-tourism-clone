import styled from "styled-components";
import { Logo } from "./Logo";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";

export const HeaderLogo = () => {
  return (
    <HeaderLogoStyled width={window.innerWidth}>
      <Logo />
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

const HeaderLogoStyled = styled.div<{ width: number }>`
  width: 100px;
  height: 100vh;
  border-right: 1px solid grey;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    flex-direction: row;
    padding-left: 20px;
  }
  /* background-color: ${(props) => (props.width > 768 ? "red" : "blue")}; */
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
