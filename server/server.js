const express = require('express');
const compression = require('compression')
const server = express();

const PORT = process.env.PORT || 5008
server.use(compression())

server.set('view engine', 'pug');
server.set('views', __dirname + '/views');
server.use(express.static(process.cwd() + '/public'));



server.get('*', (req, res) => {
  res.render('index', {pageTitle: 'Some App'});
});

server.listen(PORT, () => {
  console.log('Some App listening on port ' + PORT);
});
