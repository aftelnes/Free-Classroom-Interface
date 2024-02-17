import axios from "axios";
import store from "../../store/store";
/**
 * Функция для отправки запроса на API и получения списка факультетов и оснащения
 *
 * @template T - тип данных либо IFaculty[], либо IEquipment[] в зависимости от запроса
 *
 * @example
 * store.faculty = await getData<IFaculty[]>("faculties");
 * store.equipment = await getData<IEquipment[]>("equipments");
 *
 * @param dataRoute endpoint для получения данных
 * @returns
 * В случае IFaculty[]:
 * {
 * id: number,
 * name: string,
 * short_name: string,
 * inactive: boolean,
 * }
 * В случае IEquipment[]:
 * {
 * id: number,
 * name: string,
 * }
 */
async function getData<T>(dataRoute: string): Promise<T> {
  try {
    const response = await axios.get<T>(
      `${process.env.REACT_APP_API_URL}/${dataRoute}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response.data;
  } catch (e) {
    store.setServError(true);
  }
}

export default getData;
