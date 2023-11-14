import { IFaculty } from "../types/types";


class ResponseData{

    facultyResponse!: IFaculty[];

    setFacultyResponseData(respData: IFaculty[]){
        this.facultyResponse = respData;
    };

    
}