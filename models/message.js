const mongoose = require("mongoose");

const schema = mongoose.Schema;

const messageSchema = new schema({
    date : {
        type:Date
    },
    time:{
        type:String
    },
    message:{
        type:String
    }
});

module.exports = mongoose.model('message',messageSchema);