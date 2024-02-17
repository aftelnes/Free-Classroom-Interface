import { Notification } from "@mantine/core";

import classes from "./LesNumErrNotification.module.scss";

const LesNumErrNotification = () => {
  return (
    <div>
      <Notification
        className={classes.lesNumErrNotification}
        title="Ошибка формы"
        color="red"
        onClose={() => {}}
        withCloseButton={false}
      >
        Данное занятие не может быть выбрано, так как оно уже закончилось
      </Notification>
    </div>
  );
};
export default LesNumErrNotification;
