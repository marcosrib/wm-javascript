const http = require('http')
http.createServer((req, res) =>{
 res.write('teste')
 res.end()

}).listen(8080)