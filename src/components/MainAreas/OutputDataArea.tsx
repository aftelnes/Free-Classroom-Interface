import { FC } from "react";
import { observer } from "mobx-react-lite";

import classes from "../../styles/UI/UI.module.css";
import FindBtnStore from "../../store/findBtnStore";
import OutputData from "../../OutputData/OutputData";
import ResultHeader from "../ResultHeader/ResultHeader";
import EmptyStub from "../../store/outputEmptyStubStore";
import freePlacesStore from "../../store/freePlacesStore";

const showEmptyDiv = () => {
  return (
    <div className={classes.emptyDiv}>
      <h4>Нет результата</h4>
    </div>
  );
};

const OutputDataArea: FC = observer(() => {
  return (
    <div className={classes.outputDataArea}>
      <ResultHeader />

      {/* {EmptyStub.showEmptyBlock && showEmptyDiv()} */}
      {/* {FindBtnStore.findBtnClicked != 0 && <OutputData />} */}
      {FindBtnStore.findBtnClicked != 0 &&
      freePlacesStore.resultFreePlaces.length != 0 ? (
        <OutputData />
      ) : (
        showEmptyDiv()
      )}
    </div>
  );
});

export default OutputDataArea;
