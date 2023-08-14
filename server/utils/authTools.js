const crypto = require('crypto');

// Generate strong secret key 
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);