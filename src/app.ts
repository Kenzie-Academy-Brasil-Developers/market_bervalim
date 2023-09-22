import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getOneProductById,
  updatePartialProduct,
} from "./logics";
import { isProductNameUnique } from "./middlewares/isProductNameUnique";
import { isProductIdValid } from "./middlewares/isProductIdValid";

const app = express();

app.use(express.json());

app.post("/products", isProductNameUnique, createProduct);

app.get("/products", getAllProducts);

app.get("/products/:id", isProductIdValid, getOneProductById);

app.patch(
  "/products/:id",
  isProductIdValid,
  isProductNameUnique,
  updatePartialProduct
);

app.delete("/products/:id", isProductIdValid, deleteProductById);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API started succesfully on port ${PORT}`);
});
