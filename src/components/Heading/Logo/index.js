import React from "react";
import logo from "./MollysLogo.png";
import { Div, Picture } from "./style";

const Logo = () => {
  return (
    <Div>
      <Picture src={logo} />
    </Div>
  );
};

export default Logo;
