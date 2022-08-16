import * as express from "express"

const homeController = {
   index: (_req: express.Request, res: express.Response) =>{
      return res.status(200).json("Servidor Rodando express + TS "+ new Date() )
  }
}

export default homeController