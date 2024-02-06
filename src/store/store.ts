import { makeAutoObservable } from "mobx";

import { IEquipment, IFaculty, IPlacesFree } from "../types/types";

class Store {
  //faculty data from response
  faculty: IFaculty[] = [];
  //equipment data from response
  equipment: IEquipment[] = [];
  //result free places from response
  resultFreePlaces: IPlacesFree[] = [];
  //flag for tracking faculty and equipment requests
  requestError: boolean = false;
  //indicator for find btn clicking
  findBtnClicked: number = 0;
  //indicator for changing lesson number
  lesNumber: number | "" = 0;
  //btn loading
  btnLoading: boolean = false;

  //Data from inputs
  date: string | null = null;
  lessonNum: number | "" = "";
  faculties: number[] = [];
  equipments: number[] = [];
  size: number | "" = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setFindBtnClicked() {
    this.findBtnClicked += 1;
  }
  setLesNumber(num: number | "") {
    this.lesNumber = num;
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
}

export default new Store();
