import { useCallback } from "react";
import { Footer } from "../footer/Footer";
import { MenuBar } from "../header/navigation/MenuBar";
import { Outlet, Route, Routes } from "react-router-dom";
import App from "../../App";
import { SingleCardPage } from "../SingleCardPage/SingleCardPage";
import { Inspirations } from "../Inspirations/Inspirations";
import { ToursPage } from "../ToursPage/ToursPage";

export const Layout = () => {
  const changeOverflowY = useCallback((open: boolean) => {
    if (window.outerWidth <= 768) {
      document.body.style.overflowY = open ? "hidden" : "scroll";
    }
  }, []);
  return (
    <>
      <MenuBar isOpen={changeOverflowY} />
      <Outlet />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route
          path="/inspirations/:inspirationsId"
          element={<SingleCardPage />}
        />
        <Route path="tours/:toursId" element={<ToursPage />} />
      </Routes>
      <Footer />
    </>
  );
};
