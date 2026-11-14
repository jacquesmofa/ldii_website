import { useId, useState } from 'react';
import { photo, PARADE_VIDEO, type Post } from '../../content/ldii';
import HlsVideo from './HlsVideo';

/** Source badge: the institution's own logo (linked from its site) with a text fallback. */
function SourceBadge({ post }: { post: Post }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
        {post.logo && !failed ? (
          <img src={post.logo} alt={`${post.sourceShort} logo`} className="max-w-[80%] max-h-[80%] object-contain" onError={() => setFailed(true)} loading="lazy" />
        ) : post.sourceIcon ? (
          <i className={`${post.sourceIcon} text-xl text-ldii-navy`} aria-hidden="true" />
        ) : (
          <span className="font-display font-bold text-sm text-tech-teal-800">{post.sourceShort.slice(0, 4)}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ldii-navy leading-tight">{post.source}</p>
        <p className="text-xs text-gray-600">{post.displayDate}</p>
      </div>
    </div>
  );
}

/** A news post: summary first, the full text unfolds on "Read more", with a link to the original. */
export default function PostCard({ post, wide = false, defaultOpen = false }: { post: Post; wide?: boolean; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();
  return (
    <article id={post.slug} className={`scroll-mt-28 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col ${wide ? 'lg:flex-row' : ''}`}>
      {post.video ? (
        <div className={`relative bg-black ${wide ? 'lg:w-1/2' : ''}`}>
          <HlsVideo src={PARADE_VIDEO.src} poster={PARADE_VIDEO.poster(1200)} title={PARADE_VIDEO.title} className="w-full aspect-video object-contain bg-black" />
        </div>
      ) : (
        post.image && (
          <div className={`${wide ? 'lg:w-1/2' : ''}`}>
            <img
              src={photo(post.image, 900, 560)}
              alt={post.imageAlt || ''}
              loading="lazy"
              className="w-full h-full aspect-[16/10] object-cover"
            />
          </div>
        )
      )}
      <div className={`p-6 md:p-7 flex flex-col flex-1 ${wide ? 'lg:w-1/2' : ''}`}>
        <SourceBadge post={post} />
        <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold text-ldii-navy leading-snug">{post.title}</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">{post.excerpt}</p>
        <div id={bodyId} hidden={!open} className="mt-4 space-y-3 text-gray-700 leading-relaxed">
          {post.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-auto pt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={bodyId}
            className="inline-flex items-center gap-1 font-semibold text-tech-teal-800 hover:text-ldii-navy"
          >
            {open ? 'Show less' : 'Read more'}
            <i className={`ri-arrow-down-s-line transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {post.link && (
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-ldii-navy">
              {post.linkLabel || 'Read the original'} <i className="ri-external-link-line" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
