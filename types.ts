
export type ServiceType = 
  | 'Website Rebuild' 
  | 'Landing Page' 
  | 'SEO Foundation' 
  | 'Speed Optimization' 
  | 'Not Sure Yet';

export interface Lead {
  fullName: string;
  email: string;
  company?: string;
  website?: string;
  serviceType: ServiceType;
  message: string;
  wantAudit: boolean;
  source: string;
  createdAt: any; // Firestore Timestamp
}
