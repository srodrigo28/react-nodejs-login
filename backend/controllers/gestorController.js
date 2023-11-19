import { db } from "../db.js";

// Create
export const addGestor = (req, res) => {
    const q = "INSERT INTO gestor(`nome`, `email`, `telefone`, `senha`) VALUES(?)"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.senha
    ]

    db.query(q, [values], (err) => {
        return res.status(200).json("Gestor criado com sucesso")
    })

}

// Read
export const getGestor = (_, res) => {
    const q = "SELECT * FROM gestor"

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

// Read One
export const getOneGestor = async (req, res) => {
    const q = "SELECT id FROM gestor WHERE `id` = ?"

    await db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

// Update
export const updateGestor = (req, res) => {
    const q = "UPDATE gestor SET `nome` = ?, `email` = ?, `telefone` = ?, `senha` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.senha
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Atualizado com sucesso")
    })
}

// Delete
export const deleteGestor = (req, res) => {
    const q = "DELETE FROM gestor WHERE `id` = ?"

    db.query(q, [... req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Removido com sucesso")
    })
}