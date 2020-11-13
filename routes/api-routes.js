const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout.js");

module.exports = function(app) {

app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: 1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


app.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne({"_id": req.params.id}, {$push: {exercise:  req.body}})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });


});

app.post("/api/workouts", (req, res) => {
  let body=req.body;
  Workout.create(body)
  .then(dbTransaction => {
    res.json(dbTransaction);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

};
