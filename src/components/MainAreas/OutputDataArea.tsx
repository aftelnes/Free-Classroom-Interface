import { FC, useEffect, useState } from "react";
import classes from "../../styles/UI/UI.module.css";
import FreePlacesResult from "../FreePlacesResult/FreePlacesResult";
import inputData from "../../store/inputData";
import { observer } from "mobx-react-lite";
import { IPlacesFree } from "../../types/types";
import getPlacesFree from "../../helpers/requests/getFreePlaces";

const OutputDataArea: FC = observer(() => {

  const test = () => {
    console.log("FIND BTN CLICKEDD");
    
    return null;
  };

  return (
    <div className={classes.outputDataArea}>
      Котики
      <FreePlacesResult />
      <FreePlacesResult />
      <FreePlacesResult />
      {inputData.findBtnClicked && test()}
    </div>
  );
});

export default OutputDataArea;
