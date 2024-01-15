import styled from "styled-components";
import { ToursPageHeader } from "./ToursPageHeader";
import { useLocation } from "react-router-dom";

export const ToursPage = () => {
  const location = useLocation();

  return (
    <ToursPageStyled>
      <ToursPageHeader
        name={location.state.name}
        img={location.state.img}
        place={location.state.place}
        routeName={location.state.page.routeName}
        route={location.state.page.route}
        headline={location.state.page.headline}
      />
    </ToursPageStyled>
  );
};

const ToursPageStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
