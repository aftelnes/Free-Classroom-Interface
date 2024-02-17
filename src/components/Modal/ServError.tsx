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
    >
      <Image
        src={modal_window_image}
        width={180}
        className={classes.error_image}
      />
      <p>К сожалению сервис не доступен из-за технических неполадок.</p>
      <p>Зайдите позже</p>
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
