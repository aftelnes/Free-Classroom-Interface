import { FC } from "react";
import { observer } from "mobx-react-lite";
import classes from "../../styles/UI/UI.module.css";
import inputData from "../../store/inputData";
import OutputData from "../OutputData/OutputData";
import ResultHeader from "../ResultHeader/ResultHeader";

const OutputDataArea: FC = observer(() => {
  const test = () => {
    console.log("FIND BTN CLICKEDD");
    return <OutputData />;
  };

  return (
    <div className={classes.outputDataArea}>
      <ResultHeader />
      {inputData.findBtnClicked && test()}
    </div>
  );
});

export default OutputDataArea;
