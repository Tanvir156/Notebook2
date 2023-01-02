const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  createAnnouncment,
  listAnnouncment,
  listAnnouncmentown,
} = require("../controllers/announcementController");
router.route("/create").post(protect, createAnnouncment);
router.route("/get").get(listAnnouncment);
router.route("/get/own").get(protect, listAnnouncmentown);
// router
//   .route("/:id")
//   .get(getNoteById)
//   .put(protect, UpdateNote)
//   .delete(DeleteNote);
//router.route("/create").post()
//router.route("/:id").get().put().delet()
module.exports = router;
