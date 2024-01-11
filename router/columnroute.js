// columns.route.js

const express = require('express');
const router = express.Router();
const Column = require('../models/columnmodel');

// Add a new column
router.post('/add', async (req, res) => {
  try {
    const { columnName, dataType, format } = req.body;
    const newColumn = new Column({ columnName, dataType, format });
    await newColumn.save();
    res.json(newColumn);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.delete('/:columnId', async (req, res) => {
    try {
      const { columnId } = req.params;
      const deletedColumn = await Column.findByIdAndRemove(columnId);
      if (!deletedColumn) {
        return res.status(404).json({ error: 'Column not found' });
      }
      res.json(deletedColumn);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
module.exports = router;
