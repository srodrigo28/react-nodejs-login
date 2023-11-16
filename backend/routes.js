const express = require('express')
const router = express.Router();
const LoginConroller = require('./controllers/userController')


post('/login', (req, res) => {
    const sql = " SELECT * FROM login WHERE email =? AND password =?";

    const values = [
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json('Login failed')
        return res.json(data);
    })
})

get('/login', (req, res) => {
    const sql = " SELECT * FROM login ";

    db.query(sql,(err, data) => {
        if(err) return res.json('Login failed')
        return res.json(data);
    })
})

post('/register', async (req, res) => {
    const sql = "INSERT INTO login(nome, email, senha) VALUES(?, ?, ?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ]

    console.log(sql, values);

    /***
    await db.query(sql, values, (err, data) => {
        if(err) return res.json('Register failed')
        return res.json(data);
    })
    */
})


module.exports = router;