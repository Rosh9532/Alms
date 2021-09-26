const express = require("express");
const {
  createEvent,
  getEvents,
  deleteEventbyId,
} = require("../controller/events");
const { requireSignin } = require("../middlewares");
const router = express.Router();
const upload = require("../uploads/multer");

router.post(
  "/event/create",
  requireSignin,
  upload.array("foodPoster"),
  createEvent
);
router.get("/event/getevent", getEvents);
router.post("/event/delete/:id", deleteEventbyId);

module.exports = router;
