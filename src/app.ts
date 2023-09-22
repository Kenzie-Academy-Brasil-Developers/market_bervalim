import express from "express";
import { productRouter } from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use("/products", productRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API started succesfully on port ${PORT}`);
});
