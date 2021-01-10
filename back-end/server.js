const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes/router");

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
