import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const port: any = process.env.PORT

const prisma = new PrismaClient();

const server = fastify();

server.register(cors, {
    //opções
})
server.post('/signup', async(request : any, reply: any) => {
    const puma = await prisma.puma.create({
        data: {
            nome: request.body.nome, 
            caracteristica: request.body.caracteristica,
            vacina: request.body.vacina,
            idade: request.body.idade
        }
      })
    
    return reply.status(201).send(puma);
});

server.get('/search', async(request, reply) => {
    const puma = await prisma.puma.findMany()

    return puma;
})

server.put('/update', async(request: any, reply: any) =>{
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
    })
})

server.delete('/delete/:IdAnimal', async(request: any, reply: any) =>{
    const puma = await prisma.puma.delete({
        where: {
            IdAnimal: request.body.IdAnimal
        }
    })
    return "animal deletado";
}) 

server.listen({ port }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(`servidor está rodando em ${address}`);
    }
});