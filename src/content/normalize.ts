/**
 * Safety net for content edited in the website editors.
 * When an editor adds an item to a list and leaves a field empty, some editors leave the
 * field out of the file altogether. Pages expect it to exist (for example a list of bullet
 * points), so every item in a list gets the fields most of its neighbours have, empty.
 */
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const emptyLike = (sample: Json): Json =>
  Array.isArray(sample) ? [] : sample && typeof sample === 'object' ? {} : typeof sample === 'string' ? '' : typeof sample === 'number' ? 0 : false;

const isRecord = (v: Json): v is { [key: string]: Json } => !!v && typeof v === 'object' && !Array.isArray(v);

function walk(value: Json): Json {
  if (Array.isArray(value)) {
    const items = value.map(walk);
    const records = items.filter(isRecord);
    if (records.length < 2 || records.length !== items.length) return items;
    const seen = new Map<string, { count: number; sample: Json }>();
    for (const r of records)
      for (const [k, v] of Object.entries(r)) {
        const s = seen.get(k);
        if (s) s.count++;
        else seen.set(k, { count: 1, sample: v });
      }
    for (const r of records)
      for (const [k, s] of seen) if (!(k in r) && s.count * 2 > records.length && Array.isArray(s.sample)) r[k] = emptyLike(s.sample);
    return items;
  }
  if (isRecord(value)) return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, walk(v)]));
  return value;
}

export const normalize = <T>(content: T): T => walk(content as unknown as Json) as unknown as T;
