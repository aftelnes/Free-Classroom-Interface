import axios from "axios";
import { IPlacesFree } from "../../types/types";
import inputData from "../../store/inputData";

async function getPlacesFree(): Promise<any> {
  console.log(`Dataa = ${inputData.date} typeof = ${typeof inputData.date}`);
  try {
    const response = await axios.get<IPlacesFree[]>(
      "https://0ee3-85-172-29-2.ngrok-free.app/api/timetable/places/free",
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
        params: {
          //   date: "2023-11-24",
          date: inputData.date,
          number: inputData.lessonNum,
          faculty: inputData.faculty,
          equipment: inputData.equipment,
          size: inputData.size,
        },
      }
    );
    console.log("getPlacesFunc worked");
    console.log("Response lenght = ", response.data.length);
    console.log("Response = ", response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default getPlacesFree;
