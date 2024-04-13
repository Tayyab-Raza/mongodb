const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Userschema = new Schema({
name: {
    type: String,
    required: true,
},
surname: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
issuedbook: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"book",
    required: false,
},
returndate: {
    type: String,
    required: false,
},
subscriptiontype: {
    type: String,
    required: true,
},
subscriptiondate: {
    type: String,
    required: true,
}
},
{
 timestamps: true,
})
 module.exports = mongoose.model("user", Userschema)