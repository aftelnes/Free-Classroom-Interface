import axios from "axios";
import { IFaculty, IEquipment } from "../types/types";
    

async function GetFaculties(): Promise<any> {
try {
    const response = await axios.get<IFaculty[]>(
    "https://08d3-85-172-29-2.ngrok-free.app/api/faculties/selection",
    {
        headers: {
        "ngrok-skip-browser-warning": "69420",
        },
    }
    );
    console.log("Response lenght = ", response.data.length);
    console.log("Response = ", response.data);
    return response.data;
} catch (e) {
    console.log(e);
};
};


async function GetEquipment(): Promise<any> {
try {
    const response = await axios.get<IEquipment[]>(
    "https://08d3-85-172-29-2.ngrok-free.app/api/equipments/selection",
    {
        headers: {
        "ngrok-skip-browser-warning": "69420",
        },
    }
    );
    console.log("Response lenght = ", response.data.length);
    console.log("Response = ", response.data);
    return response.data;
} catch (e) {
    console.log(e);
};
};

export default { GetFaculties, GetEquipment }