const http = require('http')
console.log(http)
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
    return
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
    return
  }
  res.end(`
  <h1>Oops!, we cant seem to find the page you are looking for</h1>`)
})

server.listen(5000)
