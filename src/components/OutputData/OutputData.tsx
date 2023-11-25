import { FC, useEffect, useState } from "react";
import { ScrollArea } from "@mantine/core";
import { IPlacesFree } from "../../types/types";
import getPlacesFree from "../../helpers/requests/getFreePlaces";
import FreePlacesResult from "../FreePlacesResult/FreePlacesResult";

const OutputData: FC = () => {
  const [freePlacesResp, setFreePlacesResp] = useState<IPlacesFree[]>([]);

  (async function setFreePlacesState() {
    setFreePlacesResp(await getPlacesFree<IPlacesFree[]>());
  })();

  return (
    <div>
      <ScrollArea h={350} type='always' offsetScrollbars scrollHideDelay={1500}>
        {/* {freePlacesResp.map((item, index) => (
          <div>{item.name}</div>
        ))} */}
        {freePlacesResp.map(
          (item) => (
            // console.log(`EQ = ${item.equipments[0].equipment.name}`),
            // console.log(`EQ = ${item.equipments[0].amount}`),
            // console.log(`=========================`),
            (
              <FreePlacesResult
                name={item.name}
                facultyName={"good"}
                size={item.size}
                equipments={item.equipments}
              />
            )
          )
        )}
      </ScrollArea>
    </div>
  );
};

export default OutputData;
