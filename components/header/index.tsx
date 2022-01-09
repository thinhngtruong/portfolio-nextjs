import React from "react";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};
