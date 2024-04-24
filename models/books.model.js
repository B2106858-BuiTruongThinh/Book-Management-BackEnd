const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    publishYear: String,
    publisher: String,
    publisherAddress: String,
    author: String,
    thumbnail: String,
    slug: {
        type: String,
        slug: "name",
        unique: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date,
    },
    { timestamps: true }
)

const Book = mongoose.model("Book", bookSchema, "books");

module.exports = Book;

