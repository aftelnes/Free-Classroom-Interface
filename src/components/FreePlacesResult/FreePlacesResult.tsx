import { IconBuildingBank } from "@tabler/icons-react";
import { FC } from "react";
import { IconUser } from "@tabler/icons-react";

import classes from "./FreePlacesResult.module.css";
import Equipment from "../Equipment/Equipment";
import { IPlacesFreeProps } from "../../types/types";

const FreePlacesResult: FC<IPlacesFreeProps> = ({
  name,
  facultyName,
  size,
  equipments,
}) => {
  return (
    <div className={classes.freePlacesResult}>
      <div className={classes.classNum}>{name}</div>
      <div className={classes.image}>
        <IconBuildingBank
          style={{ width: "80%", height: "80%" }}
          stroke={1.5}
        />
      </div>
      <div className={classes.facultyName}>{facultyName}</div>
      <div className={classes.image}>
        <IconUser style={{ width: "80%", height: "80%" }} stroke={1.5} />
      </div>
      <div className={classes.places}>{size}</div>
      <div className={classes.menu}>
        <Equipment equipments={equipments} />
      </div>
    </div>
  );
};

export default FreePlacesResult;
