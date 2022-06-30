/* node core modules */
import http from 'http'
import fs from 'fs'

const port = process.env.PORT || 4300
const url = 'localhost'

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      throw err
    }

    res.write(data)
    res.end()
  })
})

server.listen(port, url, () => {
  try {
    console.log(`server connected on port ${port}`)
  } catch (err) {
    console.error(err)
  }
})
