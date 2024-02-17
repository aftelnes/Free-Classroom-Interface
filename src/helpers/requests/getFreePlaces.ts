import axios from "axios";

import qs from "qs";
import store from "../../store/store";
/**
 * Функция для отправки запроса на API и получения списка свободных аудиторий
 *
 * @template T - тип данных IPlacesFree[]
 *
 * @example
 * store.resultFreePlaces = await getPlacesFree<IPlacesFree[]>();
 *
 * @returns
 *  {
 *   id: number,
 *   address: string,
 *   name: string,
 *   faculty: {
 *    id: number,
 *     short_name: string,
 *   },
 *   size: number,
 *   equipments: [
 *     {
 *       equipment: {
 *         id: number,
 *         name: string,
 *       },
 *       amount: number,
 *     }
 *   ]
 * }
 */
async function getPlacesFree<T>(): Promise<T> {
  store.resultFreePlaces = [];
  try {
    store.setBtnLoading(true);
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
    return response.data;
  } catch (error) {
    store.setIncorrectLesNum(true);
  } finally {
    store.setBtnLoading(false);
  }
}

export default getPlacesFree;
