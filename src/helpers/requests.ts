import axios from "axios";
import { IPlacesFree } from "../types/types";

async function getFacultiesOrEquipment<T>(url: string): Promise<any> {
  try {
    const response = await axios.get<T>(url, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response.data;
  } catch (e) {
    console.log("Упал!!");
    console.log(e);
  }
}

async function GetPlacesFree(): Promise<any> {
  try {
    const response = await axios.get<IPlacesFree[]>(
      "https://0ee3-85-172-29-2.ngrok-free.app/api/timetable/places/free",
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
        data: {
          date: "2023-11-20",
          number: 3,
          faculty: 3,
          equipment: "",
          size: "",
        },
      }
    );
    console.log("Response lenght = ", response.data.length);
    console.log("Response = ", response.data);
  } catch (e) {
    console.log(e);
  }
}

export default {
  GetPlacesFree,
  getFacultiesOrEquipment,
};
