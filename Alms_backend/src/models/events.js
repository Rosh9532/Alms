const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const eventSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 20,
    },

    description: {
      type: String,
      required: true,
    },

    driveSpot: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
    },

    DonatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    foodPoster: [{}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
