import styled from "styled-components";

export const Button = (props: {
  text: string;
  margins: boolean;
  onClick: () => void;
}) => {
  return (
    <ButtonStyled $margins={props.margins} onClick={props.onClick}>
      <span></span>
      <button>{props.text}</button>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.span<{ $margins: boolean }>`
  color: #fff;
  font-family: "FSP DEMO - Cervo Neue Neue", sans-serif;
  width: 100%;
  height: 30px;
  display: flex;
  position: relative;
  align-items: center;
  margin-top: ${(props) => (props.$margins ? "50px" : "")};
  margin-left: ${(props) => (props.$margins ? "50px" : "")};
  margin-bottom: ${(props) => (props.$margins ? "70px" : "")};
  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e94f26;
    &::before {
      content: "";
      left: 0;
      right: -200px;
      top: 0;
      bottom: 0;
      position: absolute;
      background-color: #e94f26;
      clip-path: inset(0 calc(100% - 5rem) 0 0 round 2.5rem);
      -webkit-clip-path: inset(0 calc(100% - 5rem) 0 0 round 2.5rem);
      rotate: -10deg;
      transform-origin: 0.65rem 50%;
    }
    &:hover::before {
      clip-path: inset(0 calc(100% - 12rem) 0 0 round 2.5rem);
      -webkit-clip-path: inset(0 calc(100% - 12rem) 0 0 round 2.5rem);
      rotate: 0deg;
    }
  }

  button {
    z-index: 1;
    cursor: pointer;
    text-transform: uppercase;
    width: 150px;
    height: 40px;
    background: none;
    border: none;
    color: inherit;
    font-size: 0.9rem;
  }
`;
