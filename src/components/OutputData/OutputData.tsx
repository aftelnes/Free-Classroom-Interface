import { FC, useState } from "react";
import { ScrollArea } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { IPlacesFree } from "../../types/types";
import getPlacesFree from "../../helpers/requests/getFreePlaces";
import FreePlacesResult from "../FreePlacesResult/FreePlacesResult";
import outputData from "../../store/outputData";

const OutputData: FC = () => {
  const [freePlacesResp, setFreePlacesResp] = useState<IPlacesFree[]>([]);

  (async function setFreePlacesState() {
    setFreePlacesResp(await getPlacesFree<IPlacesFree[]>());
    // Меняем состояние показа пустого блока, который показывается пока пользотель ничего не выбрал
    outputData.changeShowEmptyBlock();
  })();

  return (
    <div>
      <ScrollArea h={350} type='always' offsetScrollbars scrollHideDelay={1500}>
        {freePlacesResp.map((item) => {
          if (item.faculty == null) {
            return (
              <FreePlacesResult
                name={item.name}
                facultyName={"-"}
                size={item.size}
                equipments={item.equipments}
              />
            );
          } else {
            return (
              <FreePlacesResult
                name={item.name}
                facultyName={item.faculty.short_name}
                size={item.size}
                equipments={item.equipments}
              />
            );
          }
        })}
      </ScrollArea>
    </div>
  );
};

export default OutputData;
