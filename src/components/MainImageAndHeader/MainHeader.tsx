import { FC } from "react";

import classes from "./MainImageAndHeader.module.css";

const MainHeader: FC = () => {
  return <h3 className={classes.mainHeader}>Поиск свободной аудитории</h3>;
};

export default MainHeader;
