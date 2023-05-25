"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const port = process.env.PORT;
const prisma = new client_1.PrismaClient();
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
//opções
});
server.post('/signup', async (request, reply) => {
    const puma = await prisma.puma.create({
        data: {
            nome: request.body.nome,
            caracteristica: request.body.caracteristica,
            vacina: request.body.vacina,
            idade: request.body.idade
        }
    });
    return reply.status(201).send(puma);
});
server.get('/search', async (request, reply) => {
    const puma = await prisma.puma.findMany();
    return puma;
});
server.put('/update', async (request, reply) => {
    const IdAnimal = await prisma.puma.update({
        where: {
            IdAnimal: request.body.IdAnimal
        },
        data: {
            nome: request.body.nome,
            caracteristica: request.body.caracteristica,
            vacina: request.body.vacina,
            idade: request.body.idade
        }
    });
});
server.delete('/delete/:IdAnimal', async (request, reply) => {
    const puma = await prisma.puma.delete({
        where: {
            IdAnimal: request.body.IdAnimal
        }
    });
    return "animal deletado";
});
server.listen({ port }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    else {
        console.log(`servidor está rodando em ${address}`);
    }
});
