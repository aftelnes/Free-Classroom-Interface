import { makeAutoObservable} from "mobx";

class InputData {
  dateState: boolean = false;
  lessonNumState: boolean = false;
  findBtnClicked: boolean = false;

  date: string | null = null;
  lessonNum: number | string = 0;
  faculty: number[] | string[] = [0];
  equipment: number[] | string[] = [0];
  size: number | string = 0;

  constructor() {
    makeAutoObservable(this);
  }

  //Флаги первых двух инпутов, чтобы после ввода информации в первые 2 выпадали остальные 3 инпута
  changeDateState() {
    this.dateState = true;
    console.log(`Я вызвался и изменил dateState = ${true}`);
  }
  changeLessonNumState() {
    this.lessonNumState = true;
    console.log(`Я вызвался и изменил lessonNumState = ${true}`);
  }

  //Запись значений
  setDate(date: string | null) {
    this.date = date;
    console.log(`Дата записана = ${this.date}`);
  }
  setLessonNum(lessonNum: number | string) {
    this.lessonNum = lessonNum;
    console.log(
      `Номер пары записан  = ${this.lessonNum} typeof = ${typeof this
        .lessonNum}`
    );
  }
  setFaculty(faculty: number[] | string[]) {
    this.faculty = faculty;
    console.log(`ID Факультетов записан = ${this.faculty}`);
  }
  setEquipment(equipment: number[] | string[]) {
    this.equipment = equipment;
    console.log(`ID оснащения записан = ${this.equipment}`);
  }
  setSize(size: number | string) {
    this.size = size;
    console.log(`Кол-во мест записано = ${this.size} typeof = ${typeof size}`);
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
