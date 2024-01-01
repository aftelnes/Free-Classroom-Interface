import { FC } from "react";
import { ScrollArea } from "@mantine/core";

import FreePlacesResult from "../components/FreePlacesResult/FreePlacesResult";
import { observer } from "mobx-react-lite";
import store from "../store/store";

const OutputData: FC = observer(() => {
  console.log("OutputData");

  return (
    <ScrollArea h={400} type='always' offsetScrollbars scrollHideDelay={2000}>
      {store.resultFreePlaces.map((item) => {
        return (
          <FreePlacesResult
            key={item.id}
            number={item.name}
            faculty={item.faculty}
            size={item.size}
            equipments={item.equipments}
          />
        );
      })}
    </ScrollArea>
  );
});

export default OutputData;
