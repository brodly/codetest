const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../database/controller');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET ALL CARDS
router.get('/card', async (req, res) => {
  try {
    const data = await db.getAllCards();
    res.send(data);
  } catch (err) {
    res.sendStatus(404).send('404 Error retriving cards.');
  }
});

// GET CARD BY ID
router.get('/card/:name', async (req, res) => {
  try {
    const name = req.params;
    const data = await db.getCard(name);
    if (data.length === 0) res.send('Sorry! Card not found.');
    else res.send(data);
  } catch (err) {
    res.sendStatus(404).send('404 Error retriving card.');
  }
});

// CREATE NEW CARD
router.post('/card', async (req, res) => {
  try {
    const { body } = req;
    db.createCard(body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500).send('Could not submit new card.');
  }
});

// UPDATE CARD
router.patch('/card/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { body } = req;
    await db.updateCard(name, body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500).send('Could not update card.');
  }
});

// DELETE CARD
router.delete('/card/:name', async (req, res) => {
  try {
    const { name } = req.params;
    await db.deleteCard(name);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500).send('Could not delete card.');
  }
});

module.exports = router;
