import axios from "axios";

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



export default getFacultiesOrEquipment;
