const express = require('express')

const contactsService = require("../../models/contacts");

const { HttpError } = require("../../helpers");

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
  }
  catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsService.getContactById(id);
    if (!result) {
      throw HttpError(404, "No found");
      // const error = new Error("No found");
      // error.status = 404;
      // throw error;
      // return res.status(404).json({
      //   message: "No found"
      // });
    }
    res.json(result);
  }
  catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
