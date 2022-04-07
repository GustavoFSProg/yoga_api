import { Router, Request, Response } from 'express'
import ClassController from './controllers/ClassController'
import studentController from './controllers/studentController'

const route = Router()

route.get('/', studentController.getAll)
route.post('/register', studentController.register)

route.get('/class', ClassController.getAll)
route.post('/register-class', ClassController.register)

export default route
