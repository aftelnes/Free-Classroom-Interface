import axios from "axios";

import InputDataStore from "../../store/inputDataStore";

async function getPlacesFree<T>(): Promise<any> {
  let t: number[];
  t = [1, 2, 3];
  console.log("getPlacesFree");
  try {
    const response = await axios<T>(
      "https://0ee3-85-172-29-2.ngrok-free.app/api/timetable/places/free",
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
        params: {
          date: InputDataStore.date,
          number: InputDataStore.lessonNum,
          faculty: InputDataStore.faculty,
          // faculty: 1,
          equipment: InputDataStore.equipment,
          size: InputDataStore.size,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default getPlacesFree;
