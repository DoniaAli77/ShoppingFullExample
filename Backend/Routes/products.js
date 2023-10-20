const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const authorizationMiddleware = require("../Middleware/authorizationMiddleware");

// * Get all products
router.get("/",authorizationMiddleware(['admin','customer']), productController.getAllProducts);

// * Get one product
router.get("/:id", authorizationMiddleware(['admin','customer']),productController.getProduct);

// * Create one product
router.post("/", authorizationMiddleware(['admin','customer']),productController.createProduct);

// * Update one product
router.put("/:id", authorizationMiddleware(['admin']),productController.updateProduct);

// * Delete one product
router.delete("/:id",authorizationMiddleware(['admin']), productController.deleteProduct);

//-----------using router.route()-----------------

// router
//   .route("/")
//   .get(productController.getAllProducts)
//   .post(authorizationMiddleware(['admin']),productController.createProduct);

// router
//   .route("/:id")
//   .get(getProduct)
//   .put(authorizationMiddleware(['admin']),productController.updateProduct)
//   .delete(authorizationMiddleware(['admin']),productController.deleteProduct);

module.exports = router; // ! Don't forget to export the router
