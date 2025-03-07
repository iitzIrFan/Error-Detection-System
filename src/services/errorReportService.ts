import { collections } from '../lib/firebase';
import { ErrorReport } from '../models/types';

export const errorReportService = {
  async create(data: Omit<ErrorReport, 'id' | 'status' | 'createdAt'>) {
    const errorReport: Omit<ErrorReport, 'id'> = {
      ...data,
      status: 'pending',
      createdAt: new Date()
    };

    const docRef = await collections.errorReports.add(errorReport);
    return { id: docRef.id, ...errorReport };
  },

  async getAll() {
    const snapshot = await collections.errorReports.orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ErrorReport));
  },

  async updateStatus(id: string, status: ErrorReport['status']) {
    await collections.errorReports.doc(id).update({ status });
  },

  async getById(id: string) {
    const doc = await collections.errorReports.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as ErrorReport;
  }
};