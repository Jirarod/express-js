const Product = require('../models/product');

exports.getAddItem = (req, res, next) => {
    res.render("add-item", {
        docTitle: "Add Item",
        formCSS: true,
        activeAddItem: true,
        path: "/admin/add-item",
    });
};

exports.postAddItem = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("store", {
            prods: products,
            docTitle: "Prattana",
            productCSS: true,
            hasProduct: products.length > 0,
            activeShop: true,
            path: "/",
        });
    });
};

// Path : controllers/products.js