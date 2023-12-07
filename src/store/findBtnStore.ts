import { makeAutoObservable } from "mobx";

class FindBtnStore {
  findBtnClicked: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFindBtnClicked() {
    this.findBtnClicked = true;
    console.log(`this.findBtnClicked = ${this.findBtnClicked}`);
  }
}

export default new FindBtnStore();
