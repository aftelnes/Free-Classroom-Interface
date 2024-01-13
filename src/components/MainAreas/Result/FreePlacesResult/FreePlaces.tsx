import { IconBuildingBank } from "@tabler/icons-react";
import { FC } from "react";
import { IconUser } from "@tabler/icons-react";

import classes from "./FreePlaces.module.scss";
import Equipment from "./Equipment/Equipment";
import { IPlacesFreeProps } from "../../../../types/types";

const FreePlacesResult: FC<IPlacesFreeProps> = ({
  number,
  faculty,
  size,
  equipments,
}) => {
  return (
    <div className={classes.freePlacesResult}>
      <div className={classes.classNum}>{number}</div>
      <div className={classes.image}>
        <IconBuildingBank
          style={{ width: "80%", height: "80%" }}
          stroke={1.5}
        />
      </div>
      <div className={classes.facultyName}>
        {faculty ? faculty.short_name : "-"}
      </div>
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
