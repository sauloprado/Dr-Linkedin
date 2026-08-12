// App shell — device frame + navigation
const { useState, useEffect } = React;

function StatusBar() {
  return (
    <div className="device-statusbar">
      <span>9:41</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
          <rect x="0" y="7" width="3" height="4" rx="0.6" fill="currentColor"/>
          <rect x="4.5" y="5" width="3" height="6" rx="0.6" fill="currentColor"/>
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" fill="currentColor"/>
          <rect x="13.5" y="0" width="3" height="11" rx="0.6" fill="currentColor"/>
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M8 3c2 0 3.8.8 5.2 2l1-1A8 8 0 001.8 4l1 1C4.2 3.8 6 3 8 3z" fill="currentColor"/>
          <path d="M8 6c1.3 0 2.4.5 3.2 1.3l1-1A6 6 0 003.8 6.3l1 1C5.6 6.5 6.7 6 8 6z" fill="currentColor"/>
          <circle cx="8" cy="9.5" r="1.3" fill="currentColor"/>
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" strokeOpacity="0.4"/>
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor"/>
          <path d="M23 4v4c.7-.3 1.3-1 1.3-2s-.6-1.7-1.3-2z" fill="currentColor" fillOpacity="0.5"/>
        </svg>
      </span>
    </div>
  );
}

const PLATFORM_URL = 'https://www.linkedin.com/sales/ssi';

function App() {
  const [tab, setTab] = useState(() => {
    return localStorage.getItem('drlinkedin.tab') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('drlinkedin.tab', tab);
  }, [tab]);

  const openPlatform = () => window.open(PLATFORM_URL, '_blank', 'noopener');

  return (
    <div className="device">
      <div className="device-notch" />
      <StatusBar />

      <div className="screen" key={tab}>
        {tab === 'home' && <window.HomeScreen />}
        {tab === 'consultoria' && <window.ConsultoriaScreen />}
        {tab === 'livro' && <window.LivroScreen />}
        {tab === 'sobre' && <window.SobreScreen />}
        {tab === 'contato' && <window.ContatoScreen onPlatform={openPlatform} />}

        <window.TabBar active={tab} onChange={setTab} onSSI={openPlatform} />
      </div>

      <div className="device-home-indicator" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
