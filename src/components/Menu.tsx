import { Menu, Button, Text, rem } from "@mantine/core";
import BurgerInfo from "./BurgerBtn";
import { Burger } from "@mantine/core";
import classes from "./DropdownMenu/DropdownMenu.module.css";

import { IconAdjustments, IconMenu2 } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

const MenuInfo: React.FC = () => {
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

      <Menu.Dropdown className={classes.dropdownMenu} w={125}>
        <Menu.Label className={classes.label}>Оснащение</Menu.Label>\
        //! Убрать меню, потому что тут нет в нём смысла
        {/* <Menu.Item className={classes.item}>КОМПЬЮТЕРЫ: </Menu.Item>
        <Menu.Item className={classes.item}>ПРОЕКТОР: </Menu.Item>
        <Menu.Item className={classes.item}>МАРКЕРНАЯ ДОСКА:</Menu.Item> */}
        <div className={classes.div}>КОМПЬЮТЕРЫ: 22</div>
        <div className={classes.div}>ПРОЕКТОР: 1</div>
        <div className={classes.div}>МАРКЕРНАЯ ДОСКА: 2</div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuInfo;
