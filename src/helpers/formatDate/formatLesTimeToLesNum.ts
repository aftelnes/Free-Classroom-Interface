import lessonNumberTimeAry from "../data/lessonNumberTimeAry";

const convertLesTimeToLesNum = (lesTime: string) => {
  let res: number = 1;

  lessonNumberTimeAry.map((lesson) => {
    if (lesson.lessonTime == lesTime) {
      res = Number(lesson.lessonNum);
    }
  });

  return res;
};

export default convertLesTimeToLesNum;
