const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchuser'); // Middleware to fetch user from token
const Ledger = require('../models/Ledger');
const Master = require('../models/Mastersection');
const ItemList = require('../models/ItemList')



///route to create a new ledger with ledger heading and dateform and dateto
router.post('/createLedger', fetchUser, async (req, res) => {
  try {
    const { dateFrom, dateTo, section,group} = req.body;

       


    // Find the master document based on section and userId
    const master = await Master.findOne({ section, userId: req.user.id });
    if (!master) {
      return res.status(404).json({ message: 'Master section not found' });
    }
    const item=await ItemList.findOne({masterId:master._id, userId: req.user.id,group:group})
    console.log(item._id)
    console.log(master._id)

    // Create new ledger
    const newLedger = new Ledger({
      dateFrom,
      dateTo,
      ledgerHeading:section,
      Itemlist:item._id,
      creditTable: [],
      debitTable: [],
      userId: req.user.id, // Using user ID from fetchUser middleware
      masterId: master._id
    });

    const savedLedger = await newLedger.save();
    res.status(201).json(savedLedger);
  } catch (error) {
    console.log('Error in creating ledger:', error);
    res.status(400).json({ message: error.message });
  }
});


//route to get ledger data by userid and section
router.get('/getLedger', fetchUser, async (req, res) => {
    try {
      const { section } = req.body;
  
      // Find the master document
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }

      const item=await ItemList.findOne({masterId:master._id, userId: req.user.id,group:group})

  
      // Find the ledger by master ID and user ID
      const ledger = await Ledger.findOne({ masterId: master._id, userId: req.user.id,Itemlist:item._id });
      if (!ledger) {
        return res.status(404).json({ message: 'Ledger not found' });
      }
  
      res.status(200).json(ledger);
    } catch (error) {
      console.error('Error fetching ledger:', error);
      res.status(400).json({ message: error.message });
    }
  });
  




  //route to update credit table data in ledger using section, group, credittable

  // sample test input-
  // {
  //   "section": "test",
  //   "group":"test"
  //   "creditTable": [
  //     {
  //       "creditDate": "2024-01-02",
  //       "reciptNumber": 1001,
  //       "narration": "Sale of goods",
  //       "cashBookPageNumber": 1,
  //       "amount": 2500
  //     },
  //     {
  //       "creditDate": "2024-01-10",
  //       "reciptNumber": 1002,
  //       "narration": "Service income",
  //       "cashBookPageNumber": 2,
  //       "amount": 1500
  //     }
  //   ]
  // }
  
  router.put('/updateLedgerCreditTable', fetchUser, async (req, res) => {
    try {
      const { creditTable, section,group } = req.body;
  
      // Find the master document based on section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }

      const item=await ItemList.findOne({masterId:master._id, userId: req.user.id,group:group})

  
      // Find the ledger by master ID and user ID
      const ledger = await Ledger.findOne({ masterId: master._id, userId: req.user.id,ItemList:item._id });
      if (!ledger) {
        return res.status(404).json({ message: 'Ledger not found' });
      }
  
      // Update the creditTable field
      ledger.creditTable = creditTable;
  
      // Save the updated ledger
      const updatedLedger = await ledger.save();
      res.status(200).json(updatedLedger);
    } catch (error) {
      console.error('Error updating ledger credit table:', error);
      res.status(400).json({ message: error.message });
    }
  });
  




  //route to update debittable data using section ,group and debittable data


  //sample test input- {
//   "section": "test",
//   "group":"test",
//   "debitTable": [
//     {
//       "debitDate": "2024-01-05",
//       "voucherNumber": 2001,
//       "narration": "Office supplies purchase",
//       "cashBookPageNumber": 1,
//       "amount": 3000
//     },
//     {
//       "debitDate": "2024-01-15",
//       "voucherNumber": 2002,
//       "narration": "Utility bills payment",
//       "cashBookPageNumber": 2,
//       "amount": 1200
//     }
//   ]
// }

  router.put('/updateLedgerDebitTable', fetchUser, async (req, res) => {
    try {
      const { debitTable, section,group } = req.body;
  
      // Find the master document based on section and userId
      const master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
  


      const item=await ItemList.findOne({masterId:master._id, userId: req.user.id,group:group})

      // Find the ledger by master ID and user ID
      const ledger = await Ledger.findOne({ masterId: master._id, userId: req.user.id ,ItemList:item._id});
      if (!ledger) {
        return res.status(404).json({ message: 'Ledger not found' });
      }
  
      // Update the debitTable field
      ledger.debitTable = debitTable;
  
      // Save the updated ledger
      const updatedLedger = await ledger.save();
      res.status(200).json(updatedLedger);
    } catch (error) {
      console.error('Error updating ledger debit table:', error);
      res.status(400).json({ message: error.message });
    }
  });
  
      


module.exports = router;
