import store from "../../store/store";
import formatDate from "../formatDate/formatDate";
import { INumberInputAry } from "../../types/types";
import lessonNumberTimeAry from "../data/lessonNumberTimeAry";

function checkLessonNumber() {
  const lesNumAry: INumberInputAry[] = [];

  let nowTime = new Date();
  const today = formatDate(nowTime);
  console.log(`Chose date = ${store.date}`);
  console.log("Today = ", today);
  const timeToCheck = `${nowTime.getHours()}:${nowTime.getMinutes()}`;

  if (today == store.date) {
    const currentHour = parseInt(timeToCheck.split(":")[0], 10);
    const currentMinute = parseInt(timeToCheck.split(":")[1], 10);

    for (const lesson of lessonNumberTimeAry) {
      const [startHour, startMinute] = lesson.lessonTime
        .split(" - ")[0]
        .split(":")
        .map(Number);

      if (
        currentHour > startHour ||
        (currentHour === startHour && currentMinute > startMinute)
      ) {
        lesNumAry.push({
          value: `${lesson.lessonTime}`,
          label: `${lesson.lessonNum}`,
          disabled: true,
        });
      } else {
        lesNumAry.push({
          value: `${lesson.lessonTime}`,
          label: `${lesson.lessonNum}`,
          disabled: false,
        });
      }
    }
  } else {
    for (const lesson of lessonNumberTimeAry) {
      lesNumAry.push({
        value: `${lesson.lessonTime}`,
        label: `${lesson.lessonNum}`,
        disabled: false,
      });
    }
  }
  return lesNumAry;
}

export default checkLessonNumber;
