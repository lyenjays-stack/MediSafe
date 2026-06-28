import React from 'react';

/* ============================================================
   MediSafe — Smart Medication Management (iOS app)
   Starter source. All screens in one file for easy reading;
   split into ./screens and ./components as the app grows.
   Replace the mock data below with your device / API data.
   ============================================================ */

const C = {
  teal: '#119B95', deep: '#0C2B2C', amber: '#E8A23D',
  bg: '#F4F7F6', card: '#FFFFFF', ink: '#0F2A2C', muted: '#6B7E7E',
  line: '#E7EDEC', green: '#2E9E6B', red: '#D9534F', softTeal: '#E4F1F0',
};
const FONT = '-apple-system, "SF Pro Text", system-ui, sans-serif';

/* ---------------- mock data ---------------- */
const INITIAL_DOSES = [
  { id: 'd1', name: 'Metformin',    dose: '500 mg',   time: '08:00', slot: 'Morning',   status: 'taken' },
  { id: 'd2', name: 'Amlodipine',   dose: '5 mg',     time: '08:00', slot: 'Morning',   status: 'taken' },
  { id: 'd3', name: 'Vitamin D',    dose: '1 tablet', time: '13:00', slot: 'Afternoon', status: 'due' },
  { id: 'd4', name: 'Atorvastatin', dose: '20 mg',    time: '21:00', slot: 'Night',     status: 'upcoming' },
];
const WEEK = [
  { d: 'M', pct: 100 }, { d: 'T', pct: 100 }, { d: 'W', pct: 80 },
  { d: 'T', pct: 100 }, { d: 'F', pct: 67 }, { d: 'S', pct: 100 }, { d: 'S', pct: 92 },
];
const HISTORY = [
  { id: 'h1', name: 'Amlodipine',   dose: '5 mg',     when: 'Today · 08:02',     status: 'taken' },
  { id: 'h2', name: 'Metformin',    dose: '500 mg',   when: 'Today · 08:02',     status: 'taken' },
  { id: 'h3', name: 'Atorvastatin', dose: '20 mg',    when: 'Yesterday · 21:05', status: 'taken' },
  { id: 'h4', name: 'Vitamin D',    dose: '1 tablet', when: 'Yesterday · 13:00', status: 'missed' },
  { id: 'h5', name: 'Metformin',    dose: '500 mg',   when: 'Yesterday · 08:00', status: 'taken' },
];
const CARE_EVENTS = [
  { id: 'c1', text: 'Metformin taken',   when: 'Today · 08:02', status: 'taken' },
  { id: 'c2', text: 'Amlodipine taken',  when: 'Today · 08:02', status: 'taken' },
  { id: 'c3', text: 'Vitamin D missed',  when: 'Yesterday',     status: 'missed' },
];

const STATUS = {
  taken:    { label: 'Taken',    color: C.green, bg: '#E6F4EC' },
  due:      { label: 'Due now',  color: C.amber, bg: '#FBF1E1' },
  upcoming: { label: 'Upcoming', color: C.muted, bg: '#EEF3F2' },
  missed:   { label: 'Missed',   color: C.red,   bg: '#FBE9E8' },
};

/* ---------------- tiny icon set ---------------- */
function Icon({ name, size = 24, color = 'currentColor', stroke = 2 }) {
  const p = { fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    today: <><circle cx="12" cy="13" r="8" {...p} /><path d="M12 9v4l2.5 1.5" {...p} /><path d="M9 2h6" {...p} /></>,
    chart: <><path d="M5 20V10M12 20V4M19 20v-7" {...p} /></>,
    user:  <><circle cx="12" cy="8" r="4" {...p} /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" {...p} /></>,
    plus:  <><path d="M12 5v14M5 12h14" {...p} /></>,
    bell:  <><path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" {...p} /><path d="M10 20a2 2 0 004 0" {...p} /></>,
    cam:   <><rect x="3" y="7" width="18" height="13" rx="3" {...p} /><circle cx="12" cy="13.5" r="3.5" {...p} /><path d="M8 7l1.5-2.5h5L16 7" {...p} /></>,
    check: <><path d="M5 13l4 4L19 7" {...p} /></>,
    phone: <><path d="M5 4h3l2 5-2 1.5a11 11 0 005 5L19 13l5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 010-2z" {...p} /></>,
    msg:   <><path d="M5 5h14a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 3V7a2 2 0 012-2z" {...p} /></>,
    pill:  <><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)" {...p} /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>{paths[name]}</svg>;
}

function Badge({ status }) {
  const s = STATUS[status];
  return (
    <span style={{
      fontSize: 13, fontWeight: 600, color: s.color, background: s.bg,
      padding: '5px 11px', borderRadius: 999, whiteSpace: 'nowrap',
    }}>{s.label}</span>
  );
}

/* ---------------- shared screen shell ---------------- */
function Screen({ title, subtitle, children }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <div style={{ padding: '8px 22px 4px' }}>
        {subtitle && <div style={{ fontSize: 15, color: C.muted, fontWeight: 500, marginBottom: 2 }}>{subtitle}</div>}
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -0.5, color: C.ink }}>{title}</h1>
      </div>
      <div style={{ padding: '14px 22px 130px', display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: C.card, borderRadius: 20, border: `1px solid ${C.line}`,
      boxShadow: '0 6px 20px rgba(15,42,44,0.05)', ...style,
    }}>{children}</div>
  );
}

/* ---------------- Today ---------------- */
function TodayScreen({ doses, onTakeNow }) {
  const takenCount = doses.filter(d => d.status === 'taken').length;
  const total = doses.length;
  const pct = Math.round((takenCount / total) * 100);
  const next = doses.find(d => d.status === 'due') || doses.find(d => d.status === 'upcoming');

  return (
    <Screen title="Today" subtitle="Tuesday, 24 June">
      {/* progress */}
      <Card style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{
          width: 76, height: 76, borderRadius: '50%', flexShrink: 0,
          background: `conic-gradient(${C.teal} ${pct}%, ${C.softTeal} ${pct}%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 58, height: 58, borderRadius: '50%', background: C.card, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 19, color: C.ink }}>{pct}%</div>
        </div>
        <div>
          <div style={{ fontSize: 19, fontWeight: 700, color: C.ink }}>{takenCount} of {total} doses taken</div>
          <div style={{ fontSize: 15, color: C.muted, marginTop: 3 }}>Keep it up — you're on track today.</div>
        </div>
      </Card>

      {/* next dose */}
      {next && (
        <Card style={{ padding: 0, overflow: 'hidden', border: 'none', background: C.deep }}>
          <div style={{ padding: '20px 20px 18px', color: '#EAF1F0' }}>
            <div style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: C.amber, fontWeight: 700 }}>Next dose · {next.time}</div>
            <div style={{ fontSize: 24, fontWeight: 800, marginTop: 6 }}>{next.name}</div>
            <div style={{ fontSize: 15, color: '#CFE0DE', marginTop: 2 }}>{next.dose} · {next.slot}</div>
            <button onClick={() => onTakeNow(next.id)} style={{
              marginTop: 16, width: '100%', border: 'none', borderRadius: 14, padding: '14px 0',
              background: C.teal, color: '#fff', fontSize: 17, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
            }}>Take now</button>
          </div>
        </Card>
      )}

      {/* schedule */}
      <div style={{ fontSize: 15, fontWeight: 700, color: C.muted, padding: '4px 2px' }}>Today's schedule</div>
      <Card style={{ padding: 6 }}>
        {doses.map((d, i) => (
          <div key={d.id} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '14px 14px',
            borderBottom: i < doses.length - 1 ? `1px solid ${C.line}` : 'none',
          }}>
            <div style={{ width: 46, textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.ink }}>{d.time}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{d.slot}</div>
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: C.softTeal, color: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="pill" size={20} color={C.teal} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.ink }}>{d.name}</div>
              <div style={{ fontSize: 14, color: C.muted }}>{d.dose}</div>
            </div>
            <Badge status={d.status} />
          </div>
        ))}
      </Card>
    </Screen>
  );
}

/* ---------------- History ---------------- */
function HistoryScreen() {
  return (
    <Screen title="History" subtitle="Adherence">
      <Card style={{ padding: 22 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
          <div style={{ fontSize: 48, fontWeight: 800, color: C.teal, lineHeight: 1 }}>92%</div>
          <div style={{ fontSize: 15, color: C.muted, paddingBottom: 6 }}>doses taken this week</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: 96, marginTop: 18 }}>
          {WEEK.map((w, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1 }}>
              <div style={{ width: 14, height: 72, background: C.softTeal, borderRadius: 999, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: `${w.pct}%`, background: w.pct >= 100 ? C.green : (w.pct >= 80 ? C.teal : C.amber), borderRadius: 999 }} />
              </div>
              <span style={{ fontSize: 12, color: C.muted, fontWeight: 600 }}>{w.d}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ fontSize: 15, fontWeight: 700, color: C.muted, padding: '4px 2px' }}>Recent doses</div>
      <Card style={{ padding: 6 }}>
        {HISTORY.map((h, i) => (
          <div key={h.id} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px',
            borderBottom: i < HISTORY.length - 1 ? `1px solid ${C.line}` : 'none',
          }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: STATUS[h.status].bg, color: STATUS[h.status].color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={h.status === 'missed' ? 'bell' : 'check'} size={18} color={STATUS[h.status].color} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.ink }}>{h.name} <span style={{ color: C.muted, fontWeight: 500 }}>· {h.dose}</span></div>
              <div style={{ fontSize: 13, color: C.muted }}>{h.when}</div>
            </div>
            <Badge status={h.status} />
          </div>
        ))}
      </Card>
    </Screen>
  );
}

/* ---------------- Caregiver ---------------- */
function CaregiverScreen() {
  return (
    <Screen title="Family" subtitle="Caregiver view">
      <Card style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: C.softTeal, color: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name="user" size={28} color={C.teal} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 19, fontWeight: 700, color: C.ink }}>Mak (Mother)</div>
          <div style={{ fontSize: 14, color: C.muted }}>4 medications · Box online</div>
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: C.green, background: '#E6F4EC', padding: '6px 12px', borderRadius: 999 }}>On track</span>
      </Card>

      <div style={{
        display: 'flex', gap: 12, alignItems: 'center', padding: '16px 18px',
        background: '#FBE9E8', border: `1px solid #F2C9C6`, borderRadius: 18,
      }}>
        <Icon name="bell" size={22} color={C.red} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.red }}>1 missed dose yesterday</div>
          <div style={{ fontSize: 14, color: '#9B5450' }}>Vitamin D · 13:00 — not taken</div>
        </div>
      </div>

      <div style={{ fontSize: 15, fontWeight: 700, color: C.muted, padding: '4px 2px' }}>Recent activity</div>
      <Card style={{ padding: 6 }}>
        {CARE_EVENTS.map((e, i) => (
          <div key={e.id} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px',
            borderBottom: i < CARE_EVENTS.length - 1 ? `1px solid ${C.line}` : 'none',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: STATUS[e.status].color }} />
            <div style={{ flex: 1, fontSize: 16, color: C.ink }}>{e.text}</div>
            <div style={{ fontSize: 13, color: C.muted }}>{e.when}</div>
          </div>
        ))}
      </Card>

      <div style={{ display: 'flex', gap: 12 }}>
        <button style={{ flex: 1, border: 'none', borderRadius: 14, padding: '14px 0', background: C.teal, color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}><Icon name="phone" size={18} color="#fff" />Call</button>
        <button style={{ flex: 1, border: `1px solid ${C.line}`, borderRadius: 14, padding: '14px 0', background: C.card, color: C.ink, fontSize: 16, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}><Icon name="msg" size={18} color={C.ink} />Message</button>
      </div>
    </Screen>
  );
}

/* ---------------- Add medication (sheet) ---------------- */
function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.muted }}>{label}</span>
      {children}
    </div>
  );
}
const inputStyle = {
  border: `1px solid ${C.line}`, borderRadius: 14, padding: '14px 16px',
  fontSize: 17, fontFamily: FONT, color: C.ink, background: C.card, outline: 'none', width: '100%', boxSizing: 'border-box',
};

function AddSheet({ onClose, onSave }) {
  const [name, setName] = React.useState('');
  const [dose, setDose] = React.useState('');
  const [times, setTimes] = React.useState(['Morning']);
  const [slot, setSlot] = React.useState(1);
  const toggle = (t) => setTimes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

  return (
    <Sheet onClose={onClose} title="Add medication">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '4px 22px 22px' }}>
        <Field label="Medicine name"><input style={inputStyle} value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Metformin" /></Field>
        <Field label="Dosage"><input style={inputStyle} value={dose} onChange={e => setDose(e.target.value)} placeholder="e.g. 500 mg" /></Field>
        <Field label="Times of day">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Morning', 'Afternoon', 'Night'].map(t => (
              <button key={t} onClick={() => toggle(t)} style={{
                border: `1px solid ${times.includes(t) ? C.teal : C.line}`, background: times.includes(t) ? C.softTeal : C.card,
                color: times.includes(t) ? C.teal : C.muted, fontWeight: 600, fontSize: 15, padding: '10px 18px',
                borderRadius: 999, fontFamily: FONT, cursor: 'pointer',
              }}>{t}</button>
            ))}
          </div>
        </Field>
        <Field label="Compartment">
          <div style={{ display: 'flex', gap: 8 }}>
            {[1,2,3,4,5,6,7].map(n => (
              <button key={n} onClick={() => setSlot(n)} style={{
                flex: 1, border: `1px solid ${slot === n ? C.teal : C.line}`, background: slot === n ? C.teal : C.card,
                color: slot === n ? '#fff' : C.muted, fontWeight: 700, fontSize: 15, padding: '12px 0',
                borderRadius: 12, fontFamily: FONT, cursor: 'pointer',
              }}>{n}</button>
            ))}
          </div>
        </Field>
        <button onClick={() => onSave({ name, dose })} style={{
          marginTop: 6, border: 'none', borderRadius: 14, padding: '16px 0', background: C.teal,
          color: '#fff', fontSize: 17, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
        }}>Save medication</button>
      </div>
    </Sheet>
  );
}

/* ---------------- Reminder + AI pill verification (full screen) ---------------- */
function ReminderSheet({ dose, onClose, onConfirm }) {
  const [phase, setPhase] = React.useState('scanning'); // scanning -> verified
  React.useEffect(() => {
    const t = setTimeout(() => setPhase('verified'), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 200, background: C.deep, color: '#EAF1F0', display: 'flex', flexDirection: 'column', fontFamily: FONT }}>
      <style>{`@keyframes msScan{0%{top:8%}50%{top:88%}100%{top:8%}}@keyframes msPulse{0%,100%{opacity:.5}50%{opacity:1}}@keyframes msPop{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>
      <div style={{ paddingTop: 70, textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: C.amber, fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase' }}>
          <Icon name="bell" size={18} color={C.amber} /> Dose reminder · {dose.time}
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, marginTop: 10 }}>Time for your {dose.slot.toLowerCase()} dose</div>
        <div style={{ fontSize: 17, color: '#CFE0DE', marginTop: 4 }}>{dose.name} · {dose.dose}</div>
      </div>

      {/* viewfinder */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }}>
        <div style={{ position: 'relative', width: 250, height: 250, borderRadius: 28, background: '#06201F', border: '1px solid #1E4244', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* corner brackets */}
          {[{t:14,l:14,b:0,r:0,bt:1,bl:1},{t:14,r:14,b:0,l:0,bt:1,br:1},{b:14,l:14,t:0,r:0,bb:1,bl:1},{b:14,r:14,t:0,l:0,bb:1,br:1}].map((s,i)=>(
            <div key={i} style={{ position:'absolute', top:s.t, left:s.l, right:s.r, bottom:s.b, width:26, height:26,
              borderTop:s.bt?`3px solid ${C.teal}`:'none', borderBottom:s.bb?`3px solid ${C.teal}`:'none',
              borderLeft:s.bl?`3px solid ${C.teal}`:'none', borderRight:s.br?`3px solid ${C.teal}`:'none',
              borderTopLeftRadius:s.bt&&s.bl?10:0, borderTopRightRadius:s.bt&&s.br?10:0, borderBottomLeftRadius:s.bb&&s.bl?10:0, borderBottomRightRadius:s.bb&&s.br?10:0 }} />\n          ))}\n          {/* pill */}\n          <div style={{ width: 96, height: 40, borderRadius: 999, background: 'linear-gradient(90deg,#E8A23D 0 50%,#EAF1F0 50% 100%)', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' }} />\n          {phase === 'scanning' && <div style={{ position: 'absolute', left: '8%', right: '8%', height: 2, background: C.teal, boxShadow: `0 0 12px ${C.teal}`, animation: 'msScan 2.2s ease-in-out infinite' }} />}\n          {phase === 'verified' && (\n            <div style={{ position: 'absolute', inset: 0, background: 'rgba(46,158,107,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n              <div style={{ width: 72, height: 72, borderRadius: '50%', background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'msPop .3s ease-out' }}>\n                <Icon name=\"check\" size={40} color=\"#fff\" stroke={3} />\n              </div>\n            </div>\n          )}\n        </div>\n      </div>\n\n      <div style={{ textAlign: 'center', padding: '0 28px' }}>\n        {phase === 'scanning'\n          ? <div style={{ fontSize: 17, color: '#9DD3BC', animation: 'msPulse 1.2s ease-in-out infinite' }}>Verifying pill with AI…</div>\n          : <div style={{ fontSize: 18, fontWeight: 700, color: '#9DD3BC' }}>Correct pill detected from compartment</div>}\n      </div>\n\n      <div style={{ padding: '26px 28px 46px', display: 'flex', flexDirection: 'column', gap: 12 }}>\n        <button disabled={phase !== 'verified'} onClick={onConfirm} style={{\n          border: 'none', borderRadius: 16, padding: '17px 0', background: phase === 'verified' ? C.teal : '#1E4244',\n          color: phase === 'verified' ? '#fff' : '#6E8E8C', fontSize: 17, fontWeight: 700, fontFamily: FONT,\n          cursor: phase === 'verified' ? 'pointer' : 'default',\n        }}>Confirm dose</button>\n        <button onClick={onClose} style={{ border: 'none', background: 'transparent', color: '#9DB6B4', fontSize: 16, fontWeight: 600, fontFamily: FONT, cursor: 'pointer' }}>Snooze 10 minutes</button>\n      </div>\n    </div>\n  );\n}\n\n/* ---------------- generic bottom sheet ---------------- */\nfunction Sheet({ title, children, onClose }) {\n  return (\n    <div style={{ position: 'absolute', inset: 0, zIndex: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>\n      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(12,43,44,0.4)' }} />\n      <div style={{ position: 'relative', background: C.bg, borderRadius: '28px 28px 0 0', maxHeight: '92%', overflowY: 'auto', paddingBottom: 20 }}>\n        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px 10px' }}>\n          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: C.ink }}>{title}</h2>\n          <button onClick={onClose} style={{ border: 'none', background: C.line, width: 32, height: 32, borderRadius: '50%', color: C.muted, fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>✕</button>\n        </div>\n        {children}\n      </div>\n    </div>\n  );\n}\n\n/* ---------------- tab bar ---------------- */\nfunction TabBar({ tab, setTab, onAdd }) {\n  const item = (id, name, label) => {\n    const active = tab === id;\n    return (\n      <button onClick={() => setTab(id)} style={{ flex: 1, border: 'none', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', padding: 0 }}>\n        <Icon name={name} size={25} color={active ? C.teal : '#9AAFAE'} stroke={active ? 2.4 : 2} />\n        <span style={{ fontSize: 11, fontWeight: 600, color: active ? C.teal : '#9AAFAE' }}>{label}</span>\n      </button>\n    );\n  };\n  return (\n    <div style={{\n      position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 100,\n      paddingBottom: 30, paddingTop: 12, background: 'rgba(255,255,255,0.92)',\n      backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', borderTop: `1px solid ${C.line}`,\n      display: 'flex', alignItems: 'center', padding: '12px 22px 30px',\n    }}>\n      {item('today', 'today', 'Today')}\n      {item('history', 'chart', 'History')}\n      <button onClick={onAdd} style={{ flex: 1, border: 'none', background: 'transparent', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>\n        <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.teal, marginTop: -34, boxShadow: '0 8px 18px rgba(17,155,149,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n          <Icon name=\"plus\" size={28} color=\"#fff\" stroke={2.6} />\n        </div>\n      </button>\n      {item('family', 'user', 'Family')}\n      <div style={{ flex: 1 }} />\n    </div>\n  );\n}\n\n/* ---------------- root ---------------- */\nexport default function App() {\n  const [tab, setTab] = React.useState('today');\n  const [overlay, setOverlay] = React.useState(null); // 'add' | 'reminder'\n  const [reminderId, setReminderId] = React.useState(null);\n  const [doses, setDoses] = React.useState(INITIAL_DOSES);\n\n  const openReminder = (id) => { setReminderId(id); setOverlay('reminder'); };\n  const confirmDose = () => {\n    setDoses(ds => ds.map(d => d.id === reminderId ? { ...d, status: 'taken' } : d));\n    setOverlay(null);\n  };\n  const reminderDose = doses.find(d => d.id === reminderId);\n\n  return (\n    <div style={{ height: '100%', background: C.bg, color: C.ink, fontFamily: FONT, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>\n      <div style={{ height: 50, flexShrink: 0 }} />\n      {tab === 'today' && <TodayScreen doses={doses} onTakeNow={openReminder} />}\n      {tab === 'history' && <HistoryScreen />}\n      {tab === 'family' && <CaregiverScreen />}\n\n      <TabBar tab={tab} setTab={setTab} onAdd={() => setOverlay('add')} />\n\n      {overlay === 'add' && <AddSheet onClose={() => setOverlay(null)} onSave={() => setOverlay(null)} />}\n      {overlay === 'reminder' && reminderDose && <ReminderSheet dose={reminderDose} onClose={() => setOverlay(null)} onConfirm={confirmDose} />}\n    </div>\n  );\n}
