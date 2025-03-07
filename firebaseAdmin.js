const admin = require('firebase-admin');

// Update this path to where you saved your service account JSON file
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // You can optionally specify the project ID, but it's included in the service account file
  projectId: "sample-firebase-ai-app-c85e2"
});

const db = admin.firestore();

module.exports = db;