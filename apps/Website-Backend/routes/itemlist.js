const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchuser")
const Master = require('../models/Mastersection')
const ItemList = require('../models/ItemList')

//route to post the item list
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
  const { section } = req.body; // Get the sectionName from the query parameters

  const master = await Master.findOne({ section, userId: req.user.id });
  if (!master) {
    return res.status(404).json({ message: 'Master section not found' });
  }



  try {
    // Find item list by user ID and section name
    const query = { userId: req.user.id };
    if (section) {
      query.masterId = master._id;
    }
    
    const itemList = await ItemList.find(query).populate('userId').populate('masterId');
    res.status(200).json(itemList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//route to update the itemlist
router.put('/updateitemlist/:id', fetchUser, async (req, res) => {
  try {
    const { acc_no, type_of_account, group, section } = req.body;

    // Find the item by ID and ensure the user owns it
    let item = await ItemList.findById(req.params.id);
    if (!item || item.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Update the master section if provided
    let master = item.masterId;
    if (section) {
      master = await Master.findOne({ section, userId: req.user.id });
      if (!master) {
        return res.status(404).json({ message: 'Master section not found' });
      }
    }

    // Update the item list
    item = await ItemList.findByIdAndUpdate(
      req.params.id,
      {
        acc_no,
        type_of_account,
        group,
        masterId: master._id
      },
      { new: true }
    );

    res.status(200).json(item);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Route to delete item list
router.delete('/deleteitemlist/:id', fetchUser, async (req, res) => {
  try {
    // Find the item by ID and ensure the user owns it
    const item = await ItemList.findById(req.params.id);
    if (!item || item.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Delete the item
    await ItemList.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;