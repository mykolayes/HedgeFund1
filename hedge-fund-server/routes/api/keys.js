var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var Transaction = mongoose.model('Transaction');
var auth = require('../auth');
var StellarSdk = require('stellar-sdk');
StellarSdk.Network.useTestNetwork();
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

router.post('/new', auth.required, function(req,res,next) {
  User.findById(req.payload.id).then(function(user) {
    if (user.publickey === '') {
      const key = StellarSdk.Keypair.random();
      user.publickey = key.publicKey();
      user.save().then(function() {
        return res.send(key.secret());
      }).catch(next);
    } else {
      res.sendStatus(404);
    }
  });
});

router.post('/sign', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(async function(user) {
    if (req.body.secretKey !== '' && user.publickey !== '') {
      const key = StellarSdk.Keypair.fromSecret(req.body.secretKey);
      const dt = req.body.dataToSign + new Date()
      const sign = key.sign(Buffer(dt));
      if(key.verify(Buffer(dt), sign)) {
        var transaction = new Transaction();
        transaction.userid = user._id;
        transaction.transactionSign = sign.toJSON().data;
        await transaction.save();
        res.send(sign);
      }
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;