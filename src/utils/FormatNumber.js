export default (number) => {
  const formatNumbering = number.toString().replace(/\B(?<!,\d*)(?=(\d{3})+(?!\d))/g, ",");
  return formatNumbering;
};
