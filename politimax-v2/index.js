const express = require('express');
const Users = require('./models/User.js')

const app = express();

require('dotenv').config()

app.use(express.json());

app.post( "/users", async (req, res) => {
    await Users.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            message: "Inserido com sucesso"
        });
    })
    .catch( (error) => {
        return res.json({
            erro: true,
            code: error,
            message: "Erro não foi possivel gravar dados consulte o dev"
    });

    })
})

app.get("/users", async (_, res) => {
    await Users.findAll()
    .then((users) => {
        return res.json({
            erro: false,
            users
        })
    })
    .catch( (err) => {
        return res.json({
            erro: true,
            code: err,
            message: 'Error :( tente falar com o dev',

        })
    })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log('server is listening: ' + process.env.SERVER_PORT)
});