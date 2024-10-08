const express = require("express");
const router = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const authsrt = "nikko";

//register a new user
router.post("/reg", async (req, res) => {

  const temp = await user.findOne({ id: req.body.id });

  if (temp) {
    return res
      .status(400)
      .json({ error: "ID unavailable, please try with different id" });
  }

  const salt = await bcrypt.genSalt(10);
  const finalpass = await bcrypt.hash(req.body.password, salt);

  const usr = await user.create({
    collegeName: req.body.collegename,
    password: finalpass,
    id: req.body.id,
  });

  usr.save();


  res.json(usr);
});



//login a user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const userdata = await user.findOne({ id: req.body.id });

    if (!userdata) {
      return res
        .status(400)
        .json({ error: "Invalid Credentials, user doesn't exist" });
    }

    const passwordcomp = await bcrypt.compare(req.body.password, userdata.password);

    if (!passwordcomp) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const data = {
      user: {
        id: userdata._id,
      },
    };

    const authtoken = jwt.sign(data, authsrt);
    res.json(authtoken);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});




router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userid = await user.findOne({ id: req.body.id });
    res.send(userid);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("err");
  }
});

module.exports = router;
