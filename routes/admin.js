// const path = require("path");

// const express = require("express");

// const rootDir =require("../utilities/path");

// const router = express.Router();

// const products = [];

// router.get("/add-item", (req, res, next) => {
//     res.render("add-item", {docTitle: "Add Item"});
// });

// router.post("/add-item", (req, res, next) => {
//     products.push({title: req.body.title});
//     res.redirect("/");
// });

// exports.router = router;
// exports.products = products;


const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();


router.get("/add-item", productsController.getAddItem);

router.post("/add-item", productsController.postAddItem);

module.exports = router;

// Path: routes/admin.js