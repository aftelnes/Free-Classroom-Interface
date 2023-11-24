import { FC, useEffect, useState } from "react";
import { IPlacesFree } from "../../types/types";
import getPlacesFree from "../../helpers/requests/getFreePlaces";
import FreePlacesResult from "../FreePlacesResult/FreePlacesResult";

const OutputData: FC = () => {
  const [freePlacesResp, setFreePlacesResp] = useState<IPlacesFree[]>([]);

  (async function setFreePlacesState() {
    setFreePlacesResp(await getPlacesFree<IPlacesFree[]>());
  })();

  useEffect(() => {});

  return (
    <div>
      {freePlacesResp.map((item, index) => (
        <div>{item.equipments[0].equipment.name}</div>
      ))}
      {/* {freePlacesResp.map((item) => (
        <FreePlacesResult
          name={item.name}
          facultyName={"good"}
          size={item.size}
        />
      ))} */}
    </div>
  );
};

export default OutputData;
