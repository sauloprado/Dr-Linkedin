// TabBar — bottom navigation
function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', Icon: window.Icon.Home },
    { id: 'consultoria', label: 'Consultoria', Icon: window.Icon.Consultoria },
    { id: 'livro', label: 'Livro', Icon: window.Icon.Book },
    { id: 'sobre', label: 'Sobre', Icon: window.Icon.Info },
    { id: 'contato', label: 'Contato', Icon: window.Icon.Mail },
  ];

  return (
    <div className="tabbar">
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            className={`tabbar-item ${isActive ? 'active' : ''}`}
            onClick={() => onChange(t.id)}
          >
            <t.Icon size={20} filled={isActive} />
            <span className="tabbar-item-label" style={{ fontSize: 9 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

window.TabBar = TabBar;
