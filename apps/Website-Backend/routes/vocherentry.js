const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require("express");
const router = express.Router();
const fetchUser=require("../middleware/fetchuser")
const OpeningBalance=require('../models/OpeningBalance')
const vocherEntry=require('../models/Vocherentry')
const Master=require('../models/Mastersection')
const VoucherEntry=require('../models/Vocherentry')

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



  //route to initialize/make a new vocher which will have credit and debit null
  router.post('/makenewvocher', fetchUser, async (req, res) => {
    try {
      const { entryDate, section } = req.body;

      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }

      const openingBalancerow=await OpeningBalance.findOne({masterId:master._id, userId: req.user.id});

      if (!openingBalancerow) {
        return res.status(404).json({ message: 'Please set opening balance first before making new vocher' });
      }      
  
  
      const newVoucherEntry = new VoucherEntry({
        openingBalance:openingBalancerow._id,
        entryDate,
        creditTable:null,
        debitTable:null,
        userId: req.user.id, // Using user ID from fetchUser middleware
        masterId:master._id
      });
  
      const savedVoucherEntry = await newVoucherEntry.save();
      res.status(201).json(savedVoucherEntry);
    } catch (error) {
      console.log("error in setting credit entry-", error);
      res.status(400).json({ message: error.message });
    }
  });

  //route to get voucher data
  router.get('/getvocher', fetchUser, async (req, res) => {
    try {
      const { entryDate, section } = req.body;
        console.log("section in",section)
      // Find the master document
      const master = await Master.findOne({section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  
      // Find the voucher entry by master ID, user ID, and entry date
      const voucherEntry = await VoucherEntry.findOne({ masterId: master._id, userId: req.user.id});
      if (!voucherEntry) {
        return res.status(404).json({ message: 'Voucher entry not found' });
      }
  
      res.status(200).json(voucherEntry);
    } catch (error) {
      console.error('Error fetching voucher entry:', error);
      res.status(400).json({ message: error.message });
    }
  });
  
  
  //route to update creditdata table
  //test sample
  // {
  //   "creditTable": [
  //     {
  //       "openingBalance": 5000,
  //       "reciptNumber": 12345,
  //       "AccNumber": 67890,
  //       "typeOfAcc": "Cash",
  //       "narration": "Payment for services",
  //       "group": "Income",
  //       "amount": 2000
  //     },
  // 
  //   ]
  // }
  router.put('/updatecreditdata', fetchUser, async (req, res) => {
    try {
      const { creditTable,section } = req.body;
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }

  
      // Find the voucher entry by ID and user ID
      const voucherEntry = await VoucherEntry.findOne({ masterId:master._id , userId: req.user.id });
      if (!voucherEntry) {
        return res.status(404).json({ message: 'Voucher entry not found' });
      }
  
      // Update the creditTable field
      voucherEntry.creditTable = creditTable;
  
      // Save the updated voucher entry
      const updatedVoucherEntry = await voucherEntry.save();
      res.status(200).json(updatedVoucherEntry);
    } catch (error) {
      console.error('Error updating credit table:', error);
      res.status(400).json({ message: error.message });
    }
  });

//route to update debitdata
  router.put('/updatedebitdata', fetchUser, async (req, res) => {
    try {
      const { debitTable, section } = req.body;
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  
      // Find the voucher entry by master ID and user ID
      const voucherEntry = await VoucherEntry.findOne({ masterId: master._id, userId: req.user.id });
      if (!voucherEntry) {
        return res.status(404).json({ message: 'Voucher entry not found' });
      }
  
      // Update the debitTable field
      voucherEntry.debitTable = debitTable;
  
      // Save the updated voucher entry
      const updatedVoucherEntry = await voucherEntry.save();
      res.status(200).json(updatedVoucherEntry);
    } catch (error) {
      console.error('Error updating debit table:', error);
      res.status(400).json({ message: error.message });
    }
  });
  
  

  

 
  
  module.exports = router;
