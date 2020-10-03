import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Header from "../components/header/header";

function SimpleLayout({ children }) {
  return (
    <AnimationRevealPage disabled>
      <Header />

      {children}
    </AnimationRevealPage>
  );
}

export default SimpleLayout;
