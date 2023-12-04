import { FC } from "react";

import MainImage from "./MainImage";
import MainHeader from "./MainHeader";

const MainImageAndHeader: FC = () => {
  return (
    <div>
      <MainImage />
      <MainHeader />
    </div>
  );
};

export default MainImageAndHeader;
