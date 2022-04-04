import { Router, Request, Response } from 'express'
import studentController from './controllers/studentController'

const route = Router()

route.get('/', studentController.getAll)
route.post('/register', studentController.register)

export default route
