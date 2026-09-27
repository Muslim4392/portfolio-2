const http = require('http')
const fs = require('fs')
const path = require('path')

const root = __dirname
const port = 4173
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.png': 'image/png' }

const server = http.createServer((request, response) => {
  const requested = request.url === '/' ? '/preview.html' : request.url.split('?')[0]
  const filePath = path.join(root, requested)
  if (!filePath.startsWith(root) || !fs.existsSync(filePath)) {
    response.writeHead(404)
    response.end('Not found')
    return
  }
  response.writeHead(200, { 'Content-Type': mime[path.extname(filePath)] || 'text/plain' })
  fs.createReadStream(filePath).pipe(response)
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio live at http://localhost:${port}`)
})
