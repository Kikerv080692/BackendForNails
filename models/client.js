const { Schema, model } = require("mongoose");
const validationError = require("../helpers/validationError");


const clientSchema = Schema ({
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
      number: {
        type: String,
        required: [true, "number is required"]
      },
      name: {
        type: String,
        required: [true, " name is required"]
      },
      procedures: {
        type: String,
        required: [true, "procedures is required"]
      },
      wishes: {
        type: String,
        default: ''
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }

)
const Client = model('client', clientSchema )
module.exports = Client