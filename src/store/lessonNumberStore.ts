import { makeAutoObservable } from "mobx";

class DataAndLesNumber {
  lesNumber: number | "" = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setLesNumber(num: number | "") {
    this.lesNumber = num;
  }
}

export default new DataAndLesNumber();
