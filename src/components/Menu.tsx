import { Menu, Button, Text, rem } from "@mantine/core";
import BurgerInfo from "./BurgerBtn";
import { Burger } from "@mantine/core";
import classes from "../styles/DropdownMenu/DropdownMenu.module.css";

import { IconAdjustments, IconMenu2 } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

function MenuInfo() {
  return (
    <Menu shadow='md' width={200}>
      <Menu.Target>
        {/* <Button>Toggle menu</Button> */}
        {/* <Burger /> */}
        <ActionIcon
          variant='default'
          aria-label='Settings'
          className={classes.actionIcon}
        >
          <IconMenu2 style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown className={classes.dropdownMenu} w={140}>
        <Menu.Label className={classes.label}>Оснащение</Menu.Label>
        <Menu.Item className={classes.item}>КОМПЬЮТЕРЫ: </Menu.Item>
        <Menu.Item className={classes.item}>ПРОЕКТОР: </Menu.Item>
        <Menu.Item className={classes.item}>МАРКЕРНАЯ ДОСКА:</Menu.Item>
        <div>проверочка</div>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MenuInfo;
