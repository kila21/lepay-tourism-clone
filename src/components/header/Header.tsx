import styled from "styled-components";
// import { useState, useEffect } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderContent } from "./HeaderContent";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderContent />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
