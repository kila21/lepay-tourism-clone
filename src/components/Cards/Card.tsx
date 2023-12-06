import { useState, useEffect } from "react";
import { styled } from "styled-components";

export const Card = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, [scrollPosition]);

  return <CardStyled $scrollPosition={scrollPosition} />;
};

const CardStyled = styled.div<{ $scrollPosition: number }>`
  position: fixed;
  width: min(100% - 8vw * 2, 39rem);
  height: 300px;
  background-color: red;
  transition: transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
  bottom: 0;
  right: 0;

  @media (max-width: 425px) {
    width: 314px;
    height: 360px;
    transform: ${(props) =>
      props.$scrollPosition
        ? `translate(calc(60% - ${
            props.$scrollPosition * 0.8
          }px - 10%), calc(80% - ${
            1.5 * props.$scrollPosition
          }px - 15%)) scale(0.8, 0.8) rotate(calc(10deg - ${
            props.$scrollPosition / 25
          }deg))`
        : "translate(60%,80%) rotate(10deg)"};
  }

  @media (max-width: 1024px) and (min-width: 426px) {
    width: 325px;
    height: 380px;
    transform: ${(props) =>
      props.$scrollPosition
        ? `translate(calc(60% - ${
            2.5 * props.$scrollPosition
          }px - 10%), calc(80% - ${
            1.8 * props.$scrollPosition
          }px - 15%)) scale(0.8, 0.8) rotate(calc(10deg - ${
            props.$scrollPosition / 25
          }deg))`
        : "translate(60%,80%) rotate(10deg)"};
  }
  @media (max-width: 2560px) and (min-width: 1025px) {
    width: 512px;
    height: 572px;
    transform: ${(props) =>
      props.$scrollPosition
        ? `translate(calc(60% - ${
            2.5 * props.$scrollPosition
          }px - 10%), calc(80% - ${
            1.7 * props.$scrollPosition
          }px - 15%)) scale(0.9, 0.9) rotate(calc(10deg - ${
            props.$scrollPosition / 40
          }deg))`
        : "translate(60%,80%) rotate(10deg)"};
  }
  @media (max-width: 1600px) and (min-width: 1025px) {
    width: 380px !important;
    height: 420px !important;
  }
`;

/*
 transform: ${(props) =>
    props.$scrollPosition
      ? `translate(
        calc(80vw - 100px - ${5 * props.$scrollPosition}px),
    calc(100vh - 200px - ${props.$scrollPosition * 1.5}px))`
      : ""};
*/
