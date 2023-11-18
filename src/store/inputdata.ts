import { makeAutoObservable } from "mobx";

class InputData{

    dateState: boolean = false;
    lessonNumState: boolean = false;

    date: string = 'default';
    lessonNum: number = 0;
    faculty: number[] = [0];
    equipment: number[] = [0];
    size: number = 0 ;

    constructor(){
        makeAutoObservable(this);
    };

    //Флаги первых двух инпутов, чтобы после ввода информации в первые 2 выпадали остальные 3 инпута
    changeDateState(){
        this.dateState = true;
        console.log(`Я вызвался и изменил dateState = ${true}`);
    };
    changeLessonNumState(){
        this.lessonNumState = true;
        console.log(`Я вызвался и изменил lessonNumState = ${true}`);
    };


    //Запись значений 
    setDate(date: string){
        this.date = date;
        console.log(`Дата записана = ${this.date}`);
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
