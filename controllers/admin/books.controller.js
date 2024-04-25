const Book = require("../../models/books.model");

const createBook = async (req, res) => {
  try {
    const book = await Book.create({
      ...req.body,
    });
    res.status(200).json({ message: 'Book added successfully', book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getAll = async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json(book);
  } catch (error) {
    res.status(500);
    throw new Error(error.message)
  }
}

const getOne = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: `Book not found with ID: ${bookId}` });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateOne = async (req, res) => {
  try {
    const bookId = req.params.id;
    const newBook = await Book.findById(bookId);

    if (!newBook) {
      return res.status(404).json({ message: `Cannot find book with ID: ${bookId}` });
    }
    const data = {
      ...req.body,
    };
    const book = await Book.findByIdAndUpdate(bookId, data, { new: true })
    if (!book) {
      res.status(404).json({ message: `Cannot find book with ID: ${req.params.id}` })
    }
    res.status(200).json({ message: "Book was updated" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message)
  }
}

const deleteOne = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).json({ message: `Cannot find book with ID: ${req.params.id}` });
      return;
    }

    res.status(200).json({ message: `Book with ID: ${req.params.id} has been deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteAll = async (req, res) => {
  try {
    const result = await Book.deleteMany({});

    res.status(200).json({ message: `Deleted ${result.deletedCount} books.` });
  } catch (error) {
    res.status(500);
    throw new Error(error.message)
  }
}

module.exports = {
  createBook,
  getAll,
  getOne,
  updateOne,
  deleteOne,
  deleteAll,
}
