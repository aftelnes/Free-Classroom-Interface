class InputDataStore {
  date: string | null = null;
  lessonNum: number | "" = "";
  // faculty: number[] | string[] = [0];
  faculty: string[] = [];
  // equipment: number[] | string[] = [0];
  equipment: string[] = [];
  size: number | "" = 0;

  setDate(date: string | null) {
    this.date = date;
  }
  setLessonNum(lessonNum: number | "") {
    this.lessonNum = lessonNum;
  }
  setFaculty(faculty: string[]) {
    this.faculty = faculty;
  }
  setEquipment(equipment: string[]) {
    this.equipment = equipment;
  }
  setSize(size: number | "") {
    this.size = size;
  }
}

export default new InputDataStore();
