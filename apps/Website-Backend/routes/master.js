const express = require("express");
const router = express.Router();
const user = require("../models/User");
const fetchuser = require("../middleware/fetchuser"); //fetchusermiddle
const Master = require("../models/Mastersection");
const Cashbook=require("../models/Cashbook");
const Ledger = require('../models/Ledger');
const ItemList = require('../models/ItemList')

// http://localhost:3200/api/section/routes/master/addmaster

router.post('/addmaster', fetchuser, async (req, res) => {
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


//route to delete master using id

router.delete('/deleteMaster/:id', fetchuser, async (req, res) => {
  try {
    const master = await Master.findById(req.params.id);

    if (!master) {
      return res.status(404).json({ msg: 'Master data not found' });
    }

    // Ensure the user owns the master data
    if (master.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Delete associated Cashbook entries
    await Cashbook.deleteMany({ masterId: req.params.id });

    // Delete associated Ledger entries
    await Ledger.deleteMany({ masterId: req.params.id });

    // Delete associated ItemList entries
    await ItemList.deleteMany({ masterId: req.params.id });

    // Use findByIdAndDelete instead of remove
    await Master.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Master data removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});



// PUT route to update a master by ID
router.put('/updateMaster/:id', fetchuser, async (req, res) => {
  const { section } = req.body;

  // Build master object
  const masterFields = {};
  if (section) masterFields.section = section;

  try {
    let master = await Master.findById(req.params.id);

    if (!master) {
      return res.status(404).json({ msg: 'Master data not found' });
    }

    // Ensure the user owns the master data
    if (master.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    master = await Master.findByIdAndUpdate(
      req.params.id,
      { $set: masterFields },
      { new: true }
    );

    res.status(200).json(master);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;


