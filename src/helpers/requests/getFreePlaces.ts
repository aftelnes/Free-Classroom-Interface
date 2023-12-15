import axios from "axios";

import InputDataStore from "../../store/inputDataStore";
import qs from "qs";

async function getPlacesFree<T>(): Promise<any> {
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
          equipment: InputDataStore.equipment,
          size: InputDataStore.size,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default getPlacesFree;
