import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get('/', AutorController.homePage)
  .get("/autores", AutorController.listarautores)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.deletarAutor)


  export default router;