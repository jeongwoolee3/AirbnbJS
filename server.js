const express = require("express");
const path = require("path");

const app = express();

// Single page이기 때문에,
// 모든 경로에서 index.html을 불러온다.
app.use('/src',express.static(path.resolve(__dirname, "src")))

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});


app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...")
})