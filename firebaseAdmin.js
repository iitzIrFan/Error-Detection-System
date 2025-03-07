const admin = require('firebase-admin');

// Prevent multiple Firebase instances in serverless environments
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json'); // Ensure correct path
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

module.exports = db;
