import styled from "styled-components";
import { FooterNewslater } from "./FooterNewslater";
import { FooterInformation } from "./FooterInformation";
import { FooterLogos } from "./FooterLogos";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-main">
        <FooterNewslater></FooterNewslater>
        <FooterInformation></FooterInformation>
      </div>
      <FooterLogos></FooterLogos>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .footer-main {
    width: 100%;
    display: flex;
    div {
      width: 50%;
    }
  }

  @media (max-width: 950px) {
    .footer-main {
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
`;
