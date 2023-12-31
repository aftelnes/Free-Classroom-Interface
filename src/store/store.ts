import { makeAutoObservable } from "mobx";
import { IEquipment, IFaculty } from "../types/types";

class Store {
  //Информация по факультетам, пришедшим с респонса
  faculty: IFaculty[] = [];
  //Информация по оснащению, пришедшего с респонса
  equipment: IEquipment[] = [];

  requestError: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  showInfo = () => {
    console.log(`faculty = ${this.faculty}`);
  };
}

export default new Store();
