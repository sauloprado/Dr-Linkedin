// Contato — canais, informações, CTA plataforma
function ContatoScreen({ onPlatform }) {
  const { LinkedIn, Instagram, Globe, WhatsApp, Mail, Arrow } = window.Icon;

  const channels = [
    {
      Icon: LinkedIn,
      title: 'LinkedIn',
      subtitle: 'Acompanhe atualizações e conteúdos',
      href: 'https://www.linkedin.com/in/alessandrofv/',
    },
    {
      Icon: Instagram,
      title: 'Instagram',
      subtitle: 'Dicas diárias e bastidores',
      href: 'https://www.instagram.com/dr_linkedin/',
    },
    {
      Icon: Globe,
      title: 'Website',
      subtitle: 'Conheça o site oficial e os serviços',
      href: 'https://drlinkedin.com.br',
    },
    {
      Icon: WhatsApp,
      title: 'WhatsApp',
      subtitle: '(71) 99413-3180',
      href: 'https://api.whatsapp.com/send?phone=5571994133180&text=Ol%C3%A1%2C%20venho%20do%20App%20Dr.%20LinkedIn!',
    },
    {
      Icon: Mail,
      title: 'E-mail',
      subtitle: 'contato@drlinkedin.com.br',
      href: 'mailto:contato@drlinkedin.com.br',
    },
  ];

  return (
    <div className="screen-scroll screen-enter">
      {/* Header */}
      <div style={{ padding: '64px 28px 24px' }}>
        <h1 className="serif-display" style={{
          fontSize: 44,
          margin: '0 0 10px',
          color: 'var(--gold-400)',
          lineHeight: 1,
        }}>
          Contato
        </h1>
        <p style={{
          fontSize: 14,
          color: 'var(--text-primary)',
          margin: 0,
          lineHeight: 1.5,
        }}>
          Entre em contato e conheça os canais<br/>do Dr. LinkedIn
        </p>
      </div>

      <hr className="divider" style={{ margin: '0 28px' }} />

      {/* Conecte-se */}
      <div style={{ padding: '24px 28px 8px' }}>
        <h2 className="serif-heading" style={{
          fontSize: 22,
          color: 'var(--text-primary)',
          margin: '0 0 10px',
          fontWeight: 600,
        }}>
          Conecte-se conosco
        </h2>
        <p style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          margin: '0 0 24px',
          lineHeight: 1.55,
        }}>
          Estamos prontos para ajudar você a transformar seu LinkedIn em oportunidades de negócio com autoridade executiva.
        </p>
      </div>

      {/* Redes e canais */}
      <div style={{ padding: '0 28px 24px' }}>
        <h3 className="serif-heading" style={{
          fontSize: 19,
          color: 'var(--gold-400)',
          margin: '0 0 14px',
          fontWeight: 600,
        }}>
          Redes e canais
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {channels.map(c => (
            <a key={c.title}
               href={c.href}
               target="_blank"
               rel="noopener noreferrer"
               className="card-link">
              <div className="card-link-icon">
                <c.Icon size={20} />
              </div>
              <div className="card-link-body">
                <div className="card-link-title">{c.title}</div>
                <div className="card-link-subtitle">{c.subtitle}</div>
              </div>
              <div className="card-link-arrow">
                <Arrow size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Informações */}
      <div style={{ padding: '8px 28px 20px' }}>
        <h3 className="serif-heading" style={{
          fontSize: 19,
          color: 'var(--gold-400)',
          margin: '0 0 14px',
          fontWeight: 600,
        }}>
          Informações
        </h3>

        <div className="card" style={{ padding: '4px 20px' }}>
          <div className="info-row">
            <div className="info-label">Localização</div>
            <div className="info-value">Salvador, Bahia — Brasil</div>
          </div>
          <div className="info-row">
            <div className="info-label">Especialidade</div>
            <div className="info-value">Consultoria em LinkedIn e social selling</div>
          </div>
          <div className="info-row">
            <div className="info-label">Experiência</div>
            <div className="info-value">Mais de 20 anos em vendas e prospecção</div>
          </div>
        </div>
      </div>

      {/* CTA plataforma */}
      <div style={{ padding: '12px 28px 28px' }}>
        <div className="card" style={{
          padding: 20,
          marginBottom: 16,
          borderColor: 'rgba(212, 165, 58, 0.25)',
        }}>
          <p style={{
            fontSize: 13.5,
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: 1.55,
          }}>
            <span style={{ color: 'var(--gold-400)', fontWeight: 600 }}>
              Quer saber mais?
            </span>{' '}
            Acesse a plataforma ou acompanhe os canais para conhecer serviços, cursos e conteúdos.
          </p>
        </div>

        <button className="btn-gold" onClick={onPlatform}>
          Acessar plataforma
        </button>
      </div>
    </div>
  );
}

window.ContatoScreen = ContatoScreen;
