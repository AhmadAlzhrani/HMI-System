const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 5000;

app.use(bodyParser.json());

app.post("/order", (req, res) => {
  const receivedData = req.body;
  console.log("Received data:", receivedData);
  res.json({ message: "Data received successfully!" });
});

app.get("/data", (req, res) => {
  res.json({ ingredients: ["brost", "bskon", "b6a6es", "aseer"] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
