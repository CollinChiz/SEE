const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const balanceSchema = new Schema({
    balance: Number,
    user: String,
});

const Balance = mongoose.model("Balance", balanceSchema);

module.exports = Balance;