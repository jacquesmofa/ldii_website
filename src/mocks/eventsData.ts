/**
 * Events. The list itself is in src/content/events.json (editable in the website editors).
 * Past and upcoming are worked out from each event's date; "unconfirmed" hides an event.
 */
import eventsRaw from '../content/events.json';
import { normalize } from '../content/normalize';

const events = normalize(eventsRaw);

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO format (YYYY-MM-DD) for auto-filtering
  displayDate: string; // Human-readable date shown to users
  location: string;
  venue?: string;
  description: string;
  shortDescription: string; // Used on homepage cards
  image: string;
  type: string;
  attendees?: string;
  countries?: string;
  highlights?: string[];
  themes?: string[];
  outcomes?: string[];
  speakers?: { name: string; role: string }[];
  resources?: { title: string; type: string; size: string }[];
  /** Optional group photograph shown under the description, before speakers. */
  speakersPhoto?: { url: string; caption: string };
  isFeatured?: boolean;
  /** Optional deep link to a dedicated programme page (overrides the default event links) */
  linkUrl?: string;
  linkLabel?: string;
  /** Date has passed but LDII has not confirmed the event took place: hidden from past and upcoming lists until confirmed. */
  unconfirmed?: boolean;
}

export const allEvents = events.items as EventItem[];

/**
 * Get today's date for comparison
 */
export function getToday(): Date {
  return new Date();
}

/**
 * Get all upcoming events (date >= today)
 * Events are sorted by date (soonest first)
 */
export function getUpcomingEvents(): EventItem[] {
  const today = getToday();
  return allEvents
    .filter(event => new Date(event.date) >= today && !event.unconfirmed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get all past events (date < today)
 * Events are sorted by date (most recent first)
 */
export function getPastEvents(): EventItem[] {
  const today = getToday();
  return allEvents
    .filter(event => new Date(event.date) < today && !event.unconfirmed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get featured events only (upcoming and past)
 */
export function getFeaturedEvents(): EventItem[] {
  return allEvents.filter(event => event.isFeatured && !event.unconfirmed);
}

/**
 * Get a single event by its ID
 */
export function getEventById(id: string): EventItem | undefined {
  return allEvents.find(event => event.id === id);
}