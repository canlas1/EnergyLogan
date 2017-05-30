var db = require("../models");

module.exports = function(app) {
  // Find all Projects and return them to the user with res.json
  app.get("/api/projects", function(req, res) {
    db.Project.findAll({}).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  app.get("/api/projects/:id", function(req, res) {
     // Find one Project with the id in req.params.id and return them to the user with res.json
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  app.post("/api/projects", function(req, res) {
     // Create an Project with the data available to us in req.body
    console.log(req.body);
    db.Project.create(req.body).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  app.delete("/api/projects/:id", function(req, res) {
    // Delete the Project with the id available to us in req.params.id
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

};