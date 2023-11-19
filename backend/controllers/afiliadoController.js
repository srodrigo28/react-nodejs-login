import { db } from "../db.js";

//
export const addAfiliado = (req, res) => {
    const q = "INSERT INTO afiliados( `id_gestor`, `nome`, `email`, `cpf`, `cep`, `uf`, `bairro`, `logradouro`, `complemento`, `nTitulo`, `dataNasc`, `zona`, `secao`) VALUES(?) "

    const values = [
        req.body.id_gestor,
        req.body.nome,
        req.body.email,
        req.body.cpf,
        req.body.cep,
        req.body.uf,
        req.body.bairro,
        req.body.logradouro,
        req.body.complemento,
        req.body.nTitulo,
        req.body.dataNasc,
        req.body.zona,
        req.body.secao,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Afiliado criado com sucesso")
    })

}

export const getAfiliados = (req, res) => {
    const q = "SELECT * FROM afiliados"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const getAfiliadosCount = (req, res) => {
    const q = "SELECT * FROM afiliados WHERE id_gestor = ?";

    db.query(q, [req.body.id_gestor], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}