// Sobre — história, missão, especialidades, pilares
function SobreScreen() {
  const { PillarFoco, PillarAutoridade, PillarVoz, PillarRadar, PillarCofre } = window.Icon;
  const [activePillar, setActivePillar] = React.useState('foco');

  const pillars = [
    { id: 'foco', label: 'FOCO', Icon: PillarFoco },
    { id: 'autoridade', label: 'AUTORIDADE', Icon: PillarAutoridade },
    { id: 'voz', label: 'VOZ', Icon: PillarVoz },
    { id: 'radar', label: 'RADAR', Icon: PillarRadar },
    { id: 'cofre', label: 'COFRE', Icon: PillarCofre },
  ];

  return (
    <div className="screen-scroll screen-enter">
      {/* Header */}
      <div style={{ padding: '64px 28px 24px' }}>
        <h1 className="serif-display" style={{
          fontSize: 44,
          margin: '0 0 10px',
          color: 'var(--text-primary)',
          lineHeight: 1,
        }}>
          Sobre
        </h1>
        <p style={{
          fontSize: 14,
          color: 'var(--gold-400)',
          margin: 0,
          fontWeight: 500,
          lineHeight: 1.5,
        }}>
          Conheça a história do Dr. LinkedIn
        </p>
      </div>

      <hr className="divider" style={{ margin: '0 28px' }} />

      {/* Conteúdo */}
      <div style={{ padding: '24px 28px 28px' }}>
        <Section title="Nossa missão">
          Inspirar pessoas por meio de ensinamentos e insights a se transformarem em sua melhor versão profissional, usando o LinkedIn como ferramenta estratégica de negócios.
        </Section>

        <Section title="O que fazemos">
          Ensinamos um passo a passo comprovado para atrair compradores e visitantes produzindo menos conteúdo e gerando mais intenção comercial.
        </Section>

        <div style={{ marginBottom: 26 }}>
          <h3 className="serif-heading" style={{
            fontSize: 24,
            color: 'var(--gold-400)',
            margin: '0 0 14px',
            fontWeight: 600,
          }}>
            Especialidades
          </h3>
          <ul className="bullet-list">
            <li>Posicionamento profissional e autoridade</li>
            <li>Social selling estratégico</li>
            <li>Geração de leads qualificados</li>
            <li>Estratégia de conteúdo para LinkedIn</li>
          </ul>
        </div>

        <div style={{ marginBottom: 28 }}>
          <h3 className="serif-heading" style={{
            fontSize: 24,
            color: 'var(--gold-400)',
            margin: '0 0 14px',
            fontWeight: 600,
          }}>
            Por que escolher este método
          </h3>

          <div className="card" style={{ padding: 20 }}>
            <div style={{
              fontSize: 15,
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 8,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 19,
            }}>
              Método comprovado
            </div>
            <p style={{
              fontSize: 13.5,
              color: 'var(--text-secondary)',
              margin: 0,
              lineHeight: 1.55,
            }}>
              Estratégias testadas e validadas com foco em resultado comercial.
            </p>
          </div>
        </div>

        <div style={{
          fontSize: 11,
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginTop: 36,
          paddingBottom: 24,
        }}>
          © 2023 Dr. LinkedIn. Todos os direitos reservados.
        </div>
      </div>

      {/* Pilares — secondary strip (simbólica, não navega) */}
      <div style={{
        background: 'rgba(10, 20, 38, 0.6)',
        borderTop: '1px solid var(--hairline)',
        padding: '14px 8px 10px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}>
          {pillars.map(p => {
            const isActive = p.id === activePillar;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 5,
                  padding: '6px 2px',
                  color: isActive ? 'var(--gold-400)' : 'rgba(184, 180, 163, 0.45)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  flex: 1,
                }}
              >
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 24,
                    height: 2,
                    background: 'var(--gold-400)',
                    borderRadius: 1,
                  }} />
                )}
                <p.Icon size={22} active={isActive} />
                <span style={{
                  fontSize: 9,
                  letterSpacing: '0.14em',
                  fontWeight: isActive ? 600 : 500,
                }}>
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <h3 className="serif-heading" style={{
        fontSize: 24,
        color: 'var(--gold-400)',
        margin: '0 0 10px',
        fontWeight: 600,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 14,
        color: 'var(--text-primary)',
        lineHeight: 1.6,
        margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}

window.SobreScreen = SobreScreen;
