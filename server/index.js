const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const CustomersModel = require("./models/Customers")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Customers")

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    CustomersModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.post("/register", (req,res) => {
    CustomersModel.create(req.body)
    .then(Customers => res.json(Customers))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})