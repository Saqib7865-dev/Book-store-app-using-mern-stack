const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

// create a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: Title, Author and Publish Year",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    let books = await Book.find({});
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get book by id
router.get("/:id", async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: Title, Author and Publish Year",
      });
    }
    let result = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found!" });
    }
    return res.status(200).send({ message: "Book updated successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ message: "Book not found!" });
    }
    return res.status(200).send({ message: "Book deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});
module.exports = router;
