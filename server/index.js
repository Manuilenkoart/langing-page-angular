const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "../dist/landing-page-angular")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname,"../dist/landing-page-angular/index.html")));
});

const PORT =process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
