import { Popover, Text, Button } from "@mantine/core";
import { HoverCard, Group } from "@mantine/core";
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
      width={170}
      position='top'
      // withArrow
      zIndex={1}
      shadow='md'
      middlewares={{ flip: false, shift: true, inline: false }}
      opened={opened}>
      <Popover.Target>
        <Button
          className={classes.button}
          rightIcon={<IconDotsVertical size={15} />}
          // rightSection={<IconDotsVertical size={15} />}
          variant='default'
          onMouseEnter={open}
          onMouseLeave={close}></Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none", zIndex: 1 }}>
        <Text size='sm' style={{ zIndex: 1 }}>
          <EquipmentValue equipments={equipments} />
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Equipment;
