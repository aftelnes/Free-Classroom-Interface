import { FC } from "react";
import { observer } from "mobx-react-lite";

import classes from "../../styles/UI/UI.module.css";
import InputData from "../../store/inputData";
import OutputData from "../../OutputData/OutputData";
import ResultHeader from "../ResultHeader/ResultHeader";
import EmptyStub from "../../store/outputEmptyStub";

const showEmptyDiv = () => {
  return (
    <div className={classes.emptyDiv}>
      <h4>Пока пустенько</h4>
    </div>
  );
};

const OutputDataArea: FC = observer(() => {
  return (
    <div className={classes.outputDataArea}>
      <ResultHeader />
      {EmptyStub.showEmptyBlock == true && showEmptyDiv()}
      {InputData.findBtnClicked && <OutputData />}
    </div>
  );
});

export default OutputDataArea;
