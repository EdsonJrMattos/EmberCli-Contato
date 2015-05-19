module.exports = function(app) {
  var express = require('express');
  var contatoRouter = express.Router();

  contatoRouter.get('/', function(req, res) {
    res.send({
      'contato': [{
        id: 1,
        name: 'edson',
        phone: '0x(46) 9931-6757',
        email: 'edsonjuniortdeveloper@gmail.com'
      }]
    });
  });

  contatoRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  contatoRouter.get('/:id', function(req, res) {
    res.send({
      'contato': {
        id: req.params.id
      }
    });
  });

  contatoRouter.put('/:id', function(req, res) {
    res.send({
      'contato': {
        id: req.params.id
      }
    });
  });

  contatoRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/contatos', contatoRouter);
};
