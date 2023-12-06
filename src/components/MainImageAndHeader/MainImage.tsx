import { FC } from "react";
import { Image } from "@mantine/core";

import mainicon from "../../images/main_image.svg";
import classes from "./MainImageAndHeader.module.css";

const MainImage: FC = () => {
  return <Image src={mainicon} width={250} className={classes.mainImage} />;
};

export default MainImage;
