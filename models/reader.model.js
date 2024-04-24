const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const readerSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    token: String,
    address: String,
    phone: String,
    borrow: [
        {
            id_book: String,
            status: {
                type:String,
                default: "processing" //processing accepted refused
            },
            borrowDate: {
                type: String,
                default: "01/01/2024",
            } ,
            returnDate: {
                type: String,
                default: "31/12/2024",
            } ,
            quantity: {
                type: Number,
                default: 1,
                require: true,
            },
        }
    ],
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date,
},
    { timestamps: true }
)

const Reader = mongoose.model("Reader", readerSchema, "readers");

module.exports = Reader;