import { makeAutoObservable } from "mobx";
import { IFaculty } from "../types/types";

class InputData{

    dateState:boolean = false;
    lessonNumState: boolean = false;

    date: string = '';
    lessonNum: number = 0;
    faculty: number[] = [0];
    equipment: number[] = [0];
    size: number = 0 ;

    constructor(){
        makeAutoObservable(this);
    };

    //Флаги первых двух инпутов, чтобы после ввода информации в первые 2 выпадали остальные 3 инпута
    changeDateState(value: boolean){
        this.dateState = value;
        console.log(`Я вызвался и изменил dateState = ${value}`);
    };
    changeLessonNumState(value: boolean){
        this.lessonNumState = value;
        console.log(`Я вызвался и изменил lessonNumState = ${value}`);
    };


    //Запись значений 
    setDate(date: string){
        this.date = date;
    };
    setLessonNum(lessonNum: number){
        this.lessonNum = lessonNum;
    };
    setFaculty(faculty: number[]){
        this.faculty = faculty;
    };
    setEquipment(equipment: number[]){
        this.equipment = equipment;
    };
    setSize(size: number){
        this.size = size;
    };


    showInfo(){
        console.log(`date = ${this.date} \ lessonNum = ${this.lessonNum} \
        faculty = ${this.faculty} \ equipment = ${this.equipment} \ size = ${this.size}`);
    };

}

export default new InputData;
