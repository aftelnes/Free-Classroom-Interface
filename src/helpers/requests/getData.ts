import axios from "axios";
import store from "../../store/store";

async function getData<T>(dataRoute: string): Promise<T> {
  console.log("jjjj");
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
    console.log("Упал!!");
    console.log(e);
    store.requestError = true;
  }
}

export default getData;
