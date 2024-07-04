import { Router } from "express";
const router = Router();
import { findOne, create } from "../models/User";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import fetchuser from "../middleware/fetchuser";

const authsrt = "cloudnote";

//register a new user
router.post("/reg", async (req, res) => {

  const temp = await findOne({ id: req.body.id });

  if (temp) {
    return res
      .status(400)
      .json({ error: "ID unavailable, please try with different id" });
  }

  const salt = await genSalt(10);
  const finalpass = await hash(req.body.password, salt);

  const usr = await create({
    collegeName: req.body.collegename,
    password: finalpass,
    id: req.body.id,
  });

  usr.save();

  // const data = {
  //   user: {
  //     id: user.id,
  //   },
  // };
  // const authtoken = jwt.sign(data, authsrt);

  res.json(usr);
});

//login a user
router.post("/", async (req, res) => {
  console.log(req.body);

  // const temp = await user.findOne({ id: req.body.id });

  // if (temp) {
  //   return res
  //     .status(400)
  //     .json({ error: "ID unavailable, please try with different id" });
  // }

  const userdata = await findOne({ id: req.body.id });
  // user= await user.find({userName:"Andressa"})

  if (!userdata) {
    return res
      .status(400)
      .json({ error: "Invalid Credentials, user doesnt exists" });
  }

  const passwordcomp = await compare(
    req.body.password,
    userdata.password
  );

  if (!passwordcomp) {
    return res.status(400).json({ error: "Invalid Credentials" });
  }

  const data = {
    user: {
      id: userdata._id,
    },
  };
  const authtoken = sign(data, authsrt);

  res.json(authtoken);
});

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userid = await findOne({ id: req.body.id });
    res.send(userid);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("err");
  }
});

export default router;
