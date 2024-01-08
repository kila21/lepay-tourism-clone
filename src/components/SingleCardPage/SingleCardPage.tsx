import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

export const SingleCardPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    console.log("singleCard");
  });

  return <SignelCardPageStyled />;
};

const SignelCardPageStyled = styled.div``;
