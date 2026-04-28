/* Shared primitives for the Playbook Social CA deck */

const TYPE_SCALE = {
  mega: 240,
  hero: 120,
  title: 88,
  titleMd: 64,
  titleSm: 48,
  lead: 32,
  body: 26,
  small: 22,
  label: 16,
};

const SPACING = {
  paddingTop: 140,
  paddingBottom: 100,
  paddingX: 100,
  titleGap: 56,
  itemGap: 32,
};

const CA = {
  blue: '#2687E9',
  blueDark: '#07266F',
  blueDeep: '#00084F',
  blueSemi: '#1B69C8',
  blueLight: '#5AADF1',
  blueInfo: '#00AFF0',
  blueLighter: '#D3F1FD',
  yellow: '#F9BD1D',
  yellowHover: '#FFCA3D',
  gold: '#FFB600',
  green: '#1B9B45',
  greenLighter: '#D9FBD3',
  greenDarker: '#075638',
  red: '#DB242A',
  fg: '#20262B',
  fg2: '#35414B',
  fgMuted: '#595959',
  white: '#FFFFFF',
  n50: '#F8F9FA',
  n100: '#F1F3F5',
  n200: '#E9ECEF',
  n300: '#DEE2E6',
  n400: '#ADB5BD',
  n500: '#6C757D',
  n600: '#495057',
  n700: '#343A40',
  n800: '#20262B',
  border: '#C9D3DD',
  bgSurface: '#F4F4F4',
  bgLight: '#EFF3F7',
};

/* Top chrome — slide label + slide number */
function SlideChrome({ chapter, label, num, dark }) {
  return (
    <div className="slide-chrome-top">
      <div>
        <span className="dot" />
        {chapter && <span style={{ marginRight: 16 }}>{chapter}</span>}
        {label && <span style={{ color: dark ? 'rgba(255,255,255,0.45)' : CA.n400 }}>{label}</span>}
      </div>
      <div className="meta-right">
        <span>Playbook Social × Brand Creative</span>
        <span style={{ margin: '0 14px', opacity: 0.4 }}>·</span>
        <span className="tnum">{num}</span>
      </div>
    </div>
  );
}

/* Conta Azul wordmark — minimal placeholder */
function CAWordmark({ color = CA.blue, height = 40 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 6,
      fontFamily: 'Raleway', fontWeight: 800, fontSize: height,
      color: color, letterSpacing: '-1.6px',
    }}>
      <span>conta</span>
      <span style={{ fontWeight: 800, color: color === CA.white ? CA.yellow : CA.yellow }}>·</span>
      <span style={{ fontWeight: 300 }}>azul</span>
    </div>
  );
}

/* Section divider — chapter slides */
function SectionDivider({ num, kicker, title, total = 9 }) {
  return (
    <div className="slide section-divider">
      <div style={{
        position: 'absolute', top: 56, left: 100, right: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 16, letterSpacing: 1.5,
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
      }}>
        <div>
          <span style={{
            display: 'inline-block', width: 10, height: 10, borderRadius: 999,
            background: CA.yellow, marginRight: 14, verticalAlign: 'middle',
          }} />
          CAPÍTULO {String(num).padStart(2,'0')} / {String(total).padStart(2,'0')}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.45)' }}>Playbook Social × Brand Creative</div>
      </div>

      <div style={{
        flex: 1, padding: '180px 100px 120px 100px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'end', gap: 80,
      }}>
        <div>
          <div style={{
            fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 28,
            letterSpacing: 4, textTransform: 'uppercase',
            color: CA.yellow, marginBottom: 40,
          }}>
            {kicker}
          </div>
          <h1 style={{
            fontFamily: 'Raleway', fontWeight: 300, fontSize: 120, lineHeight: '120px',
            letterSpacing: -3, color: CA.white, margin: 0, textWrap: 'balance',
          }}>
            {title}
          </h1>
        </div>
        <div style={{
          fontFamily: 'Ping Pong', fontWeight: 800,
          fontSize: 540, lineHeight: '480px', letterSpacing: -22,
          color: 'transparent', WebkitTextStroke: `2px ${CA.yellow}`,
          textAlign: 'right', alignSelf: 'end', marginBottom: -60,
        }}>
          {String(num).padStart(2, '0')}
        </div>
      </div>

      {/* Bottom-right brand mark */}
      <div style={{ position: 'absolute', left: 100, bottom: 56 }}>
        <CAWordmark color={CA.white} height={32} />
      </div>
    </div>
  );
}

/* Sun/asterisk decorative mark */
function SunMark({ size = 64, color = CA.yellow, points = 12 }) {
  const cx = size / 2, cy = size / 2, r = size * 0.5, ri = size * 0.2;
  const verts = [];
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const rad = i % 2 === 0 ? r : ri;
    verts.push(`${cx + Math.cos(a) * rad},${cy + Math.sin(a) * rad}`);
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={verts.join(' ')} fill={color} />
    </svg>
  );
}

/* Iconsax-style stroke icons (24x24) */
const Icon = {
  Check: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5l4 4L19 6.5" stroke={p.color||'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Clock: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
      <path d="M12 7v5l3 2" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  User: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
      <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Spark: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Stack: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
      <path d="M4 10h16M10 4v16" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
    </svg>
  ),
  Bolt: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  Filter: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <path d="M4 5h16l-6 8v6l-4 1v-7L4 5z" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  Calendar: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Target: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="5" stroke={p.color||'currentColor'} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="1.5" fill={p.color||'currentColor'}/>
    </svg>
  ),
  Warning: (p) => (
    <svg width={p.size||24} height={p.size||24} viewBox="0 0 24 24" fill="none">
      <path d="M12 4l9.5 16.5h-19L12 4z" stroke={p.color||'currentColor'} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M12 10v5M12 18v.01" stroke={p.color||'currentColor'} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

Object.assign(window, { TYPE_SCALE, SPACING, CA, SlideChrome, CAWordmark, SectionDivider, SunMark, Icon });
