// Livro — LinkedIn Business
const BOOK_URL = 'https://www.amazon.com.br/LinkedIn-Business-Estrat%C3%A9gia-Transformar-Autoridade/dp/B0GTYRKXGJ/ref=tmm_pap_swatch_0';

function LivroScreen() {
  const { Arrow } = window.Icon;

  const open = () => window.open(BOOK_URL, '_blank', 'noopener');

  return (
    <div className="screen-scroll screen-enter">
      <div style={{ padding: '64px 28px 18px' }}>
        <div className="label-micro" style={{ marginBottom: 10, color: 'var(--gold-400)' }}>
          Livro · Alessandro Feijó
        </div>
        <h1 className="serif-display" style={{
          fontSize: 44,
          margin: '0 0 14px',
          color: 'var(--text-primary)',
          lineHeight: 1.05,
        }}>
          LinkedIn <em style={{ color: 'var(--gold-400)', fontStyle: 'italic', display: 'inline-block' }}>Business</em>
        </h1>
        <p style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          margin: 0,
          lineHeight: 1.5,
        }}>
          A estratégia completa para transformar autoridade digital em negócios reais.
        </p>
        <p style={{ fontSize: 13, color: 'var(--gold)', margin: '8px 0 0', fontStyle: 'italic' }}>
          Disponível em E-Book e Físico
        </p>
      </div>

      {/* Capa do livro — composição com fundo */}
      <div style={{
        position: 'relative',
        margin: '18px 28px 24px',
        padding: '30px 10px',
        borderRadius: 20,
        background: 'radial-gradient(ellipse at 50% 20%, rgba(212,165,58,0.18), transparent 60%), linear-gradient(180deg, var(--navy-800) 0%, var(--navy-900) 100%)',
        border: '1px solid var(--card-border)',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* glow behind */}
        <div style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: 40,
          background: 'radial-gradient(ellipse, rgba(212,165,58,0.25), transparent 70%)',
          filter: 'blur(10px)',
        }} />
        <img
          src="assets/book-cover.png"
          alt="Livro LinkedIn Business"
          style={{
            width: 190,
            height: 'auto',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.7), 0 10px 20px -5px rgba(0,0,0,0.4), -6px 0 0 rgba(255,255,255,0.04) inset',
            borderRadius: '3px 6px 6px 3px',
            transform: 'perspective(800px) rotateY(-6deg)',
          }}
        />
      </div>

      {/* Destaques */}
      <div style={{ padding: '0 28px 16px' }}>
        <h3 className="serif-heading" style={{
          fontSize: 20,
          color: 'var(--gold-400)',
          margin: '0 0 12px',
          fontWeight: 600,
        }}>
          O que você vai encontrar
        </h3>
        <ul className="bullet-list">
          <li>Como construir autoridade digital que gera vendas</li>
          <li>Estratégias de social selling testadas no mercado</li>
          <li>Geração de leads qualificados com menos esforço</li>
          <li>Prospecção corporativa com conversões altas</li>
        </ul>
      </div>

      {/* Citação/pitch */}
      <div style={{ padding: '8px 28px 20px' }}>
        <div className="card" style={{
          padding: 22,
          borderLeft: '3px solid var(--gold-400)',
          borderRadius: 12,
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 18,
            fontStyle: 'italic',
            lineHeight: 1.45,
            color: 'var(--text-primary)',
            margin: 0,
          }}>
            "O LinkedIn não é uma rede para buscar emprego — é um canal de negócios. Este livro mostra como."
          </p>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: 12,
            fontWeight: 500,
          }}>
            Alessandro Feijó · Dr. LinkedIn
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '12px 28px 32px' }}>
        <button className="btn-gold" onClick={open}>
          Comprar na Amazon
        </button>
        <div style={{
          textAlign: 'center',
          marginTop: 14,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          fontWeight: 500,
        }}>
          Disponível em e-book
        </div>
      </div>
    </div>
  );
}

window.LivroScreen = LivroScreen;
