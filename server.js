/* node core modules */
import http from 'http'
import { readFile } from 'fs'
import path from 'path'
const port = parseInt(process.env.PORT) || 4300
const url = 'localhost'

const client = `${path.resolve()}/index.html`

const server = http.createServer((req, res) => {
  readFile(client, (err, data) => {
    res.write(data)
    return res.end()
  })
})

server.listen(port, url, () => {
  try {
    console.log(`server connected on port ${port}`)
  } catch (err) {
    console.error(err)
  }
})
