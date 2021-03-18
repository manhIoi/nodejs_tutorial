const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 4000;

const route = require("./routes");
const db = require("./config/db");

// connect to DB

db.connect();

// http logger
// app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

// apply middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
