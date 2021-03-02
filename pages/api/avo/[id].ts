import DB from '@database'
// import { IncomingMessage , ServerResponse } from "http"
import { NextApiRequest, NextApiResponse } from 'next'

const OneAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const idAvo = req.query.id
  const avo = await db.getById(idAvo as string)

  // res.statusCode = 200
  // res.setHeader('Content-type', 'application/json')
  // res.end(JSON.stringify({
  //     data: avo
  // }))

  res.status(200).json({
    data: avo,
  })
}

export default OneAvo
