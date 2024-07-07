const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require("express");
const router = express.Router();
const fetchUser=require("../middleware/fetchuser")
const OpeningBalance=require('../models/OpeningBalance')
const vocherEntry=require('../models/Vocherentry')
const Master=require('../models/Mastersection')

//route to set opening bal
router.post('/setopeningbalance', fetchUser, async (req, res) => {
    try {
      const { cash, section } = req.body;
      
      // Find the Master document by section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
      
      const newOpeningBalance = new OpeningBalance({
        cash,
        userId: req.user.id, // Using user ID from fetchUser middleware
        masterId: master._id // Using masterId from the found Master document
      });
  
      const savedOpeningBalance = await newOpeningBalance.save();
      res.status(201).json(savedOpeningBalance);
    } catch (error) {
        console.log("error in setting opening bal-",error)
      res.status(400).json({ message: error.message });
    }
  });



// route to get opening balance
router.get('/getopeningbalances', fetchUser, async (req, res) => {
    try {
      const openingBalances = await OpeningBalance.find({ userId: req.user.id }).populate('userId').populate('masterId');
      res.status(200).json(openingBalances);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



  //route to set cerdit table entries
  router.post('/setcreditentry', fetchUser, async (req, res) => {
    try {
      const { entryDate, creditTable, masterId } = req.body;
  
      const newVoucherEntry = new VoucherEntry({
        entryDate,
        creditTable,
        userId: req.user.id, // Using user ID from fetchUser middleware
        masterId
      });
  
      const savedVoucherEntry = await newVoucherEntry.save();
      res.status(201).json(savedVoucherEntry);
    } catch (error) {
      console.log("error in setting credit entry-", error);
      res.status(400).json({ message: error.message });
    }
  });
  

  
  // Route to get credit entries
  router.get('/getcreditentries', fetchUser, async (req, res) => {
    try {
      const creditEntries = await VoucherEntry.find({ userId: req.user.id, 'creditTable.0': { $exists: true } }).populate('userId').populate('masterId');
      res.status(200).json(creditEntries);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route to set values in debit table
  router.post('/setdebitentry', fetchUser, async (req, res) => {
    try {
      const { entryDate, debitTable, masterId } = req.body;
  
      const newVoucherEntry = new VoucherEntry({
        entryDate,
        debitTable,
        userId: req.user.id, // Using user ID from fetchUser middleware
        masterId
      });
  
      const savedVoucherEntry = await newVoucherEntry.save();
      res.status(201).json(savedVoucherEntry);
    } catch (error) {
      console.log("error in setting debit entry-", error);
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route to get debit entries
  router.get('/getdebitentries', fetchUser, async (req, res) => {
    try {
      const debitEntries = await VoucherEntry.find({ userId: req.user.id, 'debitTable.0': { $exists: true } }).populate('userId').populate('masterId');
      res.status(200).json(debitEntries);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;
