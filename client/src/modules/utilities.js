function amountFormat(value) {
  return '$ ' + Number(value).toLocaleString();
};
function dateFormat(date) {
  return Date(date).toString().slice(3,10);
};
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
export {amountFormat, dateFormat, capitalizeFirstLetter};
