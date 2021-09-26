const Event = require("../models/events");
const cloudinary = require("../uploads/cloudinary");
const fs = require("fs");

exports.createEvent = async (req, res) => {
  const { Name, description, address, city, district, postalCode } = req.body;

  const uploader = async (path) => await cloudinary.uploads(path, "Images");

  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await uploader(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }
  console.log(urls);

  const event = new Event({
    Name,
    description,
    driveSpot: { address, city, district, postalCode },
    DonatedBy: req.user._id,
    foodPoster: urls,
  });

  event.save((err, event) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Error",
      });
    }
    if (event) {
      return res.status(201).json({
        event,
      });
    }
  });
};

exports.getEvents = (req, res) => {
  Event.find({})
    .populate("DonatedBy", "Name phoneNo email")
    .exec((err, events) => {
      if (err) {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
      if (events) {
        return res.status(201).json({
          events,
        });
      }
    });
};

exports.deleteEventbyId = (req, res) => {
  const eventId = req.params.id;
  if (eventId) {
    Event.deleteOne({ _id: eventId }).exec((err, result) => {
      if (err) {
        return res.status(200).json({ err });
      }
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(500).json({ error: "Params required" });
  }
};
