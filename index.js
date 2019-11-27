/*
- localhost:8080 должен переводить пользователей на index.html;

- localhost:8080/about должен перевести пользователей на about.html;

- localhost:8080/contact-me должен перевести пользователей на contact-me.html;

- 404.html должна отображаться каждый раз, когда пользователь пытается перейти на страницу, не указанную выше.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

http
  .createServer((req, res) => {
    let path = req.url;

    function getHTML(path, res) {
      fs.readFile(path, (err, data) => {
        if (!err) {
          res.write(data);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write('404 NOT FOUND!');
        }
        res.end();
      });
    }

    switch (path) {
      case '/':
        getHTML('./index.html', res);
        break;
      case '/index':
        getHTML('./index.html', res);
        break;
      case '/about':
        getHTML('./about.html', res);
        break;
      case '/contact-me':
        getHTML('./contact-me.html', res);
        break;
      default:
        getHTML('./404.html', res);
        break;
    }
  })
  .listen(8080);
