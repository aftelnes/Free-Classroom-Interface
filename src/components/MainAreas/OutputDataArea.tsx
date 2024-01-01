import { FC } from "react";
import { observer } from "mobx-react-lite";

import classes from "../../styles/UI/UI.module.css";
import OutputData from "../../OutputData/OutputData";
import ResultHeader from "../ResultHeader/ResultHeader";
import NoResult from "../NoResult/NoResult";
import store from "../../store/store";

const OutputDataArea: FC = observer(() => {
  return (
    <div className={classes.outputDataArea}>
      <ResultHeader />

      {store.findBtnClicked != 0 && store.resultFreePlaces.length != 0 ? (
        <OutputData />
      ) : (
        <NoResult />
      )}
    </div>
  );
});

export default OutputDataArea;
