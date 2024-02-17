import { makeAutoObservable } from "mobx";

import { IEquipment, IFaculty, IPlacesFree } from "../types/types";

class Store {
  //Список факушьтетов, приходит с сервера
  faculty: IFaculty[] = [];
  //Список оснащения, приходит с сервера
  equipment: IEquipment[] = [];
  //Список свободных аудиторий, приходит с сервера
  resultFreePlaces: IPlacesFree[] = [];
  //Флаг, отвечающий за
  servError: boolean = false;
  //Индикатор нажатия кнопки "найти"
  findBtnClicked: number = 0;
  //Сотояние кнопки "найти", для отрисовки "загрузки"
  btnLoading: boolean = false;
  //Индикатор корректного ввода даты
  incorrectLesNum: boolean = false;

  //Переменные для хранения данных из формы
  //Дата из Date.tsx
  date: string | null = null;
  //Номер зантия из LessonNumber.tsx
  lessonNum: number | "" = "";
  //Список факультетов из Faculties.tsx
  faculties: number[] = [];
  //Список оснащений из Equipment.tsx
  equipments: number[] = [];
  //Кол-во мест из MinimalSize.tsx
  size: number | "" = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setFindBtnClicked() {
    this.findBtnClicked += 1;
  }
  setDate(date: string | null) {
    this.date = date;
  }
  setLessonNum(lessonNum: number | "") {
    this.lessonNum = lessonNum;
  }
  setFaculty(faculty: string[]) {
    this.faculties = faculty.map((item) => {
      return Number(item);
    });
  }
  setEquipment(equipment: string[]) {
    this.equipments = equipment.map((item) => {
      return Number(item);
    });
  }
  setSize(size: number | "") {
    this.size = size;
  }
  setIncorrectLesNum(value: boolean) {
    this.incorrectLesNum = value;
  }
  getIncorrectLesNum() {
    return this.incorrectLesNum;
  }
  setServError(value: boolean) {
    this.servError = value;
  }
  getServError() {
    return this.servError;
  }
  setBtnLoading(value: boolean) {
    this.btnLoading = value;
  }
}

export default new Store();
