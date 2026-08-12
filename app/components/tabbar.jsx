// TabBar — navegação inferior. SSI é um item em destaque (cor dourada) que abre a plataforma.
function TabBar({ active, onChange, onSSI }) {
  const items = [
    { id: 'home', label: 'Home', Icon: window.Icon.Home },
    { id: 'consultoria', label: 'Consultoria', Icon: window.Icon.Consultoria },
    { id: '__ssi', label: 'SSI', Icon: window.Icon.LinkedIn, ssi: true },
    { id: 'livro', label: 'Livro', Icon: window.Icon.Book },
    { id: 'sobre', label: 'Sobre', Icon: window.Icon.Info },
    { id: 'contato', label: 'Contato', Icon: window.Icon.Mail },
  ];

  return (
    <div className="tabbar">
      {items.map(t => {
        if (t.ssi) {
          return (
            <button
              key={t.id}
              className="tabbar-item tabbar-ssi-soft"
              onClick={onSSI}
              aria-label="Acessar a plataforma SSI"
            >
              <t.Icon size={20} />
              <span className="tabbar-item-label" style={{ fontSize: 9 }}>{t.label}</span>
            </button>
          );
        }
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
