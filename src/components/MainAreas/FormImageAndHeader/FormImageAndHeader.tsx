import { FC } from "react";
import { Image } from "@mantine/core";

import mainicon from "../../../images/main_image.svg";
import classes from "./FormImageAndHeader.module.css";

//! Добавить адаптивность - сделать верстку под весь div
const MainImageAndHeader: FC = () => {
  return (
    <div>
      <Image src={mainicon} width={250} className={classes.mainImage} />
      <h3 className={classes.mainHeader}>Поиск свободной аудитории</h3>
    </div>
  );
};

export default MainImageAndHeader;
