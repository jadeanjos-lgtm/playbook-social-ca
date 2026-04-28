/* Slides 21-30 */

/* ============== 21 — RACI (interativa) ============== */
function SlideRaci() {
  // Note: per spec, cells cycle '' → R → A → C → I → ''.
  // The original 'RA' (R+A) defaults are kept on first render but cycling collapses them
  // into the simple 5-state cycle. RA cells render as a yellow-highlighted "R/A" badge.
  const initial = [
    ['01 · Ideação & pauta',          'RA', 'C',  'I',  'I'],
    ['02 · Conceituação (S5)',        'C',  'C',  'I',  'RA'],
    ['03 · Produção de copy',         'A',  'R',  'I',  'C'],
    ['04 · Produção de design',       'I',  'C',  'R',  'A'],
    ['05 · Aprovação',                'RA', 'C',  'I',  'A'],
    ['06 · Publicação',               'RA', 'I',  '',   'I'],
    ['07 · Métricas',                 'RA', 'I',  'I',  'C'],
  ];
  const cols = ['Coord. Social', 'Redatora', 'Designer', 'Coord. Design'];

  const [matrix, setMatrix] = React.useState(initial);

  // Cycle: '' → R → A → C → I → ''
  const next = v => {
    if (v === '' || v === '—') return 'R';
    if (v === 'R')  return 'A';
    if (v === 'A')  return 'C';
    if (v === 'C')  return 'I';
    if (v === 'I')  return '';
    if (v === 'RA') return 'C'; // RA collapses forward into the 5-state cycle
    return 'R';
  };

  const cycleCell = (rowIdx, colIdx) => {
    setMatrix(prev => prev.map((r, ri) => {
      if (ri !== rowIdx) return r;
      const copy = [...r];
      copy[colIdx + 1] = next(copy[colIdx + 1]);
      return copy;
    }));
  };

  const reset = () => setMatrix(initial);

  const Badge = ({ kind }) => {
    if (!kind || kind === '—') return <span className="b-na">—</span>;
    const map = { R: 'b-r', A: 'b-a', RA: 'b-ra', C: 'b-c', I: 'b-i' };
    return <span className={`badge ${map[kind]}`}>{kind === 'RA' ? 'R/A' : kind}</span>;
  };

  const isHi = v => v === 'R' || v === 'A' || v === 'RA';

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 06 — RESPONSABILIDADES" label="Matriz RACI" num="21 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Quem faz o quê em cada etapa</div>
        <h1 className="deck-title-md">
          A matriz <strong>RACI</strong> — <em style={{ fontStyle: 'italic', color: CA.blue, fontWeight: 800 }}>customizável.</em>
        </h1>

        <div style={{ marginTop: 32, background: CA.white, border: `1px solid ${CA.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <table className="raci">
            <thead style={{ background: CA.bgLight }}>
              <tr>
                <th>Etapa</th>
                {cols.map(c => <th key={c}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {matrix.map((r, i) => (
                <tr key={i}>
                  <td>{r[0]}</td>
                  {r.slice(1).map((cell, j) => (
                    <td
                      key={j}
                      onClick={() => cycleCell(i, j)}
                      style={{
                        background: isHi(cell) ? '#FFF6E6' : 'transparent',
                        cursor: 'pointer',
                        userSelect: 'none',
                        transition: 'background 0.15s ease',
                      }}
                      title="Clique para alternar"
                    >
                      <Badge kind={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.fgMuted }}>
            Clique nas células para ciclar · vazio → R → A → C → I
          </span>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', fontFamily: 'Ping Pong', fontSize: 16, color: CA.fg2, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="badge b-ra" style={{ width: 30, height: 30, fontSize: 12 }}>R/A</span> Resp.+Aprov.</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="badge b-r" style={{ width: 30, height: 30, fontSize: 13 }}>R</span> Responsável</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="badge b-a" style={{ width: 30, height: 30, fontSize: 13 }}>A</span> Aprovador</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="badge b-c" style={{ width: 30, height: 30, fontSize: 13 }}>C</span> Consultado</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span className="badge b-i" style={{ width: 30, height: 30, fontSize: 13 }}>I</span> Informado</span>
          </div>
          <button onClick={reset} style={{
            appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
            padding: '10px 20px', borderRadius: 900,
            background: CA.white, border: `1.5px solid ${CA.border}`,
            fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 16, color: CA.fg2,
          }}>Resetar</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 22 — Cap 07 ============== */
function SlideCap07() {
  return <SectionDivider num={7} kicker="Três camadas que aceleram" title="Automação & IA" />;
}

/* ============== 23 — TRÊS CAMADAS ============== */
function SlideThreeLayers() {
  const layers = [
    {
      n: '01', title: 'Templates Figma',
      sub: 'Por canal e por score',
      tools: ['Figma'],
      bullets: [
        'Score 1 com template fechado — Redatora exporta sem abrir o Figma',
        'Biblioteca organizada por score e por canal',
        'Naming convention obrigatório',
      ],
      icon: Icon.Stack,
    },
    {
      n: '02', title: 'IA generativa',
      sub: 'Acelerar copy e design Score 1',
      tools: ['Claude', 'Ideogram', 'Firefly'],
      bullets: [
        'Claude para variações de copy',
        'Ideogram e Firefly para design Score 1',
        'Todo output passa por revisão de brand',
      ],
      icon: Icon.Spark,
    },
    {
      n: '03', title: 'Automação Notion',
      sub: 'Operacional sem fricção',
      tools: ['Notion'],
      bullets: [
        'Card com campos obrigatórios',
        'Notificação automática no Slack',
        'Aprovação expressa com deadline (silêncio aprova)',
      ],
      icon: Icon.Bolt,
    },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 07 — AUTOMAÇÃO & IA" label="Três camadas" num="23 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Para liberar energia</div>
        <h1 className="deck-title-md">
          IA acelera o operacional <strong>para sobrar fôlego no Score 5.</strong>
        </h1>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {layers.map(l => (
            <div key={l.n} style={{
              background: CA.white, border: `1px solid ${CA.border}`,
              borderRadius: '16px 16px 60px 0', padding: '36px 36px 40px 36px',
              boxShadow: '0 1.64px 24.6px rgba(3,78,152,0.10)',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, background: CA.blueLighter,
                  color: CA.blueSemi, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <l.icon size={32} color={CA.blueSemi} />
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 56, color: CA.bgLight, letterSpacing: -1.6, lineHeight: '48px' }}>
                  {l.n}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.blue }}>
                  Camada {l.n}
                </div>
                <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 36, lineHeight: '40px', letterSpacing: -0.9, color: CA.fg, marginTop: 6 }}>
                  {l.title}
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 20, color: CA.fg2, marginTop: 6 }}>
                  {l.sub}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {l.tools.map(t => (
                  <span key={t} style={{
                    fontFamily: 'Ping Pong', fontWeight: 600, fontSize: 14, letterSpacing: 1,
                    textTransform: 'uppercase', padding: '6px 12px', borderRadius: 4,
                    background: CA.bgLight, color: CA.fg2, border: `1px solid ${CA.border}`,
                  }}>{t}</span>
                ))}
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
                {l.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 12, alignItems: 'flex-start', fontFamily: 'Ping Pong', fontSize: 19, color: CA.fg2, lineHeight: '26px' }}>
                    <Icon.Check size={20} color={CA.blue} /><span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48, padding: '24px 32px', borderRadius: 16,
          background: '#FFF6E6', border: `1px solid ${CA.yellow}`,
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          <Icon.Warning size={32} color="#8A5C00" />
          <div style={{ fontFamily: 'Ping Pong', fontSize: 22, color: CA.fg2, lineHeight: '30px' }}>
            <strong style={{ color: CA.fg, fontWeight: 700 }}>A regra:</strong> todo output de IA passa pela revisão de brand antes de publicar. Sempre.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 24 — Cap 08 ============== */
function SlideCap08() {
  return <SectionDivider num={8} kicker="A cadência operacional" title="Rituais & Métricas" />;
}

/* ============== 25 — RITUAIS ============== */
function SlideRituals() {
  const rituals = [
    { name: 'Weekly de pauta',     when: 'Seg · 9h00',    dur: '30 min',  type: 'sync',  who: 'Time todo' },
    { name: 'Card do dia',         when: 'Diário · 8h30', dur: 'Slack',   type: 'async', who: 'Coord. Social' },
    { name: 'Check de fila',       when: 'Diário · 17h00',dur: '10 min',  type: 'async', who: 'Coord. Design' },
    { name: 'Wrap-up da semana',   when: 'Sex · 16h30',   dur: '30 min',  type: 'sync',  who: 'Time todo' },
    { name: 'Planejamento mensal', when: 'Dia 20–22',     dur: '90 min',  type: 'sync',  who: 'Coord. Social + Design' },
    { name: 'Retro de processo',   when: 'Mensal',        dur: '60 min',  type: 'sync',  who: 'Time todo' },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 08 — RITUAIS & MÉTRICAS" label="Cadência" num="25 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Os rituais obrigatórios</div>
        <h1 className="deck-title-md">
          Seis encontros que <strong>seguram a engrenagem.</strong>
        </h1>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {rituals.map((r, i) => {
            const isSync = r.type === 'sync';
            const c = isSync ? CA.blue : CA.green;
            const soft = isSync ? CA.blueLighter : CA.greenLighter;
            return (
              <div key={i} style={{
                background: CA.white, border: `1px solid ${CA.border}`, borderRadius: 16,
                padding: 28, position: 'relative', overflow: 'hidden',
                borderLeft: `4px solid ${c}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{
                    fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 12, letterSpacing: 1.5,
                    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4,
                    background: soft, color: c,
                  }}>
                    {isSync ? 'Síncrono' : 'Assíncrono'}
                  </div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 14, color: CA.fgMuted }}>
                    {r.dur}
                  </div>
                </div>
                <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 28, lineHeight: '32px', letterSpacing: -0.7, color: CA.fg }}>
                  {r.name}
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 20, color: c, marginTop: 12 }}>
                  {r.when}
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontSize: 18, color: CA.fgMuted, marginTop: 4 }}>
                  {r.who}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 32, alignItems: 'center', fontFamily: 'Ping Pong', fontSize: 18, color: CA.fg2 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: CA.blue }} />Síncrono
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: CA.green }} />Assíncrono
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============== 26 — MÉTRICAS ============== */
function SlideMetrics() {
  const weekly = [
    { m: 'Aderência à pauta', t: '> 90%', col: CA.blue },
    { m: 'SLA cumprido',     t: '> 85%', col: CA.blue },
    { m: 'Rodadas de revisão',t: '< 1,2', col: CA.blue },
    { m: 'Utilização designer',t: '60–80%',col: CA.blue },
  ];
  const monthly = [
    { m: 'Engajamento por score', t: 'comparativo' },
    { m: 'Performance por canal', t: 'IG · LI · TT' },
    { m: 'CPE — Custo por engajamento', t: 'define boost' },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 08 — RITUAIS & MÉTRICAS" label="Métricas" num="26 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">O que a gente mede</div>
        <h1 className="deck-title-md">
          O mix <strong>60 / 27 / 13</strong> é ponto de partida, <em style={{ fontStyle: 'italic', color: CA.blue, fontWeight: 800 }}>não lei.</em>
        </h1>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48 }}>
          {/* Weekly */}
          <div style={{ background: CA.white, border: `1px solid ${CA.border}`, borderRadius: '16px 16px 60px 0', padding: 36 }}>
            <div className="deck-pill" style={{ marginBottom: 24 }}>Semanal · operacional</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {weekly.map((w, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center',
                  padding: '22px 0', borderBottom: i === weekly.length - 1 ? 'none' : `1px solid ${CA.border}`,
                }}>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 24, color: CA.fg }}>{w.m}</div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 36, color: w.col, letterSpacing: -1, fontVariantNumeric: 'tabular-nums' }}>
                    {w.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly */}
          <div style={{ background: CA.blueDark, color: CA.white, borderRadius: '16px 16px 60px 0', padding: 36 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '10px 22px', borderRadius: 900, marginBottom: 24,
              background: 'rgba(249,189,29,0.18)', color: CA.yellow,
              fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 18,
            }}>
              Mensal · estratégico
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {monthly.map((w, i) => (
                <div key={i} style={{
                  padding: '22px 0',
                  borderBottom: i === monthly.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.18)',
                }}>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 26, lineHeight: '32px', letterSpacing: -0.6 }}>{w.m}</div>
                  <div style={{ fontFamily: 'Ping Pong', fontSize: 18, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{w.t}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: '20px 24px', background: 'rgba(255,255,255,0.10)', borderRadius: 12, fontFamily: 'Ping Pong', fontSize: 19, lineHeight: '28px' }}>
              <strong style={{ color: CA.yellow }}>A retro ajusta.</strong> Se um Score começa a render mais, o mix se move com ele.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 27 — Cap 09 ============== */
function SlideCap09() {
  return <SectionDivider num={9} kicker="Como sair daqui e fazer rodar" title="Implementação" />;
}

/* ============== 28 — PLANO 4 SEMANAS ============== */
function SlideImplementation() {
  const weeks = [
    {
      n: 'Semana 01', title: 'Setup', color: CA.blueInfo, soft: '#D6F2FB', dark: '#006D9C',
      items: [
        'Kanban no Notion com campos obrigatórios',
        'Canais no Slack + naming',
        'Biblioteca Figma organizada por score',
        'Prompts-padrão de IA',
        'Reunião de alinhamento',
        'Pauta das próximas 2 semanas com scores',
      ],
    },
    {
      n: 'Semana 02', title: 'Piloto', color: CA.blue, soft: CA.blueLighter, dark: CA.blueSemi,
      items: [
        'Rodar fluxo completo com a pauta scoreada',
        'Registrar fricções em tempo real',
        'Medir SLAs na mão (planilha simples)',
        'Daily check de fila',
        'Retro rápida na sexta',
      ],
    },
    {
      n: 'Semanas 03–04', title: 'Automatizar', color: CA.blueDeep, soft: '#DCE0F2', dark: CA.blueDeep,
      items: [
        'Automações Notion ligadas',
        'Ajustar mix com dados reais da semana 02',
        'Documentar aprendizados no playbook',
        'Primeira retro mensal completa',
      ],
    },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 09 — IMPLEMENTAÇÃO" label="Plano de 4 semanas" num="28 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">De zero ao playbook em quatro semanas</div>
        <h1 className="deck-title-md">
          O caminho <strong>do papel para o ritmo.</strong>
        </h1>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
          {weeks.map((w, i) => (
            <div key={w.n} style={{ position: 'relative' }}>
              {i < 2 && (
                <div style={{
                  position: 'absolute', top: 56, right: -28, color: CA.n300, zIndex: 2,
                }}>
                  <Icon.ArrowRight size={40} color={CA.n400} />
                </div>
              )}
              <div style={{
                background: CA.white, border: `1px solid ${CA.border}`,
                borderRadius: '16px 16px 60px 0', padding: '36px 36px 40px 36px',
                borderTop: `6px solid ${w.color}`, height: '100%',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: w.dark }}>
                    {w.n}
                  </div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 36, color: w.color, opacity: 0.4, letterSpacing: -1 }}>
                    0{i + 1}
                  </div>
                </div>
                <h2 style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 56, lineHeight: '60px', letterSpacing: -1.6, color: CA.fg, margin: '12px 0 24px 0' }}>
                  {w.title}
                </h2>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {w.items.map((it, j) => (
                    <li key={j} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 12, alignItems: 'flex-start', fontFamily: 'Ping Pong', fontSize: 19, color: CA.fg2, lineHeight: '26px' }}>
                      <Icon.Check size={20} color={w.color} /><span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== 29 — ANTES & DEPOIS ============== */
function SlideBeforeAfter() {
  const before = [
    'Demandas sem classificação',
    'Designer aceita tudo',
    'Aprovação por WhatsApp',
    'Pauta de última hora',
  ];
  const after = [
    'Score antes de qualquer produção',
    'Fila limitada a 3 cards',
    'Aprovação assíncrona com deadline',
    'Antecipação mínima de 2 a 7 dias',
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 09 — IMPLEMENTAÇÃO" label="Antes & depois" num="29 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">A mudança em uma comparação</div>
        <h1 className="deck-title-md">
          Não é fazer <em style={{ fontStyle: 'italic' }}>mais.</em><br/>
          É fazer de forma <strong>previsível.</strong>
        </h1>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* Before */}
          <div style={{
            background: CA.bgLight, border: `1px solid ${CA.border}`,
            borderRadius: '16px 16px 60px 0', padding: 40,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 18px', borderRadius: 900,
              background: '#FFE1DD', color: CA.red,
              fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Antes
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {before.map((b, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16, alignItems: 'flex-start', fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 26, color: CA.fg2, lineHeight: '34px' }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: 999, background: '#FFE1DD', color: CA.red,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 18,
                  }}>×</span>
                  <span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(219,36,42,0.4)' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: 64, height: 64, borderRadius: 999, background: CA.yellow,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(249,189,29,0.4)',
            }}>
              <Icon.ArrowRight size={32} color={CA.fg} />
            </div>
          </div>

          {/* After */}
          <div style={{
            background: CA.blueDark, color: CA.white,
            borderRadius: '16px 16px 60px 0', padding: 40,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 18px', borderRadius: 900,
              background: CA.yellow, color: CA.fg,
              fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Depois
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {after.map((a, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16, alignItems: 'flex-start', fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 26, color: 'rgba(255,255,255,0.92)', lineHeight: '34px' }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: 999, background: CA.yellow, color: CA.fg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon.Check size={18} color={CA.fg} />
                  </span>
                  <span><strong style={{ color: CA.white, fontWeight: 700 }}>{a}</strong></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 30 — FECHO ============== */
function SlideClose() {
  return (
    <div className="slide" style={{ background: CA.blueDark, color: CA.white }}>
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 900, height: 900,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,135,233,0.55) 0%, rgba(7,38,111,0) 70%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -300, left: -150, width: 800, height: 800,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,189,29,0.20) 0%, rgba(7,38,111,0) 70%)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', top: 56, left: 100, right: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'Ping Pong', fontSize: 16, letterSpacing: 2, textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
      }}>
        <CAWordmark color={CA.white} height={28} />
        <div className="tnum">30 / 30</div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 100px' }}>
        <div style={{
          fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 22, letterSpacing: 3,
          textTransform: 'uppercase', color: CA.yellow, marginBottom: 32,
        }}>
          A meta · em uma frase
        </div>
        <h1 style={{
          fontFamily: 'Raleway', fontWeight: 300, fontSize: 124, lineHeight: '140px',
          letterSpacing: -3.2, color: CA.white, margin: 0, maxWidth: 1700,
        }}>
          <strong style={{ fontWeight: 800, color: CA.yellow }}>15 posts/semana</strong> com qualidade,<br/>
          previsibilidade e <strong style={{ fontWeight: 800 }}>sem queimar o time.</strong>
        </h1>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { when: 'Esta semana', what: 'Aprovar o playbook + alinhamento com a equipe' },
            { when: 'Até sexta',   what: 'Kanban pronto · Figma organizado · Slack aberto' },
            { when: 'Em 30 dias',  what: 'Ciclo rodando com SLAs medidos · primeira retro' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: 32, borderRadius: '16px 16px 60px 0',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.yellow, marginBottom: 12 }}>
                {s.when}
              </div>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 22, lineHeight: '30px', color: CA.white }}>
                {s.what}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 56, left: 100, right: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        fontFamily: 'Ping Pong', fontSize: 18, color: 'rgba(255,255,255,0.7)',
      }}>
        <div>
          <div style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Guardião do playbook</div>
          <div style={{ fontWeight: 700, color: CA.white, fontSize: 22 }}>Coord. Social · Coord. Design</div>
        </div>
        <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 28, color: CA.yellow, letterSpacing: -0.6 }}>
          Obrigado.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  SlideRaci, SlideCap07, SlideThreeLayers, SlideCap08, SlideRituals,
  SlideMetrics, SlideCap09, SlideImplementation, SlideBeforeAfter, SlideClose,
});
