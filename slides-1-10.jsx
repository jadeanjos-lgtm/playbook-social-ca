/* Slides 1-10 */

/* ============== 01 — COVER ============== */
function SlideCover() {
  return (
    <div className="slide" style={{ background: CA.blueDark, color: CA.white }}>
      {/* decorative */}
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 900, height: 900,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,135,233,0.55) 0%, rgba(7,38,111,0) 70%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -300, left: -150, width: 800, height: 800,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,175,240,0.35) 0%, rgba(7,38,111,0) 70%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      {/* top chrome */}
      <div style={{
        position: 'absolute', top: 56, left: 100, right: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <CAWordmark color={CA.white} height={32} />
        <div style={{
          fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 16, letterSpacing: 2,
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
        }}>
          Documento Interno · v1.0 · Abr 2026
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 100px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 18, marginBottom: 56,
          padding: '12px 26px', borderRadius: 900, alignSelf: 'flex-start',
          background: 'rgba(249,189,29,0.14)', border: `1px solid ${CA.yellow}`,
          color: CA.yellow, fontWeight: 700, fontSize: 20, letterSpacing: -0.2,
        }}>
          <SunMark size={22} color={CA.yellow} points={8} />
          Playbook Operacional
        </div>

        <h1 style={{
          fontFamily: 'Raleway', fontWeight: 300, fontSize: 168, lineHeight: '160px',
          letterSpacing: -5, color: CA.white, margin: 0, maxWidth: 1500,
        }}>
          Social <strong style={{ fontWeight: 800, fontStyle: 'italic' }}>×</strong>{' '}
          <strong style={{ fontWeight: 800, color: CA.yellow }}>Brand</strong> Creative
        </h1>
        <div style={{
          fontFamily: 'Ping Pong', fontWeight: 300, fontSize: 44, lineHeight: '56px',
          letterSpacing: -0.8, color: 'rgba(255,255,255,0.85)', marginTop: 36, maxWidth: 1300,
        }}>
          Como entregar <strong style={{ fontWeight: 800, color: CA.white }}>15 posts/semana</strong> com
          previsibilidade, sem queimar o time.
        </div>
      </div>

      {/* bottom strip */}
      <div style={{
        position: 'absolute', bottom: 56, left: 100, right: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        color: 'rgba(255,255,255,0.7)', fontFamily: 'Ping Pong', fontSize: 20,
      }}>
        <div style={{ display: 'flex', gap: 80 }}>
          <div>
            <div style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Audiência</div>
            <div style={{ fontWeight: 700, color: CA.white, fontSize: 22 }}>Time Social + Brand Creative</div>
          </div>
          <div>
            <div style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Duração</div>
            <div style={{ fontWeight: 700, color: CA.white, fontSize: 22 }}>~20 min</div>
          </div>
          <div>
            <div style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Capítulos</div>
            <div style={{ fontWeight: 700, color: CA.white, fontSize: 22 }}>9</div>
          </div>
        </div>
        <div style={{ fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
          → Use as setas
        </div>
      </div>
    </div>
  );
}

/* ============== 02 — AGENDA ============== */
function SlideAgenda() {
  const chapters = [
    ['01', 'O Problema', 'Por que o processo atual não escala'],
    ['02', 'A Solução', 'Três alavancas que destravam'],
    ['03', 'Sistema de Scores', 'Três faixas de complexidade'],
    ['04', 'O Mix Semanal', '60 / 27 / 13 ao longo da semana'],
    ['05', 'O Fluxo', 'Sete etapas, do post à publicação'],
    ['06', 'Responsabilidades', 'RACI por etapa'],
    ['07', 'Automação & IA', 'Três camadas que aceleram'],
    ['08', 'Rituais & Métricas', 'Cadência operacional'],
    ['09', 'Implementação', '4 semanas para rodar'],
  ];
  return (
    <div className="slide">
      <SlideChrome chapter="AGENDA" label="" num="02 / 30" />
      <div className="slide-body" style={{ padding: '160px 100px 100px 100px' }}>
        <div className="row" style={{ gap: 80, alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 480px', position: 'sticky', top: 0 }}>
            <div className="deck-eyebrow">Agenda</div>
            <h1 className="deck-title-md" style={{ fontSize: 80, lineHeight: '88px' }}>
              Nove<br/><strong>capítulos.</strong><br/>Uma história.
            </h1>
            <div style={{ marginTop: 40, fontFamily: 'Ping Pong', fontSize: 22, lineHeight: '32px', color: CA.fg2, maxWidth: 420 }}>
              Os títulos deste deck contam a história inteira — leia em ordem e você entende o playbook só pelo sumário.
            </div>
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px' }}>
            {chapters.map(([num, title, sub], i) => (
              <div key={num} style={{
                display: 'grid', gridTemplateColumns: '90px 1fr', alignItems: 'baseline',
                padding: '22px 0', borderBottom: `1px solid ${CA.border}`, columnGap: 20,
              }}>
                <div style={{
                  fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 32, color: CA.blue,
                  letterSpacing: -1.4, fontVariantNumeric: 'tabular-nums',
                }}>{num}</div>
                <div>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 30, lineHeight: '36px', color: CA.fg, letterSpacing: -0.8 }}>{title}</div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 400, fontSize: 19, lineHeight: '26px', color: CA.fgMuted, marginTop: 4 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 03 — Cap 01 ============== */
function SlideCap01() {
  return <SectionDivider num={1} kicker="O começo da história" title="O Problema" />;
}

/* ============== 04 — CENÁRIO HOJE ============== */
function SlideScenario() {
  const team = [
    { role: 'Coord. Social', n: 1, color: CA.blue },
    { role: 'Redatora', n: 1, color: CA.blueInfo },
    { role: 'Designer', n: 1, color: CA.yellow },
    { role: 'Coord. Design', n: 1, color: CA.blueDeep },
  ];
  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 01 — O PROBLEMA" label="Cenário hoje" num="04 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Hoje, no time</div>
        <h1 className="deck-title">
          Quatro pessoas, <strong>um designer</strong>,<br/>quinze posts por semana.
        </h1>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          {/* team */}
          <div>
            <div className="deck-label" style={{ marginBottom: 24 }}>Time atual · 4 pessoas</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {team.map(t => (
                <div key={t.role} style={{
                  background: CA.white, border: `1px solid ${CA.border}`,
                  borderRadius: '24px 24px 48px 0', padding: '32px 24px',
                  boxShadow: '0 1.64px 24.6px rgba(3,78,152,0.10)',
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: 999,
                    background: t.color, opacity: 0.15, marginBottom: 24,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon.User size={36} color={t.color} />
                  </div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 22, color: CA.fg, letterSpacing: -0.4 }}>{t.role}</div>
                  <div style={{ fontFamily: 'Ping Pong', fontSize: 18, color: CA.fgMuted, marginTop: 4 }}>{t.n} pessoa</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: '32px 36px', background: CA.bgLight, borderRadius: 16, borderLeft: `4px solid ${CA.yellow}` }}>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 24, color: CA.fg, marginBottom: 8 }}>
                Não é falta de esforço.
              </div>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 22, color: CA.fg2, lineHeight: '32px' }}>
                É falta de sistema — sem SLA formalizado, sem classificação prévia, sem fila controlada.
              </div>
            </div>
          </div>

          {/* metrics */}
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              { num: '15', label: 'posts por semana', sub: 'meta atual' },
              { num: '3', label: 'posts por dia', sub: 'distribuição linear' },
              { num: '1', label: 'designer de execução', sub: 'para todos os scores' },
              { num: '0', label: 'SLAs formalizados', sub: 'tempo é negociado caso a caso' },
            ].map((m, i) => (
              <div key={i} style={{
                background: i === 3 ? '#FFF6E6' : CA.white,
                border: `1px solid ${i === 3 ? CA.yellow : CA.border}`,
                borderRadius: 16, padding: '24px 32px',
                display: 'grid', gridTemplateColumns: '140px 1fr', alignItems: 'center', gap: 24,
              }}>
                <div style={{
                  fontFamily: 'Ping Pong', fontWeight: 800,
                  fontSize: 96, lineHeight: '88px', letterSpacing: -3,
                  color: i === 3 ? CA.yellow : CA.blue,
                }}>{m.num}</div>
                <div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 22, color: CA.fg }}>{m.label}</div>
                  <div style={{ fontFamily: 'Ping Pong', fontSize: 18, color: CA.fgMuted, marginTop: 4 }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 05 — GARGALO ============== */
function SlideBottleneck() {
  const incoming = [
    { label: 'Quote card', score: 1, color: CA.blueInfo },
    { label: 'Datas comemorativas', score: 1, color: CA.blueInfo },
    { label: 'Carrossel padrão', score: 1, color: CA.blueInfo },
    { label: 'Repost reels', score: 1, color: CA.blueInfo },
    { label: 'Adaptação canal', score: 3, color: CA.blue },
    { label: 'Lançamento feature', score: 3, color: CA.blue },
    { label: 'Webinar / live', score: 3, color: CA.blue },
    { label: 'Campanha temática', score: 5, color: CA.blueDeep },
    { label: 'Direção de arte', score: 5, color: CA.blueDeep },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 01 — O PROBLEMA" label="O gargalo" num="05 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow" style={{ color: CA.red }}>O gargalo central</div>
        <h1 className="deck-title">
          Tudo entra na <strong style={{ color: CA.red }}>mesma fila</strong>,<br/>
          com complexidade misturada.
        </h1>

        <div style={{ marginTop: 64, position: 'relative', height: 480 }}>
          {/* Funnel diagram */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 380px 80px 1fr', alignItems: 'center', height: '100%' }}>
            {/* incoming chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-end', alignContent: 'center', maxHeight: 440 }}>
              {incoming.map((it, i) => (
                <div key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: CA.white, border: `1.5px solid ${it.color}`,
                  borderRadius: 900, padding: '10px 18px',
                  fontFamily: 'Ping Pong', fontWeight: 600, fontSize: 18, color: CA.fg,
                }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: it.color }} />
                  {it.label}
                </div>
              ))}
            </div>

            {/* arrows in */}
            <div style={{ display: 'flex', justifyContent: 'center', color: CA.n400 }}>
              <Icon.ArrowRight size={56} color={CA.n400} />
            </div>

            {/* the queue */}
            <div style={{
              background: '#FFF3CC', border: `2px dashed ${CA.yellow}`,
              borderRadius: 24, padding: 32, height: '100%',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12,
            }}>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: '#8A5C00' }}>
                Fila única · sem priorização
              </div>
              <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 56, color: CA.fg, letterSpacing: -1.6, textAlign: 'center', lineHeight: '60px' }}>
                Designer<br/>solo
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                {[CA.blueInfo, CA.blue, CA.blueDeep, CA.blueInfo, CA.blueDeep, CA.blue].map((c, i) => (
                  <div key={i} style={{ width: 22, height: 30, borderRadius: 4, background: c, opacity: 0.85 }} />
                ))}
              </div>
              <Icon.Warning size={32} color={CA.red} />
            </div>

            {/* arrows out */}
            <div style={{ display: 'flex', justifyContent: 'center', color: CA.n400 }}>
              <Icon.ArrowRight size={56} color={CA.n400} />
            </div>

            {/* output */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <div style={{
                background: CA.bgLight, borderRadius: 16, padding: '20px 28px',
                fontFamily: 'Ping Pong', fontSize: 20, color: CA.fg2, maxWidth: 420,
              }}>
                <strong style={{ color: CA.fg }}>Impossível priorizar.</strong> Quote card disputa com campanha.
              </div>
              <div style={{
                background: CA.bgLight, borderRadius: 16, padding: '20px 28px',
                fontFamily: 'Ping Pong', fontSize: 20, color: CA.fg2, maxWidth: 420,
              }}>
                <strong style={{ color: CA.fg }}>Impossível planejar.</strong> Tudo é urgente, nada é previsível.
              </div>
              <div style={{
                background: CA.bgLight, borderRadius: 16, padding: '20px 28px',
                fontFamily: 'Ping Pong', fontSize: 20, color: CA.fg2, maxWidth: 420,
              }}>
                <strong style={{ color: CA.fg }}>Impossível escalar.</strong> Sem sistema, mais volume = mais caos.
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48, fontFamily: 'Ping Pong', fontSize: 24, color: CA.fg2, lineHeight: '34px' }}>
          <strong style={{ color: CA.fg }}>Esse é o ponto que vamos atacar.</strong> Sem classificação prévia, não há fluxo possível.
        </div>
      </div>
    </div>
  );
}

/* ============== 06 — Cap 02 ============== */
function SlideCap02() {
  return <SectionDivider num={2} kicker="Três alavancas, juntas" title="A Solução" />;
}

/* ============== 07 — TRÊS ALAVANCAS ============== */
function SlideThreeLevers() {
  const levers = [
    {
      n: '01', icon: Icon.Filter,
      title: 'Score de esforço',
      lead: 'Classificar antes de produzir',
      body: 'Cada post recebe score 1, 3 ou 5 antes de entrar na fila. Sem classificação, sem produção.',
      tag: '1 · 3 · 5',
    },
    {
      n: '02', icon: Icon.Calendar,
      title: 'Mix semanal',
      lead: 'Distribuir o esforço na semana',
      body: 'Nunca dois Score 5 no mesmo dia. O mix 60/27/13 espalha trabalho pesado e leve com ritmo.',
      tag: '60 / 27 / 13',
    },
    {
      n: '03', icon: Icon.Stack,
      title: 'Fluxo + RACI + SLAs',
      lead: 'Cada etapa com dono e prazo',
      body: 'Sete etapas claras, uma matriz RACI por papel, SLAs de aprovação por score. Silêncio aprova.',
      tag: '7 etapas',
    },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 02 — A SOLUÇÃO" label="Três alavancas" num="07 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">A solução em uma frase</div>
        <h1 className="deck-title-md">
          Três alavancas que <strong>destravam a produção</strong><br/>
          sem contratar e sem reduzir a meta.
        </h1>

        <div style={{ marginTop: 96, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {levers.map((l, i) => (
            <div key={l.n} style={{
              background: CA.white, border: `1px solid ${CA.border}`,
              borderRadius: '24px 24px 80px 0', padding: '40px 40px 48px 40px',
              boxShadow: '0 2.4px 36px rgba(3,78,152,0.08)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 220, lineHeight: '180px',
                letterSpacing: -8, color: CA.bgLight, position: 'absolute',
                top: -30, right: -10, pointerEvents: 'none',
              }}>{l.n}</div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, background: CA.blueLighter,
                  color: CA.blueSemi, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 32,
                }}>
                  <l.icon size={32} color={CA.blueSemi} />
                </div>

                <div className="deck-pill" style={{ marginBottom: 20 }}>{l.tag}</div>
                <h2 style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 44, lineHeight: '48px', letterSpacing: -1.2, color: CA.fg, margin: '0 0 16px 0' }}>
                  {l.title}
                </h2>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 22, color: CA.blue, marginBottom: 16 }}>
                  {l.lead}
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontSize: 20, lineHeight: '28px', color: CA.fg2 }}>
                  {l.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, fontFamily: 'Ping Pong', fontSize: 22, color: CA.fgMuted }}>
          O resto do playbook detalha cada uma dessas três.
        </div>
      </div>
    </div>
  );
}

/* ============== 08 — Cap 03 ============== */
function SlideCap03() {
  return <SectionDivider num={3} kicker="Alavanca 01 / 03" title="Sistema de Scores" />;
}

/* ============== Score lane shared ============== */
function ScoreLane({ num, name, lane, color, soft, dark, designTime, sla, examples, note, tag, num30 }) {
  return (
    <div className="slide">
      <SlideChrome chapter={`CAP. 03 — SCORES · ${name.toUpperCase()}`} label={lane} num={num30} />
      <div className="slide-body">
        <div className="deck-eyebrow" style={{ color: dark }}>{lane}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 96, alignItems: 'flex-start', marginTop: 8 }}>
          {/* Left — title + huge score */}
          <div>
            <h1 style={{ fontFamily: 'Raleway', fontWeight: 300, fontSize: 96, lineHeight: '100px', letterSpacing: -2.6, color: CA.fg, margin: 0 }}>
              Score <strong style={{ fontWeight: 800, color: dark }}>{num}</strong>
            </h1>
            <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 56, lineHeight: '60px', letterSpacing: -1.4, color: CA.fg, marginTop: 8 }}>
              {name}
            </div>

            <div style={{ marginTop: 56 }}>
              <div className="deck-label" style={{ marginBottom: 10 }}>O que é</div>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 26, lineHeight: '36px', color: CA.fg2, maxWidth: 600 }}>
                {note}
              </div>
            </div>

            <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {tag.map((t, i) => (
                <div key={i} className="deck-pill" style={{ background: soft, color: dark }}>{t}</div>
              ))}
            </div>
          </div>

          {/* Right — stats stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: color, color: CA.white, borderRadius: '24px 24px 80px 0',
              padding: 40, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.9 }}>
                Tempo de design
              </div>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 88, lineHeight: '88px', letterSpacing: -2.6, marginTop: 4 }}>
                {designTime}
              </div>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 20, opacity: 0.9, marginTop: 4 }}>por peça</div>
            </div>

            <div style={{
              background: CA.white, border: `1px solid ${CA.border}`, borderRadius: 16, padding: 32,
              display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 24,
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: 999, background: soft,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon.Clock size={36} color={dark} />
              </div>
              <div>
                <div className="deck-label" style={{ marginBottom: 4 }}>SLA de entrega</div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 36, color: CA.fg, letterSpacing: -1 }}>
                  {sla}
                </div>
              </div>
            </div>

            <div style={{
              background: CA.bgLight, border: `1px solid ${CA.border}`, borderRadius: 16, padding: 32,
            }}>
              <div className="deck-label" style={{ marginBottom: 16 }}>Exemplos típicos</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {examples.map((e, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontFamily: 'Ping Pong', fontSize: 22, color: CA.fg2, lineHeight: '30px' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: dark, marginTop: 11, flex: '0 0 8px' }}/>
                    <span><strong style={{ fontWeight: 700, color: CA.fg }}>{e.t}</strong>{e.s ? ` — ${e.s}` : ''}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 09 — SCORE 1 ============== */
function SlideScore1() {
  return (
    <ScoreLane
      num="1"
      name="Fast Lane"
      lane="A trilha do volume"
      color={CA.blueInfo}
      soft="#D6F2FB"
      dark="#006D9C"
      designTime="≤ 30 min"
      sla="4h úteis após copy aprovada"
      tag={['IA + template', 'Volume', 'Recorrência']}
      examples={[
        { t: 'Datas comemorativas', s: 'template fechado' },
        { t: 'Quote cards', s: 'até 2 adaptações de copy' },
        { t: 'Reposts e cards de aviso' },
      ]}
      note={'Template pronto no Figma, até duas adaptações de copy. Pode rodar via IA combinada com template. Aqui a gente prioriza volume e consistência.'}
      num30="09 / 30"
    />
  );
}

/* ============== 10 — SCORE 3 ============== */
function SlideScore3() {
  return (
    <ScoreLane
      num="3"
      name="Standard Lane"
      lane="A trilha do dia a dia"
      color={CA.blue}
      soft={CA.blueLighter}
      dark={CA.blueSemi}
      designTime="1,5 – 2,5h"
      sla="1 dia útil"
      tag={['Briefing completo', 'Composição', 'Adaptação']}
      examples={[
        { t: 'Lançamento de feature', s: 'adaptação por canal' },
        { t: 'Webinar / live', s: 'card de divulgação' },
        { t: 'Adaptações de campanha existente' },
      ]}
      note={'Novo arranjo de elementos, adaptação de tipografia, composição a partir de ativos existentes. Exige briefing de copy completo antes de começar.'}
      num30="10 / 30"
    />
  );
}

Object.assign(window, {
  SlideCover, SlideAgenda, SlideCap01, SlideScenario, SlideBottleneck,
  SlideCap02, SlideThreeLevers, SlideCap03, SlideScore1, SlideScore3,
  ScoreLane,
});
