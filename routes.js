var todo = require('./models/todo');


module.exports = {
  configure: function(app) {

    app.get('/todo/', function(req, res) {
      todo.todoGet(res);
    });

    app.post('/todo/', function(req, res) {
      todo.todoCreate(req.body, res);
    });

    app.put('/todo/:id', function(req, res) {
      todo.todoUpdate(req.body, req.params.id, res);
    });

    app.delete('/todo/:id/', function(req, res) {
      todo.todoDelete(req.params.id, res);
    });

      app.get('/specific:id/', function(req, res) {
          todo.todoGetSpecCategory(reg.params.id, res);
      });

      app.get('/todocategory/', function(req, res) {
          todo.todoGetCategory(res);
      });

      app.get('/category/', function(req, res) {
          todo.getCategory(res);
      });
  }
};
