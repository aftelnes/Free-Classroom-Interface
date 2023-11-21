import { Popover, Text, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDotsVertical } from "@tabler/icons-react";
import classes from "../FreePlacesResult/FreePlacesResult.module.css";
import EquipmentValue from "./EquipmentValue";

const Equipment = () => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width={200}
      position='bottom'
      withArrow
      shadow='md'
      opened={opened}
    >
      <Popover.Target>
        <Button
          className={classes.button}
          rightSection={<IconDotsVertical size={15} />}
          variant='default'
          onMouseEnter={open}
          onMouseLeave={close}
        ></Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Text size='sm'>
          <EquipmentValue />
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Equipment;
