import styled from "styled-components";

export const FooterLogos = () => {
  return (
    <FooterLogosStyled>
      <FooterSingleLogo>
        <img src="https://www.lepaysdeslacs.be/uploads/partners/_partnerLogo/union-europeenne.png" />
      </FooterSingleLogo>
      <FooterSingleLogo>
        <img src="https://www.lepaysdeslacs.be/uploads/partners/_300x137_fit_center-center_82_none/106/visit-wallonia.webp" />
      </FooterSingleLogo>
      <FooterSingleLogo>
        <img src="https://www.lepaysdeslacs.be/uploads/partners/_300x300_fit_center-center_82_none/leader.png" />
      </FooterSingleLogo>
      <FooterSingleLogo>
        <img src="https://www.lepaysdeslacs.be/uploads/partners/_150x128_fit_center-center_82_none/la-botte-du-hainaut.png" />
      </FooterSingleLogo>
      <FooterSingleLogo>
        <img src="https://www.lepaysdeslacs.be/uploads/partners/_450x230_fit_center-center_82_none/maison-du-tourisme-pays-des-lacs.png" />
      </FooterSingleLogo>
    </FooterLogosStyled>
  );
};

const FooterLogosStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 50px;
  background-color: #fff;
  flex-wrap: wrap;
`;

const FooterSingleLogo = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;

  align-items: center;
  @media (max-width: 768px) {
    width: 40%;
    img {
      width: 70%;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 25%;
    img {
      width: 70%;
    }
  }
  @media (min-width: 1025px) {
    width: 15%;
    img {
      width: 70%;
    }
  }
`;
