import { FC } from "react";
import { observer } from "mobx-react-lite";

import classes from "../../styles/UI/UI.module.scss";
import Result from "./Result/Result";
import ResultHeader from "./ResultHeader/ResultHeader";
import NoResult from "./Result/NoResult/NoResult";
import store from "../../store/store";

const OutputDataArea: FC = observer(() => {
  return (
    <div className={classes.resultArea}>
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
