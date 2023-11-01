import classes from "../styles/ResultDiv/ResultDiv.module.css";
import MenuInfo from "./Menu";
import { Image } from "@mantine/core";
import facultyicon from ".././images/faculteImage.svg";
import placesicon from ".././images/placesImage.svg";

const ResultDiv = () => {
  return (
    <div className={classes.resultDiv}>
      <div className={classes.classNum}>304Н</div>
      <div className={classes.image}>
        <Image src={facultyicon} w={17} />
      </div>
      <div className={classes.facultyName}>ФМиКН</div>
      <div className={classes.image}>
        <Image src={placesicon} w={17} />
      </div>
      <div className={classes.places}>90</div>
      <div className={classes.menu}>
        <MenuInfo />
      </div>
    </div>
  );
};

export default ResultDiv;
