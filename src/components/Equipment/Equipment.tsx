import { Popover, Text, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDotsVertical } from "@tabler/icons-react";
import { FC } from "react";

import classesEquipValue from "./EquipmentValue.module.css";
import classes from "../FreePlacesResult/FreePlacesResult.module.css";
import { IEquipmentProps } from "../../types/types";

const Equipment: FC<IEquipmentProps> = ({ equipments }) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width={180}
      position='bottom'
      withinPortal
      shadow='md'
      middlewares={{ flip: false, shift: true, inline: false }}
      opened={opened}>
      <Popover.Target>
        <Button
          className={classes.button}
          rightIcon={<IconDotsVertical size={25} />}
          variant='default'
          onMouseEnter={open}
          onMouseLeave={close}></Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Text size='sm'>
          {/* Блок отвечающий за выпадающее окошко со списоком оснашения */}
          <div className={classesEquipValue.equipmentValue}>
            <h5 className={classesEquipValue.Header}>Оснащение</h5>
            {equipments.map((item) => (
              <div key={item.equipment.id}>
                {item.equipment.name} :{item.amount}
              </div>
            ))}
          </div>
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Equipment;
