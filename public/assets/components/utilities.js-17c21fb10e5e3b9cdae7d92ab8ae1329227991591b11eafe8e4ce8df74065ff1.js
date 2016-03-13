var amountFormat = function amountFormat(value) {
  return '$ ' + Number(value).toLocaleString();
};
var dateFormat = function dateFormat(date) {
  return Date(date).toString().slice(3, 10);
};
var capitalizeFirstLetter = function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
