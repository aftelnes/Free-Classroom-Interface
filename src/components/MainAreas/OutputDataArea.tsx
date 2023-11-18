import { FC } from "react";
import classes from "../../styles/UI/UI.module.css";
import FreePlacesResult from "../FreePlacesResult/FreePlacesResult";

const OutputDataArea: FC = () => {
  return (
    <div className={classes.outputDataArea}>
      Котики
      <FreePlacesResult />
      <FreePlacesResult />
      <FreePlacesResult />
    </div>
  );
};

export default OutputDataArea;
