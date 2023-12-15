import { makeAutoObservable } from "mobx";
import { IPlacesFree } from "../types/types";

class FreePlaces {
  resultFreePlaces: IPlacesFree[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  showInfo = () => {
    console.log(`Znach = ${this.resultFreePlaces}`);
  };
}

export default new FreePlaces();
