const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const fetchUser=require("../middleware/fetchuser")
const Master=require('../models/Mastersection')
const ItemList=require('../models/ItemList')


router.post('/setitemlist', fetchUser, async (req, res) => {
    try {
      const { acc_no, type_of_account, group, section } = req.body;
  
      // Find the Master document by section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  
      const newItem = new ItemList({
        acc_no,
        type_of_account,
        group,
        userId: req.user.id, // Using user ID from fetchUser middleware
        masterId: master._id // Using masterId from the found Master document
      });
  
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      console.log("error in setting item-", error);
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route to get items in the item list for the current user
  router.get('/getitemlist', fetchUser, async (req, res) => {
    try {
      const itemList = await ItemList.find({ userId: req.user.id }).populate('userId').populate('masterId');
      res.status(200).json(itemList);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;