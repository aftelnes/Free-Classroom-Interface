import { makeAutoObservable } from "mobx";

class OutputData {
  showEmptyBlock: boolean = true;
  constructor() {
    makeAutoObservable(this);
  }
  changeShowEmptyBlock() {
    this.showEmptyBlock = false;
  }
}

export default new OutputData();
