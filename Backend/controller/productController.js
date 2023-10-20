const productModel = require("../Models/productModel");



const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await productModel.find();
      return res.status(200).json(products);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  createProduct: async (req, res) => {
    const product = new productModel({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    try {
      const newProduct = await product.save();
      return res.status(201).json(newProduct);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = await productModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res
        .status(200)
        .json({ product, msg: "Product updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await productModel.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .json({ product, msg: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = productController;
