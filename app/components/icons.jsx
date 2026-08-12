// Icons — shared across screens
// Simple, elegant line icons in current color.

const Icon = {
  Home: ({ size = 22, filled = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-9.5z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
        fill={filled ? 'currentColor' : 'none'} fillOpacity={filled ? 0.15 : 0}/>
    </svg>
  ),
  Info: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="8" r="1" fill="currentColor"/>
      <path d="M12 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Mail: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Arrow: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  LinkedIn: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="7.5" cy="8.5" r="1.3" fill="currentColor"/>
      <path d="M6.5 11v7M10.5 18v-4.5a2 2 0 014 0V18M10.5 11v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Instagram: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
  Globe: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  WhatsApp: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.2L3.5 20.5z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.2-2-1-1 .7c-.9-.4-1.7-1.2-2.1-2.1l.7-1-1-2L9 9.5z"
        fill="currentColor"/>
    </svg>
  ),
  Pin: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),

  Book: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 4.5A1.5 1.5 0 015.5 3H19a1 1 0 011 1v15a1 1 0 01-1 1H6a2 2 0 01-2-2V4.5z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M4 17.5A1.5 1.5 0 015.5 16H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M8 7h8M8 10h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Consultoria: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 12l4-2 4 2 4-2 4 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8 10V6a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="1.2" fill="currentColor"/>
    </svg>
  ),

  // 5 pilares — símbolos discretos
  PillarFoco: ({ size = 22, active = false }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="12" cy="12" r="3" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  PillarAutoridade: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2 2-2 2-2-2 2-2zM12 17l2 2-2 2-2-2 2-2zM3 12l2-2 2 2-2 2-2-2zM17 12l2-2 2 2-2 2-2-2z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  PillarVoz: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="9.5" y="3" width="5" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 12a6 6 0 0012 0M12 18v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  PillarRadar: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M12 12l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  ),
  PillarCofre: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M12 9.5v1M12 13.5v1M9.5 12h1M13.5 12h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
};

window.Icon = Icon;
