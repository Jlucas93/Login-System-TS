import express from 'express'
import session from 'express-session'
import cors from 'cors'
import homeRoute from './Routes/HomeRoute'

const app  = express()
const port = 3001


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(session({
  secret: 'sesseionTS',
  resave: false,
  saveUninitialized: false,
  /* cookie: { maxAge: 60000 * 0.5 } */
}))

app.use(homeRoute)

app.listen(port, () => console.log('Server started on port ' + port))