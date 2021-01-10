const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
