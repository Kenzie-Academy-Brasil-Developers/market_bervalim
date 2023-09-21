import { Request, Response } from "express";
import { market } from "./database";
import { Product } from "./interfaces";

let id = 1;
export const createProduct = (req: Request, res: Response) => {
  const currentDate = new Date();

  currentDate.setFullYear(currentDate.getFullYear() + 1);

  const newProduct: Product = {
    id: id,
    ...req.body,
    expirationDate: currentDate,
  };
  id++;

  market.push(newProduct);

  return res.status(201).json(newProduct);
};
