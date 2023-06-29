import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
import initAPIRoute from "./routes/api";
// import connection from "./configs/connectDB";

require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);

app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Connected!!! at: ${port}`);
});
