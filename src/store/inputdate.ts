import { makeAutoObservable } from "mobx";

class InputDateAndLessonNumber{
    dateState:boolean = false;
    lessonNumState: boolean = false;
    constructor(){
        makeAutoObservable(this);
    }

    changeDateState(value: boolean){
        this.dateState = value;
        console.log(`Я вызвался и изменил dateState = ${value}`);
    }
    changeLessonNumState(value: boolean){
        this.lessonNumState = value;
        console.log(`Я вызвался и изменил lessonNumState = ${value}`);
    }
}

export default new InputDateAndLessonNumber;
