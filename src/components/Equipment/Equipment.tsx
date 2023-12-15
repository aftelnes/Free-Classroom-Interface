import { Popover, Text, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDotsVertical } from "@tabler/icons-react";
import { FC } from "react";

import classes from "../FreePlacesResult/FreePlacesResult.module.css";
import EquipmentValue from "./EquipmentValue";
import { IEquipmentProps } from "../../types/types";

const Equipment: FC<IEquipmentProps> = ({ equipments }) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width={180}
      position='bottom'
      zIndex={1}
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
      <Popover.Dropdown style={{ pointerEvents: "none", zIndex: 1 }}>
        <Text size='sm' style={{ zIndex: 1 }}>
          <EquipmentValue equipments={equipments} key={equipments[0].amount} />
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Equipment;
