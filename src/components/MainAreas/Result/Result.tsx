import { FC } from "react";
import { ScrollArea } from "@mantine/core";

import FreePlaces from "./FreePlacesResult/FreePlaces";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";

const Result: FC = observer(() => {
  return (
    <ScrollArea
      h={400}
      type="always"
      scrollbarSize={10}
      scrollHideDelay={2000}
      styles={(theme) => ({
        scrollbar: {
          '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
            backgroundColor: theme.colors.blue[6],
          },
        },
      })}
    >
      {store.resultFreePlaces.map((item) => {
        return (
          <FreePlaces
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

export default Result;
