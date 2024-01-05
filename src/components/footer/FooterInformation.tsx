import styled from "styled-components";

export const FooterInformation = () => {
  return (
    <FooterInformationStyled>
      <h2>Maison du Tourisme du Pays des Lacs</h2>
      <p>
        Route de la Plate Taille, 99 <br></br>
        6440 Froidchapelle
      </p>
      <FooterNavStyled>
        <ul>
          <li>Legal Information</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
          <li>Cookies Settings</li>
        </ul>
      </FooterNavStyled>
    </FooterInformationStyled>
  );
};

const FooterInformationStyled = styled.div`
  width: 100%;
  color: #fff;
  background-color: #181981;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 20px;
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 12px;
    line-height: 1.7;
    width: 95%;
    margin-top: 30px;
  }
`;

const FooterNavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  font-family: sans-serif;
  ul {
    list-style: none;
    width: 100%;
    margin-left: 30px;
    li {
      padding-top: 20px;
      border-top: 1px solid grey;
      height: 60px;
      width: 60%;
      font-size: 14px;
      cursor: pointer;
    }
    li:last-child {
      border-bottom: 1px solid grey;
    }
  }
`;
