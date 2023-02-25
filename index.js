let addDays = require("date-fns/addDays");

function fun(day) {
  const result = addDays(new Date(2020, 7, 22), day);
  const d = `${result.getDate()}-${
    result.getMonth() + 1
  }-${result.getFullYear()}`;
  return d;
}

module.exports = fun;
