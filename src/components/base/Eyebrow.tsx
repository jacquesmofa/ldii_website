/**
 * LDII signature label: a short "meridian" line joining two dots, North and South,
 * followed by the section label. Used above every section heading.
 */
export default function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? 'text-tech-teal-300' : 'text-tech-teal-800'}`}>
      <span className="flex items-center" aria-hidden="true">
        <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-tech-teal-300' : 'bg-tech-teal-800'}`} />
        <span className={`w-8 h-px ${light ? 'bg-tech-teal-300' : 'bg-tech-teal-800'}`} />
        <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-ldii-navy'}`} />
      </span>
      {children}
    </p>
  );
}
