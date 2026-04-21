const express = require('express');
const cors = require('cors');
const { validarCPF } = require('./validadorCPF');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.post('/validar_cpf', (req, res) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(400).json({ error: 'CPF não fornecido.' });
    }

    if (!validarCPF(cpf)) {
        return res.status(422).json({ valido: false, mensagem: 'CPF inválido.' });
    }

    res.json({ valido: true, mensagem: 'CPF válido.' });
});

app.get('/', (req, res) => {
    res.send('API de Validação de CPF rodando.');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});