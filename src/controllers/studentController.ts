import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

async function register(req: Request, res: Response) {
  try {
    const student = await prisma.student.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
      },
    })

    return res.status(201).json({ msg: 'Cadastrado!!', student })
  } catch (error) {
    return res.status(400).send({ mdg: 'ERRO!!!!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const student = await prisma.student.findMany()

    return res.status(200).send(student)
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

export default { register, getAll }
