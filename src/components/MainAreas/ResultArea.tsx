import { FC } from "react";
import { observer } from "mobx-react-lite";

import classes from "../../styles/UI/UI.module.css";
import Result from "./Result/Data/Data";
import ResultHeader from "./ResultHeader/ResultHeader";
import NoResult from "./Result/Data/NoResult/NoResult";
import store from "../../store/store";

const OutputDataArea: FC = observer(() => {
  return (
    <div className={classes.outputDataArea}>
      <ResultHeader />

      {store.findBtnClicked != 0 && store.resultFreePlaces.length != 0 ? (
        <Result />
      ) : (
        <NoResult />
      )}
    </div>
  );
});

export default OutputDataArea;
