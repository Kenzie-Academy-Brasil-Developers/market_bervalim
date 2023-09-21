import express from "express";

const app = express();

app.use(express.json());

// Criar e adicionar o produto
app.post("/products");

// Listar todos os produtos:
app.get("/products");

// Listar um produto específico a partir de seu id:
app.get("/products/:id");

// Atualizar os dados a partir do id
app.patch("/products/:id");

// Deletar o produto a partir do id:
app.delete("/products/:id");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API started succesfully on port ${PORT}`);
});
