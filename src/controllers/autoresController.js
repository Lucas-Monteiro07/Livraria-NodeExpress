import autores from '../models/Autor.js';

class AutorController{

    static homePage = (req, res) => {
        res.status(200).send('Curso de Node Express!')
    }

    static listarautores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        });
    }

    static listarautoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) =>{
            if (err){
                res.status(400).send({message: `${err.message} - Id do Autor não localizado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err){
                res.status(500).send({message: `${err} - Não foi possível cadastrar este Autor!`});
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err){
                res.status(200).send({message: 'Autor Atualizado com Sucesso!'})
            } else {
                req.status(500).send({message: `${err.message} - Falha ao atualizar Autor`})
            }
        })

    }

    static deletarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso!'})
            } else {
                res.status(500).send(err.message)
            }
        })
    }

}

    

export default AutorController