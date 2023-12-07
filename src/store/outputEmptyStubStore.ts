import { makeAutoObservable } from "mobx";

class EmptyStub {
  showEmptyBlock: boolean = true;
  constructor() {
    makeAutoObservable(this);
  }
  changeShowEmptyBlock() {
    this.showEmptyBlock = false;
  }
}

export default new EmptyStub();
