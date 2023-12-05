import styled from "styled-components";

export const HeaderContent = () => {
  return (
    <HeaderContentStyled>
      <p>Breathe it in – you are in the</p>
      <h1>
        PAYS <span>-</span>
      </h1>

      <h1>DES LACS</h1>
    </HeaderContentStyled>
  );
};

const HeaderContentStyled = styled.div`
  @import url(https://db.onlinewebfonts.com/c/33dcab1b6df24d93b8e82c66c5b8ffae?family=Prospectus+L+Black);

  display: flex;
  flex-direction: column;
  color: white;
  width: 95%;
  font-weight: 900;
  p {
    font-size: 3vw;
    margin-left: 100px;
    margin-top: 20%;
    font-family: "Prospectus L Black";
    font-style: italic;
  }
  span {
    /* width: 40px;
    height: 5px;
    background-color: white; */
    font-family: sans-serif;
    margin-left: 30px !important;
  }
  h1 {
    font-size: 15vw;
    margin-left: 20px;
    font-family: "FSP DEMO - Cervo Neue Neue";
    letter-spacing: 10px;
  }
  :last-child {
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 40px;
    h1 {
      font-size: 12vw;
      margin-top: 30px;
      margin-left: 0;
    }
    p {
      margin: 0;
    }

    :last-child {
      margin-left: 50px;
      margin-top: 10px;
    }
  }
  @media (max-width: 2560px) and (min-width: 769px) {
    p {
      margin-top: 12%;
      font-size: 2vw;
      margin-left: 200px;
    }
    h1 {
      font-size: 10vw;
      margin-left: 80px;
    }
  }
`;
