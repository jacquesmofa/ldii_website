/**
 * LDII: single source of truth for facts, copy and photo picks.
 * The content itself lives in the JSON files next to this one, so it can be edited in the
 * website editors (Pages CMS and Sveltia at /admin). This file only loads it for the pages.
 * Do not add figures that are not confirmed by LDII: list them in PLACEHOLDERS.md instead.
 */
import siteRaw from './site.json';
import aboutRaw from './about.json';
import internationalRaw from './international.json';
import localProgrammesRaw from './local-programmes.json';
import newsPostsRaw from './news-posts.json';
import miningMissionRaw from './mining-mission.json';

import { normalize } from './normalize';

const site = normalize(siteRaw);
const about = normalize(aboutRaw);
const international = normalize(internationalRaw);
const localProgrammes = normalize(localProgrammesRaw);
const newsPosts = normalize(newsPostsRaw);
const miningMission = normalize(miningMissionRaw);

const CLOUD = 'https://res.cloudinary.com/dzppzxpad/image/upload/';

/**
 * Sized, cropped photo. Accepts a photo from LDII's Cloudinary library (full address or bare ID),
 * or any other picture address (for example one uploaded in the editor), which is used as it is.
 */
export const photo = (src: string, w = 1200, h?: number, gravity = 'auto') => {
  if (!src) return '';
  const id = src.startsWith(CLOUD) ? src.slice(CLOUD.length) : src;
  if (/^(https?:)?\/\//.test(id) || id.startsWith('/')) return id;
  return `${CLOUD}${h ? `c_fill,g_${gravity},w_${w},h_${h}` : `c_limit,w_${w}`},q_auto,f_auto/${id}`;
};

export const ORG = site.org;
export const MISSION = site.mission;
export const ABOUT = about.paragraphs;
export const CORE_AREAS = about.coreAreas;
export const FRAMEWORK = about.framework;
export const INTERNATIONAL = international as typeof international & {
  areas: Array<(typeof international.areas)[number] & { link?: { label: string; href: string } }>;
};
export const LOCAL = localProgrammes.local;
export const NEWCOMER = localProgrammes.newcomer;
export const YOUTH_DIMENSIONS = localProgrammes.youthDimensions;

/** Home film: first international Post-COVID parade (Mux, public Playback ID only). */
export const PARADE_VIDEO = {
  ...site.paradeVideo,
  poster: (w = 1600, time = 20) => `https://image.mux.com/${site.paradeVideo.playbackId}/thumbnail.jpg?width=${w}&time=${time}`,
  src: `https://stream.mux.com/${site.paradeVideo.playbackId}.m3u8`,
};

export interface Post {
  slug: string;
  date: string; // ISO
  displayDate: string;
  source: string;
  sourceShort: string;
  logo?: string;
  sourceIcon?: string;
  title: string;
  excerpt: string;
  body: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
  video?: boolean;
}

export const POSTS = newsPosts.items as Post[];

export const MINING_MISSION = miningMission;

/** Photos used across the home page and About ({ id, alt }; id goes through photo()). */
type PhotoKey = keyof typeof site.photos;
export const PHOTOS = Object.fromEntries(
  Object.entries(site.photos).map(([key, p]) => [key, { id: p.image, alt: p.alt }]),
) as Record<PhotoKey, { id: string; alt: string }>;
