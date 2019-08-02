let express = require("express");
let app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

let port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
  console.log(`app is running on port ${port}`);
});
