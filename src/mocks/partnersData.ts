/** Confirmed partners only. The list is in src/content/partners.json (editable in the website editors). */
import partnersRaw from '../content/partners.json';
import { normalize } from '../content/normalize';

const partners = normalize(partnersRaw);

export interface Partner {
  name: string;
  role: string;
  description: string;
  website: string;
  logo?: string;
  icon: string;
}

export const confirmedPartners = partners.items as Partner[];
