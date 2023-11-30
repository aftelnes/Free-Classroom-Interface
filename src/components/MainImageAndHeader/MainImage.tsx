import { FC } from "react";
import { Image } from "@mantine/core";
import mainicon from "../../images/main_image.svg";

const MainImage: FC = () => {
  return (
    <Image
      src={mainicon}
      // width={250}
      style={{ marginLeft: "5vw", width: 250 }}
    />
  );
};

export default MainImage;
