import { FC } from "react";
import { Image } from "@mantine/core";
import mainicon from "../../images/main_image.svg";

const MainImage: FC = () => {
  return <Image src={mainicon} w={250} style={{ marginLeft: "5vw" }} />;
};

export default MainImage;
