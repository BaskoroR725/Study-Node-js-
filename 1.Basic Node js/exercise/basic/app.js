const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write('<html>');
      res.write('<head><title>My Page</title><head>');
      res.write('<body><h1>Hello World!!!</h1></body>');
      res.write('<body><label for="username">Username</label></body>');
      res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>'
      );
      res.write('</html>');
      return res.end();
      }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>My Page</title><head>');
    res.write('<body><ul><li>User1</li></ul></body>');
    res.write('<body><ul><li>User2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/create-user');
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});


server.listen(3000);
