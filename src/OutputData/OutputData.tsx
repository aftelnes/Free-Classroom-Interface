import { FC, useEffect, useState } from "react";
import { ScrollArea } from "@mantine/core";

import FreePlacesResult from "../components/FreePlacesResult/FreePlacesResult";
import outputData from "../store/outputEmptyStubStore";
import freePlacesStore from "../store/freePlacesStore";
import { observer } from "mobx-react-lite";


const OutputData: FC = observer(() => {
  console.log("OutputData")
  useEffect(() => {
    outputData.changeShowEmptyBlock();
  });

  return (
    <ScrollArea h={400} type='always' offsetScrollbars scrollHideDelay={2000}>
      {freePlacesStore.resultFreePlaces.map((item) => {
        if (item.faculty == null) {
          return (
            <FreePlacesResult
              key={item.id}
              number={item.name}
              facultyName={"-"}
              size={item.size}
              equipments={item.equipments}
            />
          );
        } else {
          return (
            <FreePlacesResult
              key={item.id}
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
});

export default OutputData;
