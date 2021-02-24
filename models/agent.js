const mongoose = require("mongoose");

const schema = mongoose.Schema;

const agentSchema = new schema({
    name : {
        type:String
    }
});

module.exports = mongoose.model('agent',agentSchema);