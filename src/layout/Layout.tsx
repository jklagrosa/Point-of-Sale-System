import React from "react";
import Navigation from "../components/Navigation";

function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export default Layout;
