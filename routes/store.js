// const path = require("path");

// const express = require("express");

// const rootDir = require("../utilities/path");

// const router = express.Router();
// const adminData = require("./admin");

// router.get("/", (req, res, next) => {
//     console.log("store.js", adminData.products);
//     const products = adminData.products;
//     res.render("store", {
//         prods: products,
//         docTitle: "Prattana,",
//     });
// });

// module.exports = router;


const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;

// Path: routes/admin.js