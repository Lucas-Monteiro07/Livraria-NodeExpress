import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get('/', LivroController.homePage)
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.buscaLivroEditora)
  .get("/livros/:id", LivroController.listarLivrosPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro)
export default router;