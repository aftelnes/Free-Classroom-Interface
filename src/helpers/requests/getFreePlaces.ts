import axios from "axios";

import qs from "qs";
import store from "../../store/store";

async function getPlacesFree<T>(): Promise<T> {
  try {
    store.btnLoading = true;
    const response = await axios<T>(
      `${process.env.REACT_APP_API_URL}/timetable/places/free`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
        params: {
          date: store.date,
          number: store.lessonNum,
          faculty: store.faculties,
          equipment: store.equipments,
          size: store.size,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      }
    );
    console.log("request for free places");
    return response.data;
  } catch (e) {
    console.log(e);
    store.requestError = true;
  } finally {
    store.btnLoading = false;
  }
}

export default getPlacesFree;
