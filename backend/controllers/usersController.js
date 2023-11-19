import { db } from "../db.js";

/*** Validando email e Senha */
export const usersLogin = (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND senha = ?";

    db.query(sql, [req.body.email, req.body.senha], (err, data) => {
        if(err) return res.json("Erro 1");
        if(data.length > 0 ){
            return res.json( "success" );    
        }else{
            return res.json("Erro: Api Usuário ou senha");    
        }
    })
}

/** Inserindo um Usuário */
export const addUser = (req, res) => {

    const q = "INSERT INTO login(`nome`, `email`, `senha`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, [values], (err) => {
        // if (err) return res.json(values);

        return res.status(200).json("Usuário criado com sucesso");
    });
}

/*** Listando todos usuários */
export const getUsers = async (req, res) => {
    const q = "SELECT * FROM login ORDER BY nome";

    await db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    });
};

/*** Listando somente 1 */
export const getOneUser = async (req, res) => {
    const q = "SELECT id FROM login WHERE `id` = ?";

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
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
