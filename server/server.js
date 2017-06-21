const express = require('express');
const server = express();

server.set('view engine', 'pug');
server.set('views', __dirname + '/views');
server.use(express.static(process.cwd() + '/public'));

server.get('/', (req, res) => {
  res.render('index', {pageTitle: 'Some App'});
});

server.listen(5008, () => {
  console.log('Some App listening on port 5008');
});
