/* Slides 11-20 */

/* ============== 11 — SCORE 5 ============== */
function SlideScore5() {
  return (
    <ScoreLane
      num="5"
      name="Creative Lane"
      lane="A trilha onde o time brilha"
      color={CA.blueDeep}
      soft="#DCE0F2"
      dark={CA.blueDeep}
      designTime="4 – 8h"
      sla="3 dias úteis"
      tag={['Conceituação prévia', 'D−3 obrigatório', 'Direção de arte']}
      examples={[
        { t: 'Direção de arte', s: 'criação original' },
        { t: 'Campanhas temáticas', s: 'referência cultural forte' },
        { t: 'Lançamentos de marca' },
      ]}
      note={'É onde o time brilha — direção de arte, criação original, referência cultural forte. Score 5 entra na fila com D−3, ou seja, na quinta da semana anterior.'}
      num30="11 / 30"
    />
  );
}

/* ============== 12 — CALCULADORA ============== */
function SlideCalculator() {
  const [tpl, setTpl] = React.useState(null);
  const [copy, setCopy] = React.useState(null);
  const [creat, setCreat] = React.useState(null);

  // Score logic: weighted answers
  // tpl: 0=template fechado(1), 1=template adaptável(3), 2=do zero(5)
  // copy: 0=≤2 swaps(1), 1=briefing completo(3), 2=conceito novo(5)
  // creat: 0=replicar(1), 1=compor(3), 2=criar original(5)
  const answers = [tpl, copy, creat];
  const filled = answers.every(a => a !== null);
  let score = null, lane = null, sla = null, color = null, dark = null, soft = null, t = null;
  if (filled) {
    const max = Math.max(answers[0], answers[1], answers[2]);
    score = max === 0 ? 1 : max === 1 ? 3 : 5;
    if (score === 1) { lane = 'Fast Lane'; sla = '4h úteis'; color = CA.blueInfo; dark = '#006D9C'; soft = '#D6F2FB'; t = '≤ 30 min'; }
    else if (score === 3) { lane = 'Standard Lane'; sla = '1 dia útil'; color = CA.blue; dark = CA.blueSemi; soft = CA.blueLighter; t = '1,5 – 2,5h'; }
    else { lane = 'Creative Lane'; sla = '3 dias úteis'; color = CA.blueDeep; dark = CA.blueDeep; soft = '#DCE0F2'; t = '4 – 8h'; }
  }

  const Q = ({ label, options, value, onChange }) => (
    <div>
      <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 22, color: CA.fg, marginBottom: 16 }}>{label}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map((o, i) => {
          const sel = value === i;
          const sScore = i === 0 ? 1 : i === 1 ? 3 : 5;
          const sCol = sScore === 1 ? CA.blueInfo : sScore === 3 ? CA.blue : CA.blueDeep;
          return (
            <button key={i} onClick={() => onChange(i)} style={{
              appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
              padding: '14px 20px', borderRadius: 12,
              background: sel ? '#FFF6E6' : CA.white,
              border: sel ? `2px solid ${CA.yellow}` : `1.5px solid ${CA.border}`,
              fontFamily: 'Ping Pong', fontSize: 20, color: CA.fg2,
              transition: 'all 0.15s ease',
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: 999, background: sel ? CA.yellow : 'transparent',
                border: sel ? 'none' : `2px solid ${sCol}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 28px',
                fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 14, color: sel ? CA.fg : sCol,
              }}>{sScore}</span>
              <span style={{ fontWeight: sel ? 700 : 400, color: sel ? CA.fg : CA.fg2 }}>{o}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 03 — SCORES" label="Calculadora interativa" num="12 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Momento interativo</div>
        <h1 className="deck-title-md">
          Antes de qualquer post, <strong>responda três perguntas.</strong>
        </h1>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 0.9fr', gap: 32, alignItems: 'flex-start' }}>
          <Q
            label="1. Template no Figma"
            value={tpl}
            onChange={setTpl}
            options={['Template fechado existe', 'Template adaptável existe', 'Não há template — do zero']}
          />
          <Q
            label="2. Copy"
            value={copy}
            onChange={setCopy}
            options={['Até 2 adaptações simples', 'Briefing completo necessário', 'Conceito novo — copy original']}
          />
          <Q
            label="3. Trabalho criativo"
            value={creat}
            onChange={setCreat}
            options={['Replicar layout existente', 'Compor a partir de ativos', 'Direção de arte original']}
          />

          {/* Result panel */}
          <div style={{
            background: filled ? color : CA.bgLight,
            color: filled ? CA.white : CA.fgMuted,
            borderRadius: '24px 24px 80px 0',
            padding: 36, minHeight: 460,
            transition: 'background 0.3s ease',
            border: filled ? 'none' : `1.5px dashed ${CA.border}`,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', opacity: filled ? 0.85 : 1, marginBottom: 16 }}>
                Resultado
              </div>
              {filled ? (
                <>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 300, fontSize: 36, lineHeight: '40px', letterSpacing: -1 }}>Score</div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 200, lineHeight: '180px', letterSpacing: -8, color: CA.yellow }}>{score}</div>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 32, lineHeight: '36px', letterSpacing: -0.8, marginTop: 8 }}>{lane}</div>
                </>
              ) : (
                <div style={{ fontFamily: 'Ping Pong', fontSize: 20, lineHeight: '30px', maxWidth: 280, marginTop: 32 }}>
                  Responda as três perguntas para sugerir score, tempo de design e SLA.
                </div>
              )}
            </div>
            {filled && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: 12, fontFamily: 'Ping Pong', fontSize: 18 }}>
                  <span style={{ opacity: 0.85 }}>Tempo design</span><strong>{t}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Ping Pong', fontSize: 18 }}>
                  <span style={{ opacity: 0.85 }}>SLA</span><strong>{sla}</strong>
                </div>
                <button onClick={() => { setTpl(null); setCopy(null); setCreat(null); }} style={{
                  appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
                  textAlign: 'center', marginTop: 12, color: CA.white,
                  padding: '10px 18px', borderRadius: 900, background: 'rgba(255,255,255,0.18)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 16,
                }}>Recomeçar</button>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 40, fontFamily: 'Ping Pong', fontSize: 20, color: CA.fgMuted, fontStyle: 'italic' }}>
          A regra é: o maior score entre as três respostas define a faixa.
        </div>
      </div>
    </div>
  );
}

/* ============== 13 — Cap 04 ============== */
function SlideCap04() {
  return <SectionDivider num={4} kicker="Alavanca 02 / 03" title="O Mix Semanal" />;
}

/* ============== 14 — MIX IDEAL ============== */
function SlideMixIdeal() {
  const mix = [
    { score: 1, pct: 60, posts: 9, hours: '4,5h', color: CA.blueInfo, dark: '#006D9C', name: 'Fast Lane' },
    { score: 3, pct: 27, posts: 4, hours: '8h', color: CA.blue, dark: CA.blueSemi, name: 'Standard Lane' },
    { score: 5, pct: 13, posts: 2, hours: '12h', color: CA.blueDeep, dark: CA.blueDeep, name: 'Creative Lane' },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 04 — MIX SEMANAL" label="Proporção ideal" num="14 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Para 15 posts/semana</div>
        <h1 className="deck-title-md">
          A proporção que <strong>cabe nas 40h</strong> de design.
        </h1>

        {/* Stacked bar */}
        <div style={{ marginTop: 64 }}>
          <div style={{ display: 'flex', borderRadius: 16, overflow: 'hidden', height: 96, boxShadow: '0 2.4px 36px rgba(3,78,152,0.10)' }}>
            {mix.map(m => (
              <div key={m.score} style={{
                flex: m.pct, background: m.color, color: CA.white,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 32px',
              }}>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 36, letterSpacing: -1 }}>
                  Score {m.score}
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 56, letterSpacing: -1.6 }}>{m.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 columns of detail */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {mix.map(m => (
            <div key={m.score} style={{
              background: CA.white, border: `1px solid ${CA.border}`,
              borderRadius: '16px 16px 60px 0', padding: 36,
              borderTop: `6px solid ${m.color}`,
            }}>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 22, color: m.dark, letterSpacing: -0.4 }}>
                Score {m.score} · {m.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 24 }}>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 120, lineHeight: '100px', letterSpacing: -3, color: CA.fg }}>
                  {m.posts}
                </div>
                <div style={{ fontFamily: 'Ping Pong', fontSize: 26, color: CA.fg2 }}>posts</div>
              </div>
              <div style={{ marginTop: 24, fontFamily: 'Ping Pong', fontSize: 22, color: CA.fg2 }}>
                <strong style={{ color: CA.fg }}>≈ {m.hours}</strong> de designer
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip — capacity */}
        <div style={{
          marginTop: 48, padding: '28px 36px', borderRadius: 16,
          background: CA.blueDark, color: CA.white,
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.yellow, marginBottom: 4 }}>
              Capacidade da semana
            </div>
            <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 32, letterSpacing: -0.8 }}>
              15 posts cabem em 40h
            </div>
          </div>
          {[
            ['Total produção', '≈ 24,5h'],
            ['Buffer livre', '≈ 15,5h'],
            ['Dedicado a Score 5', '12h (30%)'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>{k}</div>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 28, color: CA.white, marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== 15 — DISTRIBUIÇÃO SEMANAL (interativa) ============== */
function SlideWeekDistribution() {
  const initial = [
    { day: 'Seg', date: 'D+0', posts: [5, 1, 1] },
    { day: 'Ter', date: 'D+1', posts: [3, 1, 1] },
    { day: 'Qua', date: 'D+2', posts: [5, 1, 1] },
    { day: 'Qui', date: 'D+3', posts: [3, 1, 1] },
    { day: 'Sex', date: 'D+4', posts: [1, 1, 1] },
  ];
  const [W, setW] = React.useState(initial);
  const colorFor = s => s === 1 ? CA.blueInfo : s === 3 ? CA.blue : CA.blueDeep;
  const labelFor = s => s === 1 ? 'Fast' : s === 3 ? 'Standard' : 'Creative';
  // Hours per score for designer
  const hoursFor = s => s === 1 ? 0.5 : s === 3 ? 2 : 6;
  const cycle = s => s === 1 ? 3 : s === 3 ? 5 : 1;

  const setSlot = (di, pi) => {
    setW(prev => prev.map((d, i) => {
      if (i !== di) return d;
      const current = d.posts[pi];
      const next = current === 1 ? 3 : current === 3 ? 5 : 1;
      return { ...d, posts: d.posts.map((s, j) => j !== pi ? s : next) };
    }));
  };
  const reset = () => setW(initial);

  const flat = W.flatMap(d => d.posts);
  const counts = { 1: flat.filter(s => s === 1).length, 3: flat.filter(s => s === 3).length, 5: flat.filter(s => s === 5).length };
  const totalPosts = flat.length;
  const totalHours = flat.reduce((a, s) => a + hoursFor(s), 0);
  const fmt = n => Number.isInteger(n) ? `${n}h` : `${n.toString().replace('.', ',')}h`;
  const overDesign = totalHours > 24.5;
  const overWeek = totalHours > 40;
  let capStatus = 'ok';
  let capMsg = `Dentro da faixa de 24,5h de design. Buffer livre: ${fmt(40 - totalHours)}.`;
  if (overWeek) { capStatus = 'over'; capMsg = `Estourou as 40h da semana em ${fmt(totalHours - 40)}. Reduza Score 5 ou 3.`; }
  else if (overDesign) { capStatus = 'warn'; capMsg = `Acima de 24,5h de design (${fmt(totalHours - 24.5)} no buffer). Ainda cabe, mas atenção.`; }
  const capColor = capStatus === 'ok' ? CA.green : capStatus === 'warn' ? CA.yellow : CA.red;
  const capBg = capStatus === 'ok' ? CA.greenLighter : capStatus === 'warn' ? '#FFF6E6' : '#FFE1DD';

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 04 — MIX SEMANAL" label="Distribuição por dia" num="15 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Da proporção para a agenda</div>
        <h1 className="deck-title-md">
          O calendário ideal de <strong>uma semana padrão.</strong>
        </h1>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {W.map((d, di) => {
            const daySum = d.posts.reduce((a, s) => a + s, 0);
            const over = daySum > 7;
            return (
            <div key={d.day} style={{
              background: over ? '#FFF1F0' : CA.white,
              border: `2px solid ${over ? CA.red : CA.border}`,
              borderRadius: 16,
              padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 32, letterSpacing: -0.8, color: over ? CA.red : CA.fg }}>{d.day}</div>
                {over
                  ? <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: CA.red, background: '#FFE1DD', padding: '4px 10px', borderRadius: 900 }}>⚠ {daySum} pts</div>
                  : <div style={{ fontFamily: 'Ping Pong', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.n400 }}>{d.date}</div>
                }
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {d.posts.map((s, idx) => (
                  <button key={idx} onClick={() => setSlot(di, idx)} style={{
                    appearance: 'none', WebkitAppearance: 'none', border: 'none', cursor: 'pointer',
                    background: colorFor(s), color: CA.white, borderRadius: 10,
                    padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontFamily: 'Ping Pong', textAlign: 'left',
                    boxShadow: over ? `inset 0 0 0 2px ${CA.red}` : 'inset 0 0 0 1px rgba(255,255,255,0.18)',
                    transition: 'transform 0.08s ease',
                  }}
                  onMouseDown={e => e.currentTarget.style.transform='scale(0.97)'}
                  onMouseUp={e => e.currentTarget.style.transform=''}
                  onMouseLeave={e => e.currentTarget.style.transform=''}>
                    <div style={{ fontWeight: 700, fontSize: 18 }}>{idx === 0 ? '08:30' : idx === 1 ? '12:30' : '17:30'}</div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>S{s} · {labelFor(s)}</div>
                  </button>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Live totals + capacity status */}
        <div style={{
          marginTop: 32, padding: '20px 28px', borderRadius: 16,
          background: CA.bgLight, border: `1px solid ${CA.border}`,
          display: 'grid', gridTemplateColumns: '1.1fr auto auto auto auto auto', gap: 28, alignItems: 'center',
        }}>
          <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.fgMuted }}>
            Clique nos slots para alternar S1 → S3 → S5
          </div>
          {[
            { lbl: 'Posts', v: totalPosts, c: CA.fg },
            { lbl: 'S1', v: counts[1], c: CA.blueInfo },
            { lbl: 'S3', v: counts[3], c: CA.blue },
            { lbl: 'S5', v: counts[5], c: CA.blueDeep },
            { lbl: 'Horas design', v: fmt(totalHours), c: capColor },
          ].map(b => (
            <div key={b.lbl} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 64 }}>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', color: CA.fgMuted }}>{b.lbl}</div>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 32, color: b.c, letterSpacing: -0.8, fontVariantNumeric: 'tabular-nums' }}>{b.v}</div>
            </div>
          ))}
        </div>

        {/* Capacity bar */}
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
          <div style={{ position: 'relative', height: 28, borderRadius: 14, background: CA.n200, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: `${Math.min(100, (totalHours / 40) * 100)}%`,
              background: capColor, transition: 'width 0.25s ease',
            }} />
            {/* design 24.5h marker */}
            <div style={{ position: 'absolute', left: `${(24.5/40)*100}%`, top: -4, bottom: -4, width: 2, background: CA.fg }} />
            <div style={{ position: 'absolute', left: `calc(${(24.5/40)*100}% + 8px)`, top: 4, fontFamily: 'Ping Pong', fontSize: 13, color: CA.fg, fontWeight: 700 }}>24,5h design</div>
          </div>
          <button onClick={reset} style={{
            appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
            padding: '10px 20px', borderRadius: 900,
            background: CA.white, border: `1.5px solid ${CA.border}`,
            fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 16, color: CA.fg2,
          }}>Resetar</button>
        </div>

        <div style={{
          marginTop: 16, padding: '14px 22px', borderRadius: 12,
          background: capBg, border: `1px solid ${capColor}`,
          fontFamily: 'Ping Pong', fontSize: 18, color: CA.fg, lineHeight: '24px',
        }}>
          <strong style={{ color: capColor === CA.yellow ? '#8A5C00' : capColor }}>
            {capStatus === 'ok' ? '✓ ' : capStatus === 'warn' ? '⚠ ' : '✕ '}
          </strong>
          {capMsg}
        </div>

        {/* Rules row */}
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { t: 'Score 5 só em Seg e Qua', s: 'Os dias mais cheios absorvem o trabalho pesado.', icon: Icon.Calendar, c: CA.blueDeep },
            { t: 'Nunca dois Score 5 no mesmo dia', s: 'A regra de ouro do mix.', icon: Icon.Warning, c: CA.yellow, sBg: '#FFF6E6' },
            { t: 'Score 5 entra com D−3', s: 'Na quinta da semana anterior já está na fila.', icon: Icon.Clock, c: CA.blue },
          ].map((r, i) => (
            <div key={i} style={{
              background: r.sBg || CA.white, border: `1px solid ${r.sBg ? CA.yellow : CA.border}`,
              borderRadius: 12, padding: 16,
              display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, alignItems: 'center',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: r.sBg ? CA.yellow : CA.blueLighter, color: r.c, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <r.icon size={22} color={r.sBg ? CA.fg : r.c} />
              </div>
              <div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 17, color: CA.fg, lineHeight: '22px' }}>{r.t}</div>
                <div style={{ fontFamily: 'Ping Pong', fontSize: 14, color: CA.fg2, marginTop: 2, lineHeight: '20px' }}>{r.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== 16 — Cap 05 ============== */
function SlideCap05() {
  return <SectionDivider num={5} kicker="Alavanca 03 / 03" title="O Fluxo" />;
}

/* ============== 17 — FLUXO 7 ETAPAS ============== */
function SlideFlowSteps() {
  const steps = [
    { n: '01', title: 'Ideação & pauta', owner: 'Coord. Social', when: 'Toda 2ª 9h' },
    { n: '02', title: 'Conceituação', owner: 'Coord. Design', when: 'Só Score 5 · D−3', alt: true },
    { n: '03', title: 'Produção de copy', owner: 'Redatora', when: 'Briefing aprovado' },
    { n: '04', title: 'Produção de design', owner: 'Designer', when: 'Copy aprovada' },
    { n: '05', title: 'Aprovação', owner: 'Coord. Social + Brand', when: 'Silêncio aprova' },
    { n: '06', title: 'Publicação', owner: 'Coord. Social', when: 'Conforme calendário' },
    { n: '07', title: 'Métricas', owner: 'Coord. Social', when: 'Semanal + mensal' },
  ];

  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 05 — O FLUXO" label="Sete etapas" num="17 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">Do post à publicação</div>
        <h1 className="deck-title-md">
          Sete etapas com <strong>começo, meio e fim</strong> definidos.
        </h1>

        <div style={{ marginTop: 56, position: 'relative' }}>
          {/* Spine */}
          <div style={{ position: 'absolute', top: 56, left: 32, right: 32, height: 2, background: CA.border }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 999,
                  background: s.alt ? CA.yellow : CA.blue, color: s.alt ? CA.fg : CA.white,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 26, letterSpacing: -0.5,
                  border: `4px solid ${CA.white}`, boxShadow: '0 2.4px 24.6px rgba(3,78,152,0.18)',
                  marginBottom: 24,
                }}>
                  {s.n}
                </div>
                <div style={{
                  background: CA.white, border: `1px solid ${CA.border}`,
                  borderRadius: 12, padding: 20, width: '100%', minHeight: 200,
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 22, lineHeight: '26px', letterSpacing: -0.6, color: CA.fg }}>
                    {s.title}
                  </div>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 16, color: CA.blue }}>
                    {s.owner}
                  </div>
                  <div style={{ fontFamily: 'Ping Pong', fontSize: 16, color: CA.fgMuted, marginTop: 'auto' }}>
                    {s.when}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56, padding: '28px 36px', background: CA.bgLight, borderRadius: 16, fontFamily: 'Ping Pong', fontSize: 22, color: CA.fg2, lineHeight: '32px' }}>
          <strong style={{ color: CA.fg }}>Cada etapa tem um dono.</strong> A gente faz o trabalho rápido quando começo, meio e fim estão claros.
          A etapa <span style={{ background: CA.yellow, padding: '2px 10px', borderRadius: 4, color: CA.fg, fontWeight: 700 }}>02 — Conceituação</span> só existe para Score 5.
        </div>
      </div>
    </div>
  );
}

/* ============== 18 — ANTI-GARGALO ============== */
function SlideAntiGargalo() {
  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 05 — O FLUXO" label="A regra mais importante" num="18 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow" style={{ color: CA.red }}>A regra anti-gargalo</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'center', marginTop: 24 }}>
          <div>
            <h1 style={{ fontFamily: 'Raleway', fontWeight: 300, fontSize: 92, lineHeight: '110px', letterSpacing: -2.4, color: CA.fg, margin: 0 }}>
              Designer <strong style={{ fontWeight: 800, color: CA.blue }}>nunca</strong><br/>
              passa de <strong style={{ fontWeight: 800, color: CA.blue }}>3 cards</strong><br/>
              em andamento.
            </h1>
            <div style={{ marginTop: 48, fontFamily: 'Ping Pong', fontSize: 26, lineHeight: '36px', color: CA.fg2, maxWidth: 700 }}>
              <strong style={{ color: CA.fg }}>É responsabilidade da Coord. Design fazer valer.</strong> Se a fila encher, a coordenação negocia: ou o post vai para a semana seguinte, ou é convertido para um score inferior.
            </div>
          </div>

          {/* Visual: WIP slots */}
          <div>
            <div className="deck-label" style={{ marginBottom: 20 }}>WIP do designer · cap. 3</div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  flex: 1, height: 200, borderRadius: 16, background: CA.blue,
                  color: CA.white, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  border: `4px solid ${CA.white}`, boxShadow: '0 2.4px 24.6px rgba(3,78,152,0.20)',
                }}>
                  <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.85 }}>
                    Slot {i}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Ping Pong', fontSize: 18, opacity: 0.85 }}>Em andamento</div>
                    <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: 32, letterSpacing: -0.8 }}>Card {i}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Blocked slot */}
            <div style={{
              border: `2px dashed ${CA.red}`, borderRadius: 16, padding: 24,
              display: 'flex', alignItems: 'center', gap: 20, background: '#FFF1F0',
            }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, background: '#FFE1DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Warning size={36} color={CA.red} />
              </div>
              <div>
                <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 24, color: CA.red }}>Card 4 — bloqueado</div>
                <div style={{ fontFamily: 'Ping Pong', fontSize: 18, color: CA.fg2, marginTop: 4 }}>
                  Coord. Design negocia: empurra para semana seguinte ou rebaixa o score.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 19 — APROVAÇÃO ============== */
function SlideApproval() {
  return (
    <div className="slide">
      <SlideChrome chapter="CAP. 05 — O FLUXO" label="Aprovação" num="19 / 30" />
      <div className="slide-body">
        <div className="deck-eyebrow">A grande mudança</div>
        <h1 className="deck-title">
          <strong>Silêncio</strong> é aprovação.
        </h1>
        <div style={{ marginTop: 24, fontFamily: 'Ping Pong', fontSize: 28, color: CA.fg2, maxWidth: 1200, lineHeight: '38px' }}>
          Se ninguém reprova dentro do SLA, o post é aprovado automaticamente.
        </div>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { score: 1, hours: '2h', color: CA.blueInfo, soft: '#D6F2FB', dark: '#006D9C', name: 'Fast Lane' },
            { score: 3, hours: '4h', color: CA.blue, soft: CA.blueLighter, dark: CA.blueSemi, name: 'Standard Lane' },
            { score: 5, hours: '8h', color: CA.blueDeep, soft: '#DCE0F2', dark: CA.blueDeep, name: 'Creative Lane' },
          ].map(s => (
            <div key={s.score} style={{
              background: CA.white, border: `1px solid ${CA.border}`, borderRadius: '16px 16px 60px 0',
              padding: 36, borderTop: `6px solid ${s.color}`,
            }}>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 700, fontSize: 20, color: s.dark, letterSpacing: -0.4 }}>
                Score {s.score} · {s.name}
              </div>
              <div style={{ fontFamily: 'Ping Pong', fontWeight: 800, fontSize: 120, lineHeight: '110px', letterSpacing: -3, color: CA.fg, marginTop: 24 }}>
                {s.hours}
              </div>
              <div style={{ fontFamily: 'Ping Pong', fontSize: 22, color: CA.fg2, marginTop: 8 }}>
                janela para reprovar
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, padding: '32px 40px', borderRadius: 16,
          background: CA.blueDark, color: CA.white,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontFamily: 'Ping Pong', fontWeight: 500, fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: CA.yellow, marginBottom: 8 }}>
              Limite de rodadas
            </div>
            <div style={{ fontFamily: 'Raleway', fontWeight: 300, fontSize: 44, lineHeight: '50px', letterSpacing: -1.2 }}>
              Máximo <strong style={{ fontWeight: 800, color: CA.yellow }}>uma rodada</strong> de ajuste.
            </div>
          </div>
          <div style={{ fontFamily: 'Ping Pong', fontSize: 22, lineHeight: '32px', opacity: 0.9 }}>
            Segunda rodada exige <strong style={{ color: CA.white }}>justificativa documentada</strong> no card. Não vira eterna ida-e-volta.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== 20 — Cap 06 ============== */
function SlideCap06() {
  return <SectionDivider num={6} kicker="Quem faz o quê" title="Responsabilidades" />;
}

Object.assign(window, {
  SlideScore5, SlideCalculator, SlideCap04, SlideMixIdeal, SlideWeekDistribution,
  SlideCap05, SlideFlowSteps, SlideAntiGargalo, SlideApproval, SlideCap06,
});
