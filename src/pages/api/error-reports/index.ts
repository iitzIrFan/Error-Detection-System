import { NextApiRequest, NextApiResponse } from 'next';
import { errorReportService } from '../../../services/errorReportService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'POST':
        const errorReport = await errorReportService.create(req.body);
        return res.status(201).json(errorReport);

      case 'GET':
        const errorReports = await errorReportService.getAll();
        return res.status(200).json(errorReports);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error in error-reports API:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}