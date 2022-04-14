import React from "react";
import BluePaw from "../../../Images/bluePaw.png";
import PawImage from "../../../Images/greyPaw.png";
import { Img } from "./style";

const PawImg = (props) => {
  return (
    <Img
      src={props.blue ? BluePaw : PawImage}
      alt="Paw Icon"
      margin={props.margin}
    />
  );
};

export default PawImg;
