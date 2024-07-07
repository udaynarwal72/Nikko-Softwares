const express = require("express");
const router = express.Router();
const user = require("../models/User");
const fetchuser = require("../middleware/fetchuser"); //fetchusermiddle
const Master=require("../models/Mastersection");


router.post('/addMaster', fetchuser, async (req, res) => {
    try {
      const { section } = req.body;
      
      // Creating a new master object
      const masterData = new Master({
        section,
        userId: req.user.id,  // Assuming fetchuser middleware sets req.user
      });
  
      // Saving the master data to the database
      const savedMasterData = await masterData.save();
      res.status(201).json(savedMasterData);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Route to get all master data for the authenticated user
  router.get('/getMasters', fetchuser, async (req, res) => {
    try {
      const masterData = await Master.find({ userId: req.user.id }).populate('userId');
      res.status(200).json(masterData);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;


