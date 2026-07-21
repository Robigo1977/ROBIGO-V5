export interface UrgentService {
  id: number;

  title: string;
  badge: string;

  description: string;

  features: string[];

  button: string;

  href: string;

  available: boolean;

  primary: boolean;
}