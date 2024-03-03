/**
 * Функция для форматирования даты.
 *
 * @example
 * Примеры использования:
 * const date = formatDate('Fri Feb 16 2024 00:00:00 GMT+0300');
 * store.setDate(formatDate('Fri Feb 16 2024 00:00:00 GMT+0300'));
 *
 * @param date дата из компонента InputDate
 * @returns string в формате "YYYY-MM-DD"
 */
const formatDate = (date: Date) => {
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;

  const res = `${date.getFullYear()}-${month}-${day}`;
  return res;
};

export default formatDate;
