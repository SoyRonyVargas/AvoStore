import DB from '@database'
import { IncomingMessage, ServerResponse } from 'http'

const AllAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB()

  const allEntrys = await db.getAll()
  const length = allEntrys.length

  // res.end('Hi')

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(
    JSON.stringify({
      length,
      data: allEntrys,
    })
  )
}

export default AllAvos
