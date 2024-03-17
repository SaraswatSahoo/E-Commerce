const mongoose = require("mongoose")

const CustomersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const CustomersModel = mongoose.model("Customers", CustomersSchema)
module.exports = CustomersModel