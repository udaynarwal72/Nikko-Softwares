const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser"); //fetchusermiddle
const AddBankDetails = require('../models/Addbankdetails');
const Master=require('../models/Mastersection')



router.post('/addBankDetails', fetchuser, async (req, res) => {
    try {
      const { bank_name, account_number, account_balance, cash, section } = req.body;


      // to get master id form given section and use it as foreign key
      const master = await Master.findOne({ section, userId: req.user.id });

      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
      
      
      // Creating a new bank details object
      const bankDetails = new AddBankDetails({
        bank_name,
        account_number,
        account_balance,
        cash,
        userId: req.user.id,  // Assuming fetchuser middleware sets req.user
        masterId:master.id
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
