import { makeAutoObservable } from "mobx";
import { IEquipment, IFaculty } from "../types/types";

class Store {
  //Информация по факультетам, пришедшим с респонса
  faculty: IFaculty[] = [];
  //Информация по оснащению, пришедшего с респонса
  equipment: IEquipment[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  showInfo = () => {
    console.log(`faculty = ${this.faculty}`);
  };
}

export default new Store();
