import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getOneProductById,
  updatePartialProduct,
} from "./logics";
import { isProductIdValid, isProductNameUnique } from "./middlewares";

const app = express();

app.use(express.json());

// Criar e adicionar o produto
app.post("/products", isProductNameUnique, createProduct);

// Listar todos os produtos:
app.get("/products", getAllProducts);

// Listar um produto específico a partir de seu id:
app.get("/products/:id", isProductIdValid, getOneProductById);

// Atualizar os dados a partir do id
app.patch(
  "/products/:id",
  isProductIdValid,
  isProductNameUnique,
  updatePartialProduct
);

// Deletar o produto a partir do id:
app.delete("/products/:id", isProductIdValid, deleteProductById);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API started succesfully on port ${PORT}`);
});
