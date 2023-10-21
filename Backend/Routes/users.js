const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authorizationMiddleware=require('../Middleware/authorizationMiddleware')

// * Get all users
router.get("/",  authorizationMiddleware(['admin']),userController.getAllUsers);

// * Get one user
router.get("/:id", authorizationMiddleware(['admin','customer']), userController.getUser);

// * Update one user
router.put("/:id",  authorizationMiddleware(['admin','customer']),userController.updateUser);

// * Delete one user
router.delete("/:id", authorizationMiddleware(['admin']), userController.deleteUser);

// get shopping cart
router.get("/cart/:id",  authorizationMiddleware(['admin','customer']),userController.getShoppingCart);

//* add to cart
router.put("/addTocart/:id/:productid", authorizationMiddleware(['admin','customer']), userController.addToCart);

//* remove from cart
router.put("/removeFromcart/:id/:productid",  authorizationMiddleware(['admin','customer']), userController.removeFromCart);

//*checkout
router.get("/checkout/:id", authorizationMiddleware(['admin','customer']), userController.checkout);

//------------using router.route()-----------------

// router.route("/").get(userController.getAllUsers);

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .put(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
