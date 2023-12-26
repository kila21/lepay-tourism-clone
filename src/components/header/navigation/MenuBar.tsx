import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Navigation } from "./Navigation";

export const MenuBar = ({ isOpen }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    isOpen(navIsOpen);
    console.log(navIsOpen);
  }, [navIsOpen]);

  return (
    <MenuBarStyled $isOpen={navIsOpen}>
      <MenuBarIcon onClick={() => setNavIsOpen(!navIsOpen)} $isOpen={navIsOpen}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </MenuBarIcon>
      {navIsOpen && <Navigation navIsOpen={navIsOpen} />}
    </MenuBarStyled>
  );
};

const MenuBarStyled = styled.div<{ $isOpen?: boolean }>`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  width: ${(props) => (props.$isOpen ? "600px" : "40px")};
  height: ${(props) => (props.$isOpen ? "70px" : "40px")};
  background-color: ${(props) => (props.$isOpen ? "white" : "")};
  border-radius: ${(props) => (props.$isOpen ? "20px" : "")};
  margin-right: ${(props) => (props.$isOpen ? "10px" : "")};
  margin-top: 20px;
  transition: 0.5s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (max-width: 768px) {
    width: ${(props) => (props.$isOpen ? "100vw" : "40px")};
    height: ${(props) => (props.$isOpen ? "100vh" : "40px")};
    margin-top: ${(props) => (props.$isOpen ? 0 : "20px")};
    background-color: ${(props) => (props.$isOpen ? "#1f218f" : "")};
    transition: 0.8s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 0;
    border-bottom-left-radius: 20px;
    margin-right: 0;
  }
`;

const MenuBarIcon = styled.div<{ $isOpen: boolean }>`
  @media (min-width: 768px) {
    margin-top: 35px;
    &::before {
      background: ${(props) => (props.$isOpen ? "#e94f26!important" : "#fff")};
    }
    div {
      span {
        background-color: ${(props) =>
          props.$isOpen ? "#fff!important" : "#e94f26"};
      }
    }
  }

  width: 40px;
  height: 40px;
  border-radius: 1.4rem;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 20px;
  margin-top: 20px;
  cursor: pointer;
  &::before {
    background: ${(props) => (props.$isOpen ? "#fff" : "#e94f26")};
    transform: rotate(45deg);
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    border-radius: 10px;
    transition: 0.5s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  div {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 0.2rem);
    left: calc(50% - 0.8rem);
    span {
      width: 20px;
      height: 2px;
      background-color: ${(props) => (props.$isOpen ? "#e94f26" : "#fff")};
      margin-bottom: 3px;
      transition: 0.5s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    :first-child {
      transform: ${(props) =>
        props.$isOpen
          ? "translate3d(0, 0.2rem, 0) rotate(45deg) scaleX(1)"
          : "none"};
    }
    :nth-child(3) {
      transform: ${(props) =>
        props.$isOpen
          ? "translate3d(0, -0.4rem, 0) rotate(-45deg) scaleX(1)"
          : "none"};
    }

    // display none for third item for burger bar X
    :nth-child(2) {
      transform: ${(props) => (props.$isOpen ? "scaleX(0)" : "none")};
    }
  }
`;
