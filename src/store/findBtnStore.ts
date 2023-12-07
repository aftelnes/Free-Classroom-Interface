import { makeAutoObservable } from "mobx";

class FindBtnStore {
  findBtnClicked: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setFindBtnClicked() {
    this.findBtnClicked += 1;
  }
}

export default new FindBtnStore();
