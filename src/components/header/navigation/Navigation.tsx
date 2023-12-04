import styled from "styled-components";

export const Navigation = (props: { navIsOpen: boolean }) => {
  return (
    <NavigationStyled $isOpen={props.navIsOpen}>
      <li>get inspired</li>
      <li>play & explore</li>
      <li>pays des lacs</li>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.ul<{ $isOpen: boolean }>`
  font-family: Cervo Neue, sans-serif;
  font-weight: 600;
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  @media (min-width: 768px) {
    justify-content: space-evenly;
    align-items: center;
    font-size: 19px;
    color: #1f218f;
    font-weight: 300;
    li {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    color: white;
    line-height: 1;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding-left: 20px;
    li {
      margin-bottom: 30px;
      font-size: 8vw;
      cursor: pointer;
    }
  }
`;
