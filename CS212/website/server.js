const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

const { getTemplate } = require('./public/cs212/homework/8/template.js');

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

server.post('/cs212/homework/8', (req, res) => {
  const { place, adj, verb, food, things, profession, thing, color, celebrity, animal } = req.body;

  const sendString = `
    There once was a gingerbread man who had two ${things} for eyes and a ${food} for a nose.<br> He always said, '${verb} as fast as you can, you can't catch me I'm the gingerbread man.'<br> One day he ran past a ${adj} ${profession}, but they couldn't catch him. He kept running until he passed a ${animal}, but they couldn't catch him either.<br> Suddenly, he came across a river near ${place}. How would he cross?<br> Then he saw a ${color} ${thing} floating by. He jumped on it, but it was actually ${celebrity}--who just so happened to love cookies :)
    `;

    res.send(getTemplate(sendString));
})


// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))
