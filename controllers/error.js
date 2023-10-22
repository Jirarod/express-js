exports.getError = (req, res, next) => {
    res.status(404).render('404-error',{doTitle: 'Page Not Found',path: ''})
};

// Path: controllers/products.js