const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const storeRouter = require("./routes/store");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData);
app.use(storeRouter);

app.use((req, res) => {
    res.status(404).render("404-error", { docTitle: "Page Not Found" });
});

app.listen(3000);


// Path: app.js