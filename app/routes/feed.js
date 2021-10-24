import { Router } from 'express'

import { feed } from '../controllers/index.js'

const router = Router()

router.get('/', feed.get)

export default router
