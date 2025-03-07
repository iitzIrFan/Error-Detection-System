const db = require('./firebaseAdmin');

// Firestore collections
const errorReportsCollection = db.collection('error_reports');
const bugFixesCollection = db.collection('bug_fixes');
const aiFixesCollection = db.collection('ai_fixes');

// Add an error report
const addErrorReport = async (data) => {
  const { codeSnippet, errorMessage, severity } = data;
  const createdAt = new Date();
  const status = 'pending';
  await errorReportsCollection.add({ codeSnippet, errorMessage, severity, createdAt, status });
};

// Fetch all error reports
const fetchAllErrorReports = async () => {
  const snapshot = await errorReportsCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Update error status
const updateErrorStatus = async (id, status) => {
  await errorReportsCollection.doc(id).update({ status });
};

// Store AI-generated bug fixes
const storeBugFix = async (data) => {
  const { fix, aiConfidence, reviewed } = data;
  await bugFixesCollection.add({ fix, aiConfidence, reviewed, createdAt: new Date() });
};

module.exports = { addErrorReport, fetchAllErrorReports, updateErrorStatus, storeBugFix };