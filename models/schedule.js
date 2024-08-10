const { Schema, model } = require("mongoose");
const validationError = require("../helpers/validationError");

const scheduleDbSchema = Schema(
  {
    days: {
      type: String,
      required: [true, "days is required"],
    },
    hours: {
      type: String,
      required: [true, "hours is required"],
    },
    minutes: {
      type: String,
      required: [true, "minutes is required"],
    },
    month: {
        type: String,
        required: [true, "month is required"],
    },
    booked: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Schedule = model('schedule', scheduleDbSchema)
module.exports = Schedule