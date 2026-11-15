/** Confirmed partners only. The list is in src/content/partners.json (editable in the website editors). */
import partners from '../content/partners.json';

export interface Partner {
  name: string;
  role: string;
  description: string;
  website: string;
  logo?: string;
  icon: string;
}

export const confirmedPartners = partners.items as Partner[];
