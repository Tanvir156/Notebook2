const Caption = require("./../models/publicNoteModel");
const User = require("./../models/userModel");
const asyncHandler = require("express-async-handler");

const createPublicNote = asyncHandler(async (req, res) => {
  const { name, userr, caption, pic, shortImage } = req.body;
  const Publicnote = new Caption({
    user: req.user._id,
    name,
    userr,
    caption,
    pic,
    shortImage,
  });
  const createPublicNote = await Publicnote.save();
  res.status(201).json(createPublicNote);
});
const getPublicNotes = asyncHandler(async (req, res) => {
  const publicnotes = await Caption.find();
  res.json(publicnotes);
});

const getPublicNotesOwn = asyncHandler(async (req, res) => {
  const publicnotesown = await Caption.find({ user: req.user._id });
  res.json(publicnotesown);
});
const getPUblicNoteById = asyncHandler(async (req, res) => {
  const note = await Caption.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});
const getPUblicNoteById2 = asyncHandler(async (req, res) => {
  const notes = await Caption.findById(req.params.id);
  const note = await Caption.find({ user: notes.user });
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});
const deletePublicNote = asyncHandler(async (req, res) => {
  const note = await Caption.findById(req.params.id);

  if (note) {
    await note.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});
const getPUblicNoteByIdForProfile = asyncHandler(async (req, res) => {
  const note = await Caption.findById(req.params.id);
  const userdetails = await User.findById(note.user);

  if (userdetails) {
    res.json(userdetails);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});
const getProfileSearch = asyncHandler(async (req, res) => {
  const userdetails = await User.findById(req.params.id);

  if (userdetails) {
    res.json(userdetails);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  const note = await Caption.findById(req.params.id);

  if (note) {
    console.log(note);
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});

module.exports = {
  createPublicNote,
  getPublicNotes,
  getPublicNotesOwn,
  getPUblicNoteById,
  getPUblicNoteById2,
  deletePublicNote,
  getUserDetails,
  getPUblicNoteByIdForProfile,
  getProfileSearch,
};
