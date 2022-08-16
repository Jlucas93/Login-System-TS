import { Router } from 'express';
import homeController from '../Controllers/HomeContreoller'

const homeRoutes = Router()

homeRoutes.get('/',homeController.index)

export default homeRoutes