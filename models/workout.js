const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
  exercise: {
    type: Array,
    default: []
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
