const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const faqSchema = new Schema({
    question:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }

});

const FAQdata = mongoose.model("FAQdata", faqSchema);

module.exports = FAQdata;