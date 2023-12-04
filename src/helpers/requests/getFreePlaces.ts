import axios from "axios";

import inputData from "../../store/inputData";

async function getPlacesFree<T>(): Promise<any> {
  console.log(`Dataa = ${inputData.date} typeof = ${typeof inputData.date}`);
  try {
    const response = await axios.get<T>(
      "https://0ee3-85-172-29-2.ngrok-free.app/api/timetable/places/free",
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
        params: {
          date: inputData.date,
          number: inputData.lessonNum,
          faculty: inputData.faculty,
          equipment: inputData.equipment,
          size: inputData.size,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default getPlacesFree;
