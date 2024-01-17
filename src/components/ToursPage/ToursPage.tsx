import styled from "styled-components";
import { ToursPageHeader } from "./ToursPageHeader";
import { useLocation } from "react-router-dom";
import { ToursPageSlider } from "./ToursPageSlider";
import { ToursType } from "../../types/JsonTypes/ToursType";
import { ToursPageContent } from "./ToursPageContent";
import { useEffect } from "react";
import { Logo } from "../header/Logo";

export const ToursPage = () => {
  const location: { state: ToursType } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToursPageStyled>
      <Logo color="blue" />
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
  .header__logo {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;
