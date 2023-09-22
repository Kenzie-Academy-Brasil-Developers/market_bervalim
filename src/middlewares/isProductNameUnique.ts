import { NextFunction, Request, Response } from "express";
import { market } from "../database";

export const isProductNameUnique = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (market.some((product) => product.name === req.body.name)) {
    return res.status(409).json({ message: "Product already registered." });
  }
  return next();
};
