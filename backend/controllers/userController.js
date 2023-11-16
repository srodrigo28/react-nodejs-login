import { db } from "../db.js";

/*** */
export const addUser = (req, res) => {

    const q = "INSERT INTO login(`nome`, `email`, `senha`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(values);

        return res.status(200).json("Usuário criado com sucesso");
    });
}

export const getUsers = async (req, res) => {
    const q = "SELECT * FROM login ORDER BY nome";

    await db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const updateUser = (req, res) => {
    // console.log(req.body)
    const q = 
        "UPDATE login SET `nome` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [... values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Atualizado com sucesso")
    })
}

export const deleteUser = (req, res) => {
    const q = "DELETE FROM login WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Removido com sucesso");
    })

}
