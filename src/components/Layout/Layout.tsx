import { useCallback } from "react";
import { Footer } from "../footer/Footer";
import { MenuBar } from "../header/navigation/MenuBar";
import { Outlet, Route, Routes } from "react-router-dom";
import App from "../../App";
import { SingleCardPage } from "../SingleCardPage/SingleCardPage";

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
        <Route path="/cards/:cardId" element={<SingleCardPage />} />
      </Routes>
      <Footer />
    </>
  );
};
