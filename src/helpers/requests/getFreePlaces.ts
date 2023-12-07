import axios from "axios";

import InputDataStore from "../../store/inputDataStore";

async function getPlacesFree<T>(): Promise<any> {
  console.log(`getPlacesFree`);
  console.log(`InputDataStore.date = ${InputDataStore.date}`);
  console.log(`InputDataStore.lessonNum= ${InputDataStore.lessonNum}`);
  console.log(`InputDataStore.faculty= ${InputDataStore.faculty}`);
  console.log(`InputDataStore.equipment= ${InputDataStore.equipment}`);
  console.log(`InputDataStore.size= ${InputDataStore.size}`);
  try {
    const response = await axios.get<T>(
      "https://0ee3-85-172-29-2.ngrok-free.app/api/timetable/places/free",
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
        params: {
          date: InputDataStore.date,
          number: InputDataStore.lessonNum,
          faculty: InputDataStore.faculty,
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
