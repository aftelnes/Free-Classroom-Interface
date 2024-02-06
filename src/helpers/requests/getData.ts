import axios from "axios";
import store from "../../store/store";

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
    // console.log("response for getting fac and equip");
    return response.data;
  } catch (e) {
    // console.log(e);
    store.requestError = true;
  }
}

export default getData;
