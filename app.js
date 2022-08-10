const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const newDate = addDays(new Date(), 100);
  response.send(
    `${newDate.getDate()} /
      ${newDate.getMonth()+1} /
      ${newDate.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
