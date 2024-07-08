const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser"); //fetchusermiddle
const AddBankDetails = require('../models/Addbankdetails');
const Master = require('../models/Mastersection')


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
      masterId: master.id
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


//route to update bankdetails
router.put('/updateBankDetails/:id', fetchuser, async (req, res) => {
  try {
    const { bank_name, account_number, account_balance, cash, section } = req.body;

    // Find the bank details by ID and ensure the user owns it
    let bankDetails = await AddBankDetails.findById(req.params.id);
    if (!bankDetails || bankDetails.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Bank details not found' });
    }

    // Update the master section if provided
    let master = bankDetails.masterId;
    if (section) {
      master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
    }

    // Update the bank details
    bankDetails = await AddBankDetails.findByIdAndUpdate(
      req.params.id,
      {
        bank_name,
        account_number,
        account_balance,
        cash,
        masterId: master.id
      },
      { new: true }
    );

    res.status(200).json(bankDetails);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});



// Route to delete bank details
router.delete('/deleteBankDetails/:id', fetchuser, async (req, res) => {
  try {
    // Find the bank details by ID and ensure the user owns it
    const bankDetails = await AddBankDetails.findById(req.params.id);
    if (!bankDetails || bankDetails.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Bank details not found' });
    }

    // Delete the bank details
    await AddBankDetails.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Bank details deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});





module.exports = router;
