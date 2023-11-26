import { FC } from "react";
import { observer } from "mobx-react-lite";
import classes from "../../styles/UI/UI.module.css";
import inputData from "../../store/inputData";
import OutputData from "../OutputData/OutputData";
import ResultHeader from "../ResultHeader/ResultHeader";
import outputData from "../../store/outputData";

const showEmptyDiv = () => {
  return (
    <div className={classes.emptyDiv}>
      <h4>Пока пустенько</h4>
    </div>
  );
};

const OutputDataArea: FC = observer(() => {
  const test = () => {
    return <OutputData />;
  };

  return (
    <div className={classes.outputDataArea}>
      <ResultHeader />
      {outputData.showEmptyBlock == true && showEmptyDiv()}
      {inputData.findBtnClicked && test()}
    </div>
  );
});

export default OutputDataArea;
