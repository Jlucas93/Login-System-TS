import { RequestHandler } from "express"
import bcrypt from 'bcrypt'

const userController: { [method: string]: RequestHandler } = {
  create: (req, res) => {
    const {
      id,
      name,
      lastName,
      email,
      password,
    } = req.body
    try {
      const passwordHash = bcrypt.hash(password, 13)

      const newUser = {
        id,
        name,
        lastName,
        email,
        password: passwordHash,
      }
      return res.status(200).json("Usuário Criado")
    } catch (error) {
      console.log(error)
      return res.status(500).json("erro ao criar usuário")
    }

  }
}

export default userController