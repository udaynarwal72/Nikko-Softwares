const express = require("express");
const router = express.Router();
const user = require("../models/User");
const fetchuser = require("../middleware/fetchuser"); //fetchusermiddle
const Master = require("../models/Mastersection");
const Cashbook=require("../models/Cashbook");



///route to crete a new cashbook 

// sample input- {
//     "dateFrom": "2024-01-01",
//     "dateTo": "2024-01-31",
//     "section": "test"
//   }
  
router.post('/createCashbook', fetchuser, async (req, res) => {
    try {
      const { dateFrom, dateTo, section } = req.body;
  
      // Find the master document based on section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  
      // Create new cashbook
      const newCashbook = new Cashbook({
        dateFrom,
        dateTo,
        creditTable: [],
        debitTable: [],
        userId: req.user.id, // Using user ID from fetchUser middleware
        masterId: master._id
      });
  
      const savedCashbook = await newCashbook.save();
      res.status(201).json(savedCashbook);
    } catch (error) {
      console.log('Error in creating cashbook:', error);
      res.status(400).json({ message: error.message });
    }
  });
  

//route to get cashbook for a particular section of that user
router.get('/getCashbook', fetchuser, async (req, res) => {
  try {
    const { section } = req.body;

    // Find the master document based on section and userId
    const master = await Master.findOne({ section, userId: req.user.id });
    if (!master) {
      return res.status(404).json({ message: 'Master section not found' });
    }

    // Find the cashbook by master ID, user ID, dateFrom, and dateTo
    const cashbook = await Cashbook.findOne({ 
      masterId: master._id, 
      userId: req.user.id,
    });

    if (!cashbook) {
      return res.status(404).json({ message: 'Cashbook not found' });
    }

    res.status(200).json(cashbook);
  } catch (error) {
    console.error('Error fetching cashbook:', error);
    res.status(400).json({ message: error.message });
  }
});


 //route to update creditdata table

// Route to update creditTable
// sample input data- {
//     "section": "sales",
//     "creditTable": [
//       {
//         "openingBalance": 5000,
//         "creditDate": "2024-01-02",
//         "reciptNumber": 1001,
//         "AccNumber": 123456,
//         "typeOfAcc": "Sales",
//         "narration": "Sale of goods",
//         "group": "Revenue",
//         "amount": 2500
//       },
//       {
//         "openingBalance": 7500,
//         "creditDate": "2024-01-10",
//         "reciptNumber": 1002,
//         "AccNumber": 789012,
//         "typeOfAcc": "Service",
//         "narration": "Service income",
//         "group": "Revenue",
//         "amount": 1500
//       }
//     ]
//   }
  
router.put('/updateCreditTable', fetchuser, async (req, res) => {
    try {
      const { creditTable, section } = req.body;
  
      // Find the master document based on section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  
      // Find the cashbook by master ID and user ID
      const cashbook = await Cashbook.findOne({ masterId: master._id, userId: req.user.id });
      if (!cashbook) {
        return res.status(404).json({ message: 'Cashbook not found' });
      }
  
      // Update the creditTable field
      cashbook.creditTable = creditTable;
  
      // Save the updated cashbook
      const updatedCashbook = await cashbook.save();
      res.status(200).json(updatedCashbook);
    } catch (error) {
      console.error('Error updating credit table:', error);
      res.status(400).json({ message: error.message });
    }
  });
  
  // Route to update debitTable

//sample test input data-
// {
//   "section": "test",
//   "debitTable": [
//     {
//       "debitDate": "2024-01-05",
//       "voucherNumber": 2001,
//       "AccNumber": 12345,
//       "type": "Office Supplies",
//       "group": "Expenses",
//       "amount": 3000,
//       "narration": "Office supplies purchase",
//       "closingBalance": 5000
//     },
//     {
//       "debitDate": "2024-01-15",
//       "voucherNumber": 2002,
//       "AccNumber": 67890,
//       "type": "Utilities",
//       "group": "Expenses",
//       "amount": 1200,
//       "narration": "Utility bills payment",
//       "closingBalance": 3800
//     }
//   ]
// }


  router.put('/updateDebitTable', fetchuser, async (req, res) => {
    try {
      const { debitTable, section } = req.body;
  
      // Find the master document based on section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  
      // Find the cashbook by master ID and user ID
      const cashbook = await Cashbook.findOne({ masterId: master._id, userId: req.user.id });
      if (!cashbook) {
        return res.status(404).json({ message: 'Cashbook not found' });
      }
  
      // Update the debitTable field
      cashbook.debitTable = debitTable;
  
      // Save the updated cashbook
      const updatedCashbook = await cashbook.save();
      res.status(200).json(updatedCashbook);
    } catch (error) {
      console.error('Error updating debit table:', error);
      res.status(400).json({ message: error.message });
    }
  });
  



module.exports = router;
