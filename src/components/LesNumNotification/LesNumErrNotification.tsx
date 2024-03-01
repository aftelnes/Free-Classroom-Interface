import { Notification } from "@mantine/core";

import classes from "./LesNumErrNotification.module.scss";

const LesNumErrNotification = () => {
  return (
    <div>
      <Notification
        className={classes.lesNumErrNotification}
        color="red"
        onClose={() => {}}
        withCloseButton={false}
      >
        Занятия для выбранного времени уже пройдены
      </Notification>
    </div>
  );
};
export default LesNumErrNotification;
