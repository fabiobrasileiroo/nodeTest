const express = require('express');
const app = express();
const port = 3000;

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // Rota GET para listar todos os itens
    server.route({
        method: 'GET',
        path: '/api/items',
        handler: (request, h) => {
            return { message: 'Listando todos os itens' };
        }
    });

    // Rota POST para criar um novo item
    server.route({
        method: 'POST',
        path: '/api/items',
        handler: (request, h) => {
            const newItem = request.payload;
            return { message: 'Item criado', item: newItem };
        }
    });

    // Rota PUT para atualizar um item
    server.route({
        method: 'PUT',
        path: '/api/items/{id}',
        handler: (request, h) => {
            const id = request.params.id;
            const updatedItem = request.payload;
            return { message: `Item ${id} atualizado`, item: updatedItem };
        }
    });

    // Rota DELETE para remover um item
    server.route({
        method: 'DELETE',
        path: '/api/items/{id}',
        handler: (request, h) => {
            const id = request.params.id;
            return { message: `Item ${id} deletado` };
        }
    });

    await server.start();
    console.log('Servidor rodando em %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
