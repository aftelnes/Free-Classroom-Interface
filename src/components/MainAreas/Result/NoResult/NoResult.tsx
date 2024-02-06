import { FC } from "react";

import classes from "../NoResult/NoResult.module.scss";

const NoResult: FC = () => {
  return (
    <div className={classes.freePlacesNoResult}>
      <h4 className={classes.noResult}>Ничего не найдено</h4>
    </div>
  );
};

export default NoResult;
