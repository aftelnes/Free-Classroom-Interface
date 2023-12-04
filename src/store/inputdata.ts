import { makeAutoObservable } from "mobx";

class InputData {
  dateState: boolean = false;
  lessonNumState: boolean = false;
  findBtnClicked: boolean = false;

  date: string | null = null;
  lessonNum: number | "" = "";
  faculty: number[] | string[] = [0];
  equipment: number[] | string[] = [0];
  size: number | "" = 0;

  constructor() {
    makeAutoObservable(this);
  }

  //Флаги первых двух инпутов, чтобы после ввода информации в первые 2 выпадали остальные 3 инпута
  changeDateState() {
    this.dateState = true;
  }
  changeLessonNumState() {
    this.lessonNumState = true;
  }

  //Запись значений
  setDate(date: string | null) {
    this.date = date;
  }
  setLessonNum(lessonNum: number | "") {
    this.lessonNum = lessonNum;
  }
  setFaculty(faculty: number[] | string[]) {
    this.faculty = faculty;
  }
  setEquipment(equipment: number[] | string[]) {
    this.equipment = equipment;
  }
  setSize(size: number | "") {
    this.size = size;
  }

  showInfo() {
    console.log(`date = ${this.date} \ lessonNum = ${this.lessonNum} \
        faculty = ${this.faculty} \ equipment = ${this.equipment} \ size = ${this.size}`);
  }

  setFindBtnClicked() {
    this.findBtnClicked = true;
  }
}

export default new InputData();
