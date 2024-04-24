const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const employeeSchema = new mongoose.Schema({
    fullName:String, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }, 
    password: {
        type: String,
        required: true,
        minlength: 1
    },
    token: String,  
    address: String,
    phone: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date,
    },
    { timestamps: true }
)

const Employee = mongoose.model("Employee", employeeSchema, "employees");

module.exports = Employee;