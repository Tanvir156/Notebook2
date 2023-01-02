const express = require("express");
const router = express.Router();
const { createPublicNote } = require("../controllers/publicNoteController");
const {
  getPublicNotes,
  getPublicNotesOwn,
  getPUblicNoteById,
  getPUblicNoteById2,
  deletePublicNote,
  getUserDetails,
  getProfileSearch,
  getPUblicNoteByIdForProfile,
} = require("../controllers/publicNoteController");

const { protect } = require("../middleware/authMiddleware");
router.route("/").post(protect, createPublicNote);
router.route("/getnotes").get(getPublicNotes);
router.route("/getnotes/own").get(protect, getPublicNotesOwn);

router
  .route("/getnotes/own/:id")
  .get(getPUblicNoteById)
  .delete(deletePublicNote);

router.route("/getnotes/own/profile/posts/:id").get(getPUblicNoteById2);

router
  .route("/getnotes/own/profile/:id")
  .get(protect, getPUblicNoteByIdForProfile);

router.route("/getnotes/own/profile/search/:id").get(protect, getProfileSearch);
module.exports = router;
