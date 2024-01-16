import styled from "styled-components";
import { ToursPageHeader } from "./ToursPageHeader";
import { useLocation } from "react-router-dom";
import { ToursPageSlider } from "./ToursPageSlider";
import { ToursType } from "../../types/JsonTypes/ToursType";
import { ToursPageContent } from "./ToursPageContent";

export const ToursPage = () => {
  const location: { state: ToursType } = useLocation();

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
      <ToursPageSlider images={location.state.page.slider} />
      <ToursPageContent content={location.state.page.content} />
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
