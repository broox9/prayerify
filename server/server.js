const express = require("express");
const compression = require("compression");
const server = express();
// const db = require("./db");

// db
//   .authenticate()
//   .then(r => {
//     console.log("Connection successful", r);
//     const verse = db
//       .findOne({
//         where: { book: 4, chapter: 4, verse: 4 },
//         attributes: ["text"]
//       })
//       .then(v => console.log("VERSE", v))
//       .catch(err => console.log("Could not get Verse", err));
//   })
//   .catch(err => console.log("Unable to connect", err));

const PORT = process.env.PORT || 5008;
server.use(compression());

server.set("view engine", "pug");
server.set("views", __dirname + "/views");
server.use(express.static(process.cwd() + "/public"));

server.get("*", (req, res) => {
  res.render("index", { pageTitle: "Some App" });
});

server.listen(PORT, () => {
  console.log("Some App listening on port " + PORT);
});
