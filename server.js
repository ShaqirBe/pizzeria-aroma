const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const pages = require("./routes/pages");
app.use("/", pages);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});