import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

async function register(req: Request, res: Response) {
  try {
    const classes = await prisma.class.create({
      data: {
        title: req.body.title,
        professor: req.body.professor,
      },
    })

    return res.status(201).json({ msg: 'Cadastrado!!', classes })
  } catch (error) {
    return res.status(400).send({ mdg: 'ERRO!!!!' })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const classe = await prisma.class.findMany()

    return res.status(200).send(classe)
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

export default { register, getAll }
