import { FC } from "react";

// import classes from "../../../../../styles/UI/UI.module.css";
import classes from "../FreePlacesResult/FreePlaces.module.scss";

const NoResult: FC = () => {
  return (
    <div className={classes.freePlacesResult}>
      <h4 className={classes.noResult}>Нет результата</h4>
    </div>
  );
};

export default NoResult;
