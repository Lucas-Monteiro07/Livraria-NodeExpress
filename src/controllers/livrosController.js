import livros from "../models/Livro.js";

class LivroController {
  static homePage = (req, res) => {
    res.status(200).send("Curso de Node Express!");
  };

  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor", "nome")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static listarLivrosPorId = (req, res) => {
    const id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id do livro não localizado` });
        } else {
          res.status(200).send(livros);
        }
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err} - Não foi possível cadastrar este livro!` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro Atualizado com Sucesso!" });
      } else {
        req
          .status(500)
          .send({ message: `${err.message} - Falha ao atualizar livro` });
      }
    });
  };

  static deletarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com sucesso!" });
      } else {
        res.status(500).send(err.message);
      }
    });
  };

  static buscaLivroEditora = (req, res) => {
    const editora = req.query.editora

    livros
    .find({'editora': editora}, {}, (err, livros) => {
      res.status(200).send(livros);
    })
    .populate("autor", "nome")
  }
}

export default LivroController;
