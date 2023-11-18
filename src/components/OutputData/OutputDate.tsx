import { Table } from "@mantine/core";
import classes from "../styles/OutputDate/OutPutDate.module.css";
// import MenuInfo from "../Menu";

const OutputDate = () => {
  const elements = [
    { id: 1, class: "308н", faculty: "ФМиКН", placesNum: 90 },
    { id: 2, class: "318", faculty: "ФМиКН", placesNum: 20 },
    { id: 3, class: "404", faculty: "ФУП", placesNum: 90 },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td className={classes.class}>{element.class}</Table.Td>
      <Table.Td className={classes.faculty}>{element.faculty}</Table.Td>
      <Table.Td className={classes.placesNum}>
        {element.placesNum}
        {/* <MenuInfo /> */}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className={classes.outputDate}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Аудитория</Table.Th>
          <Table.Th>факультет</Table.Th>
          <Table.Th>Кол-во мест</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default OutputDate;
