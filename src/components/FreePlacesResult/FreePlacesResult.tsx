import { IconBuildingBank } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import classes from "./FreePlacesResult.module.css";
import Equipment from "../Equipment/Equipment";

const FreePlacesResult: React.FC = () => {
  return (
    <div className={classes.freePlacesResult}>
      <div className={classes.classNum}>304Н</div>
      <div className={classes.image}>
        <IconBuildingBank
          style={{ width: "80%", height: "80%" }}
          stroke={1.5}
        />
      </div>
      <div className={classes.facultyName}>ФМиКН</div>
      <div className={classes.image}>
        <IconUser style={{ width: "80%", height: "80%" }} stroke={1.5} />
      </div>
      <div className={classes.places}>90</div>
      <div className={classes.menu}>
        <Equipment />
      </div>
    </div>
  );
};

export default FreePlacesResult;
