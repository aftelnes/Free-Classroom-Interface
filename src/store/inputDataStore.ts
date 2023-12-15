class InputDataStore {
  date: string | null = null;
  lessonNum: number | "" = "";
  faculty: number[] = [];

  equipment: number[] = [];
  size: number | "" = 0;

  setDate(date: string | null) {
    this.date = date;
  }
  setLessonNum(lessonNum: number | "") {
    this.lessonNum = lessonNum;
  }
  setFaculty(faculty: string[]) {
    this.faculty = faculty.map((item) => {
      return Number(item);
    });
  }

  setEquipment(equipment: string[]) {
    this.equipment = equipment.map((item) => {
      return Number(item);
    });
  }
  setSize(size: number | "") {
    this.size = size;
  }
}

export default new InputDataStore();
