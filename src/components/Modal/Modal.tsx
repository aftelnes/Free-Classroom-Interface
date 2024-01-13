import { Button } from "@mantine/core";

import classes from "./Modal.module.scss";


const Modal = ({visible, setVisible }) => {
  const rootClasses = [classes.Modal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  //button to refresh the page, if interface enabled with sever problems
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(true)}>
      <div
        className={classes.ModalContent}
        onClick={(event) => event.stopPropagation()}>
        <h3 className={classes.message}>
          <p>К сожалению сервис не доступен из-за технических неполадок.</p>
          <p>Уже устраняем!</p>
        </h3>
        <Button className={classes.findbtn} onClick={refreshPage}>
          обновить
        </Button>
      </div>
    </div>
  );
};

export default Modal;
