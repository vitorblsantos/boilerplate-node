import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'

import { feed, status } from './routes/index.js'

const api = express()

api.use(bodyParser.json())

api.use(cors())

api.use('/feed', feed)
api.use('/status', status)
api.use('/', status)

export default api
