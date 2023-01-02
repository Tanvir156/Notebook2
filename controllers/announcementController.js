const asyncHandler = require("express-async-handler");
const Announce = require("./../models/announcmentModel");
const createAnnouncment = asyncHandler(async (req, res) => {
  const { name, session, date, course, stime, etime, message, corx } = req.body;
  const announce = new Announce({
    user: req.user._id,
    name,
    session,
    date,
    course,
    stime,
    etime,
    message,
    corx,
  });
  const createAnnounce = await announce.save();
  res.status(201).json(createAnnounce);
});
const listAnnouncment = asyncHandler(async (req, res) => {
  const publicnotes = await Announce.find();
  res.json(publicnotes);
});
const listAnnouncmentown = asyncHandler(async (req, res) => {
  const listAnnouncmentown = await Announce.find({ user: req.user._id });
  res.json(listAnnouncmentown);
});

module.exports = { createAnnouncment, listAnnouncment, listAnnouncmentown };
