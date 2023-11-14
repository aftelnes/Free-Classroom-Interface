import axios from "axios";
import { IFaculty, IEquipment, IPlacesFree } from "../types/types";
    

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
    return response.data;
} catch (e) {
    console.log(e);
};
};

async function GetPlacesFree(): Promise<any> {
try {
    const response = await axios.get<IPlacesFree[]>(
    "https://08d3-85-172-29-2.ngrok-free.app/api/timetable/places/free",
    {
        headers: {
        "ngrok-skip-browser-warning": "69420",
        },
        data: {
            "date": "13.11.2023",
            "number": 3,
            "faculty": 3,
            "equipment": "",
            "size": ""
        }
    }
    );
    console.log("Response lenght = ", response.data.length);
    console.log("Response = ", response.data);
} catch (e) {
    console.log(e);
};
};

export default { GetFaculties, GetEquipment, GetPlacesFree }