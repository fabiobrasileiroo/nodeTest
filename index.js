const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para permitir JSON no body das requisições

app.get('/', (req, res) => {
    res.send('Olá, mundo! Bem-vindo à minha API');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
// Rota GET para buscar dados
app.get('/api/items', (req, res) => {
    res.json({ message: 'Listando todos os itens' });
});

// Rota POST para criar um novo item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.json({ message: 'Item criado', item: newItem });
});

// Rota PUT para atualizar um item existente
app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    res.json({ message: `Item ${id} atualizado`, item: updatedItem });
});

// Rota DELETE para remover um item
app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Item ${id} deletado` });
});
