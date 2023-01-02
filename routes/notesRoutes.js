const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require("../controllers/noteController");
router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(DeleteNote);
//router.route("/create").post()
//router.route("/:id").get().put().delet()
module.exports = router;
