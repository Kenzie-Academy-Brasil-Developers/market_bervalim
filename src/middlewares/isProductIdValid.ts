import { NextFunction, Request, Response } from "express";
import { market } from "../database";

export const isProductIdValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!market.some((product) => product.id === Number(req.params.id))) {
    return res.status(404).json({ message: "Product not found." });
  }
  return next();
};
