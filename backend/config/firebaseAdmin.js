const admin = require('firebase-admin');
const serviceAccount = require('../go-ouDONOTUPLOADkey.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
