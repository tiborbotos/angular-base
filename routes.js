(function() {
  var nextId = 0;
  var people = [
    {
      "id": "" + (nextId++),
      "name": "Saasha",
      "age": "6"
    }, {
      "id": "" + (nextId++),
      "name": "Planet",
      "age": "8"
    }
  ];

  var isUniqueName = function(name) {
    var result = people.filter(function(person) {
      return person.name === name;
    });
    return result.length === 0;
  };

  module.exports = function(app, options) {
    app.get('/', function(req, res) {
      return res.render("" + options.base + "/index.html");
    });
    app.get('/people', function(req, res) {
      return res.json(people);
    });
    app.post('/people', function(req, res) {
      var age, message, name, person;
      name = req.body.name;
      age = req.body.age;
      message = {
        "title": "Duplicate!",
        "message": "" + name + " is a duplicate.  Please enter a new name."
      };
      if (!isUniqueName(name)) {
        return res.send(message, 403);
      }
      person = {
        "id": "" + (nextId++),
        "name": "" + name,
        "age": "" + age
      };
      people.push(person);
      return res.json(person);
    });
    return app.get('/people/:id', function(req, res) {
      var id = req.params.id;
      var current = people.filter(function(person)  {
        return person.id === id;
      });
      return res.json(current || null);
    });
  };

}).call(this);
