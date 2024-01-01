import { FC } from "react";

import classes from "../../styles/UI/UI.module.css";


const NoResult: FC = () => {
    return(
        <div className={classes.emptyDiv}>
      <h4>Нет результата</h4>
    </div>
  );
};

export default NoResult;