import { FC } from "react";
import { observer } from "mobx-react-lite";

import classes from "../../styles/UI/UI.module.scss";
import Result from "./Result/Result";
import ResultHeader from "./ResultHeader/ResultHeader";
import NoResult from "./Result/NoResult/NoResult";
import store from "../../store/store";

const ResultArea: FC = observer(() => {
  return (
    <div className={classes.resultArea}>
      <ResultHeader />
      {/* Результат будет показываться в случае если:
      1) Нажата кнопка "Найти"
      2) Нет ошибки заполнения формы
      3) Нет ошибки взаимодействия с сервером
      4) Массив - ответ с сервера не пуст
      соттветственно */}
      {store.findBtnClicked != 0 &&
      store.getIncorrectLesNum() == false &&
      store.getServError() == false &&
      store.resultFreePlaces.length != 0 ? (
        <Result />
      ) : (
        <NoResult />
      )}
    </div>
  );
});

export default ResultArea;
