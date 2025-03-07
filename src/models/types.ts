export interface ErrorReport {
    id?: string;
    codeSnippet: string;
    errorMessage: string;
    severity: 'low' | 'medium' | 'high';
    status: 'pending' | 'resolved';
    createdAt: Date;
  }
  
  export interface BugFix {
    id?: string;
    errorReportId: string;
    fix: string;
    aiConfidence: number;
    reviewed: boolean;
    createdAt: Date;
  }
  
  export interface AIFix {
    id?: string;
    errorReportId: string;
    suggestion: string;
    confidence: number;
    approved: boolean;
    createdAt: Date;
  }