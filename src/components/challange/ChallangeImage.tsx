import styled from "styled-components";

export const ChallangeImage = () => {
  return <ChallangeImageStyled></ChallangeImageStyled>;
};

const ChallangeImageStyled = styled.div`
  width: 120%;
  min-height: 500px;
  height: auto;
  background-image: url("https://www.lepaysdeslacs.be/static/img/home/map/map_1280.webp");
  background-size: cover;
  border-top-left-radius: 150px;
  opacity: 5;
  rotate: 10deg;
  @media (min-width: 1025px) {
    height: 1000px;
  }
`;
