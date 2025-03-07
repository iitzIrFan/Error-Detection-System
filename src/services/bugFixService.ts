import { collections } from '../lib/firebase';
import { BugFix } from '../models/types';

export const bugFixService = {
  async create(data: Omit<BugFix, 'id' | 'createdAt'>) {
    const bugFix: Omit<BugFix, 'id'> = {
      ...data,
      createdAt: new Date()
    };

    const docRef = await collections.bugFixes.add(bugFix);
    return { id: docRef.id, ...bugFix };
  },

  async getByErrorReportId(errorReportId: string) {
    const snapshot = await collections.bugFixes
      .where('errorReportId', '==', errorReportId)
      .orderBy('createdAt', 'desc')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BugFix));
  },

  async updateReviewStatus(id: string, reviewed: boolean) {
    await collections.bugFixes.doc(id).update({ reviewed });
  }
};