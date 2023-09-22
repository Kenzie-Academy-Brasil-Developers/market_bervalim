import { Request, Response } from "express";
import { market } from "./database";
import { Product } from "./interfaces";

let id = 1;
export const createProduct = (req: Request, res: Response) => {
  const currentDate = new Date();

  currentDate.setFullYear(currentDate.getFullYear() + 1);

  const newProduct = {
    id: id,
    ...req.body,
    expirationDate: currentDate,
  };
  id++;

  market.push(newProduct);

  return res.status(201).json(newProduct);
};

export const getAllProducts = (req: Request, res: Response) => {
  const total = market.reduce((acc, product) => acc + product.price, 0);
  return res.status(200).json({ total: total, products: market });
};

export const getOneProductById = (req: Request, res: Response) => {
  const oneProduct = market.find(
    (product) => product.id === Number(req.params.id)
  );
  return res.status(200).json(oneProduct);
};

export const updatePartialProduct = (req: Request, res: Response) => {
  const oneProduct = market.find(
    (product) => product.id === Number(req.params.id)
  );

  let productBody: Partial<Product> = {};

  Object.entries(req.body).forEach((entries) => {
    const [key, value] = entries;

    if (
      key === "name" ||
      key === "price" ||
      key === "weight" ||
      key === "calories"
    ) {
      productBody[key] = value;
    }
  });
  const newProduct = { ...oneProduct, ...productBody };
  const index = market.findIndex(
    (product) => product.id === Number(req.params.id)
  );
  market.splice(index, 1, newProduct as Product);

  return res.status(200).json(newProduct);
};

export const deleteProductById = (req: Request, res: Response) => {
  const index = market.findIndex(
    (product) => product.id === Number(req.params.id)
  );
  market.splice(index, 1);
  return res.status(204).send();
};
