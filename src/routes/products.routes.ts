import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProductById,
  updatePartialProduct,
  deleteProductById,
} from "../logics";
import { isProductIdValid } from "../middlewares/isProductIdValid";
import { isProductNameUnique } from "../middlewares/isProductNameUnique";

export const productRouter = Router();

productRouter.post("/", isProductNameUnique, createProduct);

productRouter.get("/", getAllProducts);

productRouter.get("/:id", isProductIdValid, getOneProductById);

productRouter.patch(
  "/:id",
  isProductIdValid,
  isProductNameUnique,
  updatePartialProduct
);

productRouter.delete("/:id", isProductIdValid, deleteProductById);
