// Consultoria — planos com CTA WhatsApp
const WA_BASE = 'https://api.whatsapp.com/send?phone=5531971863031&text=';

const PLANS = [
  {
    id: 'formacao',
    tag: 'Mais procurado',
    title: 'Formação Consultor LinkedIn',
    summary: 'Programa completo para quem quer transformar o LinkedIn em máquina de vendas e se tornar referência na área.',
    features: [
      'Posicionamento profissional estratégico',
      'Prospecção corporativa avançada',
      'Geração de leads qualificados',
      'Certificado de conclusão',
    ],
    cta: 'Falar sobre a Formação',
    msg: 'Olá, tenho interesse na Formação Consultor LinkedIn.',
  },
  {
    id: 'negocios',
    title: 'LinkedIn para Negócios',
    summary: 'Para equipes de vendas e marketing que querem dominar social selling na prática.',
    features: [
      'Algoritmo do LinkedIn',
      'Abordagem de vendas com alta conversão',
      'Construção de autoridade',
      'Plano de ação individual',
    ],
    cta: 'Falar sobre LinkedIn para Negócios',
    msg: 'Olá, tenho interesse no curso LinkedIn para Negócios.',
  },
  {
    id: 'mentoria',
    title: 'Mentoria Individual',
    summary: 'Acompanhamento personalizado com método proprietário para acelerar seus resultados no LinkedIn.',
    features: [
      'Encontros 1:1',
      'Diagnóstico completo do perfil',
      'Plano estratégico personalizado',
      'Acompanhamento de resultados',
    ],
    cta: 'Falar sobre a Mentoria',
    msg: 'Olá, tenho interesse na Mentoria Individual.',
  },
  {
    id: 'combo',
    tag: 'Mega Combo',
    title: 'Otimização + Page + Mentoria',
    summary: 'Pacote completo: perfil otimizado, LinkedIn Page configurada e mentoria individual para destravar vendas.',
    features: [
      'Otimização completa do perfil',
      'Criação da LinkedIn Page da empresa',
      'Mentoria individualizada',
      'Estratégia de visibilidade',
    ],
    cta: 'Falar sobre o Mega Combo',
    msg: 'Olá, tenho interesse no Mega Combo.',
  },
];

function ConsultoriaScreen() {
  const talk = (msg) => window.open(WA_BASE + encodeURIComponent(msg), '_blank', 'noopener');

  return (
    <div className="screen-scroll screen-enter">
      <div style={{ padding: '64px 28px 20px' }}>
        <div className="label-micro" style={{ marginBottom: 10, color: 'var(--gold-400)' }}>
          Serviços & Planos
        </div>
        <h1 className="serif-display" style={{
          fontSize: 44,
          margin: '0 0 8px',
          color: 'var(--text-primary)',
          lineHeight: 1,
        }}>
          Consultoria
        </h1>
        <p style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          margin: 0,
          lineHeight: 1.55,
        }}>
          Escolha o caminho certo para transformar seu LinkedIn. Todos os planos incluem atendimento direto com o Dr. LinkedIn.
        </p>
      </div>

      <hr className="divider" style={{ margin: '0 28px' }} />

      <div style={{ padding: '22px 28px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {PLANS.map(p => (
          <div key={p.id} className="card" style={{
            padding: 22,
            position: 'relative',
            borderColor: p.tag ? 'rgba(212,165,58,0.3)' : 'var(--card-border)',
          }}>
            {p.tag && (
              <div style={{
                display: 'inline-block',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--navy-900)',
                background: 'var(--gold-400)',
                padding: '4px 10px',
                borderRadius: 4,
                marginBottom: 12,
              }}>
                {p.tag}
              </div>
            )}
            <h3 className="serif-heading" style={{
              fontSize: 22,
              color: 'var(--text-primary)',
              margin: '0 0 12px',
              fontWeight: 600,
              lineHeight: 1.25,
            }}>
              {p.title}
            </h3>
            <p style={{
              fontSize: 13.5,
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              margin: '0 0 14px',
            }}>
              {p.summary}
            </p>

            <ul className="bullet-list" style={{ marginBottom: 18 }}>
              {p.features.map((f, i) => (
                <li key={i} style={{ fontSize: 13 }}>{f}</li>
              ))}
            </ul>

            <button
              onClick={() => talk(p.msg)}
              style={{
                width: '100%',
                padding: '13px 18px',
                borderRadius: 10,
                border: '1px solid var(--hairline-strong)',
                background: 'transparent',
                color: 'var(--gold-400)',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212,165,58,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              {p.cta} →
            </button>
          </div>
        ))}

        <div style={{
          fontSize: 12,
          color: 'var(--text-muted)',
          textAlign: 'center',
          padding: '12px 8px',
          lineHeight: 1.6,
        }}>
          Atendimento humano pelo WhatsApp. Respondemos em até 24h em dias úteis.
        </div>
      </div>
    </div>
  );
}

window.ConsultoriaScreen = ConsultoriaScreen;
