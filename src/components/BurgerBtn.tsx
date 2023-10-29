import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

function BurgerInfo() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger opened={opened} onClick={toggle} aria-label='Toggle navigation' />
  );
};

export default BurgerInfo;;
