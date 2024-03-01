import { Modal, Image, Button } from "@mantine/core";

import classes from "./ServError.module.scss";
import modal_window_image from "../../images/modal_window_image.svg";

const ServError = ({ value }) => {
  return (
    <Modal
      opened={value}
      onClose={() => {}}
      withCloseButton={false}
      className={classes.modalContent}
      withinPortal
      xOffset={0}
      size="lg"
    >
      <Image
        src={modal_window_image}
        width={250}
        className={classes.error_image}
      />
      <h1>
        <b>Извините, что-то пошло не так</b>
      </h1>
      <p>
        Попробуйте обновить страницу или загляните позже - мы обязательно всё
        починим
      </p>
      <Button
        className={classes.findbtn}
        onClick={() => window.location.reload()}
      >
        Перезагрузить
      </Button>
    </Modal>
  );
};

export default ServError;
