// Home — retrato rotativo + CTA
const HERO_VARIANTS = [
  {
    id: 'chair',
    image: 'assets/alessandro-hero.png',
    objectPosition: 'center 18%',
    heading: 'Transforme o seu\nLinkedIn em uma\nMáquina de Vendas',
    body: 'Aprenda a fazer negócios pelo LinkedIn com mais autoridade na sua área',
  },
  {
    id: 'casual',
    image: 'assets/alessandro-casual.png',
    objectPosition: 'center 22%',
    heading: 'Transforme contatos\nem contratos',
    body: 'Método comprovado de social selling para profissionais que querem gerar negócios de verdade.',
  },
  {
    id: 'portrait',
    image: 'assets/alessandro-portrait.png',
    objectPosition: 'center 25%',
    heading: 'Autoridade Executiva\nno LinkedIn',
    body: 'Mais de 20 anos em vendas, agora ao seu lado para elevar sua presença digital.',
  },
];

function HomeScreen({ onStart }) {
  // escolhe uma variante por abertura (session-based)
  const [variant] = React.useState(() => {
    const key = 'drlinkedin.hero.last';
    const lastIdx = parseInt(sessionStorage.getItem(key) ?? '-1', 10);
    const nextIdx = (lastIdx + 1) % HERO_VARIANTS.length;
    sessionStorage.setItem(key, String(nextIdx));
    return HERO_VARIANTS[nextIdx];
  });

  return (
    <div className="screen-scroll screen-enter">
      <div style={{
        position: 'relative',
        width: '100%',
        height: 440,
        overflow: 'hidden',
      }}>
        <img
          src={variant.image}
          alt="Alessandro Feijó"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: variant.objectPosition,
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15,27,46,0) 55%, rgba(15,27,46,0.55) 80%, rgba(15,27,46,1) 100%)',
        }} />
      </div>

      <div style={{
        padding: '4px 32px 32px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        marginTop: -40,
      }}>
        <h1 className="serif-display" style={{
          fontSize: 40,
          margin: '0 0 22px',
          color: 'var(--text-primary)',
          lineHeight: 1,
          letterSpacing: '-0.015em',
        }}>
          Dr. LinkedIn
        </h1>

        <h2 className="serif-heading" style={{
          fontSize: 26,
          lineHeight: 1.15,
          color: 'var(--gold-400)',
          margin: '0 0 18px',
          fontWeight: 600,
          letterSpacing: '-0.005em',
          whiteSpace: 'pre-line',
        }}>
          {variant.heading}
        </h2>

        <p style={{
          fontSize: 14.5,
          lineHeight: 1.55,
          color: 'var(--text-secondary)',
          margin: '0 0 32px',
          maxWidth: 280,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {variant.body}
        </p>

        <button className="btn-gold" onClick={onStart}>
          Começar
        </button>

        <div className="label-micro" style={{ marginTop: 26 }}>
          Especialista em LinkedIn desde 2009
        </div>
      </div>
    </div>
  );
}

window.HomeScreen = HomeScreen;
