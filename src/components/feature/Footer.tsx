import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitFormToInbox } from '@/lib/web3forms';
import { ORG } from '@/content/ldii';
import { NAV } from './Header';
import copy from '../../content/layout/footer.json';
// Text, images and links: src/content/layout/footer.json (editable in the website editors).

const LOGO = 'https://res.cloudinary.com/dzppzxpad/image/upload/c_fill,g_center,w_160,h_160,q_auto,f_auto/v1781702619/Circular_LDII_bewv0j.png';

export default function Footer() {
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    setSending(true);
    const result = await submitFormToInbox(form, {
      subject: 'New newsletter subscriber — LDII website',
      extra: { form_name: 'Footer newsletter' },
    });
    if (result.ok) form.reset();
    setMsg({ ok: result.ok, text: result.message });
    setSending(false);
  };

  const columns = NAV.filter((g) => g.items);

  return (
    <footer className="bg-ldii-ink text-white">
      {/* Signature band: the North–South line */}
      <div className="h-1.5 bg-gradient-to-r from-tech-teal-500 via-tech-teal-300 to-tech-teal-500" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO} alt="" width={56} height={56} className="w-14 h-14 rounded-full bg-white" />
              <span>
                <span className="block font-display text-3xl font-bold leading-none">{copy.main.label}</span>
                <span className="block text-xs text-white/70 mt-1 max-w-[220px]">{ORG.name}</span>
              </span>
            </Link>
            <p className="mt-6 font-display text-xl text-tech-teal-300">{ORG.tagline}</p>
            <p className="mt-3 text-white/75 leading-relaxed">{copy.main.text}{ORG.hq}.
            </p>

            <form onSubmit={subscribe} className="mt-8" id="footer-newsletter-form">
              <label htmlFor="footer-email" className="block font-semibold mb-2">{copy.main.fieldLabel}</label>
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              <div className="flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  placeholder={copy.main.placeholder}
                  className="flex-1 min-w-0 px-4 py-3 rounded-[3px] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-tech-teal-500"
                />
                <button type="submit" disabled={sending} className="px-5 py-3 rounded-[3px] bg-tech-teal-500 text-ldii-navy font-semibold hover:bg-tech-teal-400 disabled:opacity-60">
                  {sending ? 'Sending…' : 'Subscribe'}
                </button>
              </div>
              {msg && <p className={`mt-2 text-sm ${msg.ok ? 'text-tech-teal-300' : 'text-red-300'}`} role="status">{msg.text}</p>}
            </form>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((g) => (
              <div key={g.title}>
                <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tech-teal-300 mb-4">{g.title}</h2>
                <ul className="space-y-3">
                  {g.items!.map((i) => (
                    <li key={i.href}>
                      <Link to={i.href} className="text-white/80 hover:text-white text-[15px]">{i.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-tech-teal-300 mb-4">{copy.main.heading}</h2>
            <ul className="space-y-4 text-white/85">
              <li className="flex gap-3">
                <i className="ri-map-pin-line text-tech-teal-300 mt-0.5" aria-hidden="true" />
                <a href={ORG.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">{ORG.address}</a>
              </li>
              {copy.main.liaisonLabel && (
                <li className="flex gap-3">
                  <i className="ri-global-line text-tech-teal-300 mt-0.5" aria-hidden="true" />
                  <Link to="/contact#our-locations" className="hover:text-white">
                    <span className="block">{copy.main.liaisonLabel}</span>
                    <span className="block text-white/65 text-sm">{copy.main.liaisonCountries}</span>
                  </Link>
                </li>
              )}
              <li className="flex gap-3">
                <i className="ri-phone-line text-tech-teal-300 mt-0.5" aria-hidden="true" />
                <a href={ORG.phoneHref} className="hover:text-white">{ORG.phone}</a>
              </li>
              <li className="flex gap-3">
                <i className="ri-mail-line text-tech-teal-300 mt-0.5" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <a href={`mailto:${ORG.email}`} className="hover:text-white break-all">{ORG.email}</a>
                  <a href={`mailto:${ORG.emailInfo}`} className="hover:text-white break-all">{ORG.emailInfo}</a>
                </span>
              </li>
            </ul>
            <div className="flex gap-2 mt-6">
              {ORG.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LDII on ${s.label}`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-tech-teal-500 hover:text-ldii-navy flex items-center justify-center transition-colors"
                >
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-white/65">
          <p>© {new Date().getFullYear()} {ORG.name}{copy.main.text2}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link to="/privacy-policy" className="hover:text-white">{copy.main.text3}</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white">{copy.main.text4}</Link></li>
            <li><Link to="/accessibility" className="hover:text-white">{copy.main.text5}</Link></li>
            <li><Link to="/faq" className="hover:text-white">{copy.main.text6}</Link></li>
            <li><Link to="/sitemap" className="hover:text-white">{copy.main.text7}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
