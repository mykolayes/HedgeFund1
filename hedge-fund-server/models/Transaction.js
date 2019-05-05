var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var TransactionSchema = new mongoose.Schema({
  userid: {type: String},
  transactionSign: {type: String}
}, {timestamps: true});

mongoose.model('Transaction', TransactionSchema);