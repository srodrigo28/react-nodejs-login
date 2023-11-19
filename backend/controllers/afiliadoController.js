import { db } from "../db.js";

//
export const addAfiliado = (req, res) => {
    const q = "INSERT INTO afiliados(`nome`, `email`, `cpf`, `cep`, `uf`, `bairro`, `logradouro`, `complemento`, `nTitulo`, `dataNasc`, `zona`, `secao`) VALUES(?) "

    const values = [
        req.body.uf,
        req.body.cpf,
        req.body.cep,
        req.body.nome,
        req.body.zona,
        req.body.email,
        req.body.secao,
        req.body.bairro,
        req.body.nTitulo,
        req.body.dataNasc,
        req.body.logradouro,
        req.body.complemento,
    ]

    db.query(q, [values], (err) => {
        return res.status(200).json("Afiliado criado com sucesso")
    })

}