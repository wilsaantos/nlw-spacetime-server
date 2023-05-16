import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app.listen({ port: 8080 }).then(() => {
  console.log('🚀 Server Running on http://localhost:8080')
})
