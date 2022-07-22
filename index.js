const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const offerResponse = require("./response.json");

// cors handling, body parsing

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const list_offers = (req, res) => {
  res.status(200).send(offerResponse);
};

// routing

app.get("/offers", list_offers);
app.listen(port, () => {
  console.log(`a38 mini sales backend is listening on port ${port}`);
});
