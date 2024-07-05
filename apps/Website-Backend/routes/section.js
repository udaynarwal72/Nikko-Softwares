const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser"); //fetchusermiddle
const AddBankDetails = require('../models/Addbankdetails');




router.post('/addBankDetails', fetchuser, async (req, res) => {
    try {
      const { bank_name, account_number, account_balance, cash, masterId } = req.body;
      
      // Creating a new bank details object
      const bankDetails = new AddBankDetails({
        bank_name,
        account_number,
        account_balance,
        cash,
        userId: req.user.id,  // Assuming fetchuser middleware sets req.user
        masterId
      });
  
      // Saving the bank details to the database
      const savedBankDetails = await bankDetails.save();
      res.status(201).json(savedBankDetails);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  

  
  // Route to get all bank details for the authenticated user
  router.get('/getBankDetails', fetchuser, async (req, res) => {
    try {
      const bankDetails = await AddBankDetails.find({ userId: req.user.id }).populate('userId').populate('masterId');
      res.status(200).json(bankDetails);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  





  module.exports = router;
