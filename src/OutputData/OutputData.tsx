import { FC, useEffect, useState } from "react";
import { ScrollArea } from "@mantine/core";

import { IPlacesFree } from "../types/types";
import getPlacesFree from "../helpers/requests/getFreePlaces";
import FreePlacesResult from "../components/FreePlacesResult/FreePlacesResult";
import outputData from "../store/outputEmptyStub";

let tmp: IPlacesFree[] = [];

const OutputData: FC = () => {
  console.log("OutputData");

  (async function setFreePlacesState() {
    tmp = await getPlacesFree<IPlacesFree[]>();
  })();

  useEffect(() => {
    outputData.changeShowEmptyBlock();
  }, []);

  return (
    <ScrollArea h={400} type='always' offsetScrollbars scrollHideDelay={2000}>
      {tmp.map((item) => {
        if (item.faculty == null) {
          return (
            <FreePlacesResult
              number={item.name}
              facultyName={"-"}
              size={item.size}
              equipments={item.equipments}
            />
          );
        } else {
          return (
            <FreePlacesResult
              number={item.name}
              facultyName={item.faculty.short_name}
              size={item.size}
              equipments={item.equipments}
            />
          );
        }
      })}
    </ScrollArea>
  );
};

export default OutputData;
