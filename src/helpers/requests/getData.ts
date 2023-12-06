import axios from "axios";

async function getData<T>(dataRoute: string): Promise<any> {
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
  }
}

export default getData;
