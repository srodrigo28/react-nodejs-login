const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cadastro',
})

app.post('/login', (req, res) => {
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

app.get('/login', (req, res) => {
    const sql = " SELECT * FROM login ";

    db.query(sql,(err, data) => {
        if(err) return res.json('Login failed')
        return res.json(data);
    })
})

app.post('/register', async (req, res) => {
    const sql = "INSERT INTO login(nome, email, senha) VALUES(?, ?, ?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha
    ]
    await db.query(sql, [values], (err, data) => {
        if(err) return res.json('Register failed')
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Servidor rodando")
})