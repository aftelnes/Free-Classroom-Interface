import { FC } from "react";

// import classes from "../../../styles/UI/UI.module.css";
import classes from ".././ResultArea.module.scss";

const ResultHeader: FC = () => {
  return (
    <div className={classes.resultHeader}>
      <h3 className={classes.item}>Результат</h3>
    </div>
  );
};

export default ResultHeader;
