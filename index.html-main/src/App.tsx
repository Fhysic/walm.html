import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarCheck2,
  Check,
  ChevronDown,
  Gift,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from 'lucide-react';

const faqs = [
  'How do I claim my $750 Gift Card?',
  'Is this offer really free?',
  'How long does it take to receive my gift card?',
  'Can I use this gift card on any purchase?',
  'Is my information secure?',
];

const claimers = [
  { name: 'Jordan M.', city: 'Austin, TX', time: '5 mins ago' },
  { name: 'Alex R.', city: 'Miami, FL', time: '1 min ago' },
  { name: 'Taylor B.', city: 'Denver, CO', time: '3 mins ago' },
  { name: 'Morgan K.', city: 'Chicago, IL', time: '2 mins ago' },
  { name: 'Casey L.', city: 'Phoenix, AZ', time: '4 mins ago' },
  { name: 'Jamie S.', city: 'Seattle, WA', time: '1 min ago' },
];

function WalmartMark() {
  return (
    <div className="walmart-mark" aria-label="Walmart">
      <img src="/walmart-spark-2025-logo-png_seeklogo-617594.png" alt="" />
      <span className="walmart-word">Walmart</span>
    </div>
  );
}

function ActivityNotice() {
  const [claimer, setClaimer] = useState(claimers[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    let index = 0;

    const scheduleNext = () => {
      showTimer = setTimeout(() => {
        index = (index + 1) % claimers.length;
        setClaimer(claimers[index]);
        setVisible(true);
        hideTimer = setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, 2600);
      }, 3000 + Math.random() * 2000);
    };

    scheduleNext();
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`activity-notice ${visible ? 'is-visible' : ''}`} aria-live="polite">
      <div className="notice-icon"><Gift size={24} strokeWidth={2} /><span><Check size={10} strokeWidth={4} /></span></div>
      <div className="notice-copy">
        <strong>{claimer.name}</strong>
        <b>claimed their <em>$750 Reward</em></b>
        <small>{claimer.city} • {claimer.time}</small>
      </div>
      <i className="online-dot" />
    </div>
  );
}

function Steps() {
  const steps = [
    <>Click The Button Below</>,
    <>Enter Your Basic Info</>,
    <>Complete <strong>4-5</strong> Recommended Deals</>,
    <>Receive Your Reward</>,
  ];

  return (
    <div className="steps-card">
      {steps.map((step, index) => (
        <div className="step" key={index}>
          <span>{index + 1}</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

function TrustRow() {
  return (
    <div className="trust-row">
      <span><ShieldCheck size={16} /> Verified</span>
      <b>•</b>
      <span><ShieldCheck size={16} /> Secure</span>
      <b>•</b>
      <span><ShieldCheck size={16} /> Official</span>
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="page-shell">
      <div className="decor decor-one">✦</div>
      <div className="decor decor-two">✦</div>
      <ActivityNotice />
      <section className="offer-card">
        <header className="offer-header">
          <WalmartMark />
          <Sparkles className="tiny-sparkles" size={22} />
          <div className="header-rule" />
          <h1>Walmart Special Promotion</h1>
        </header>

        <div className="reward-panel">
          <div>
            <p className="reward-label">EXCLUSIVE REWARD VALUE</p>
            <p className="reward-amount">$750</p>
            <p className="reward-subtitle">Redeemable at participating locations</p>
          </div>
          <Star className="reward-star" size={25} fill="currentColor" />
          <CalendarCheck2 className="calendar-icon" size={48} />
        </div>

        <div className="ornament"><span /> <Star size={11} fill="#9bcaff" /> <Star size={10} fill="#ffc229" /> <span /></div>
        <Steps />
        <TrustRow />
        <div className="viewers"><UsersRound size={17} /><strong>34 people</strong><span>viewing now</span><i /></div>
        <button className="start-button" type="button" onClick={() => { window.location.assign('https://giftclick.org/?offer_id=1913&aff_id=14721'); }}>
          GET STARTED <ArrowRight size={21} />
        </button>
        <p className="terms">Limited time promotion • Terms apply</p>
        <p className="disclaimer">This promotion is not sponsored, endorsed, or affiliated with Walmart<br />Inc.</p>
      </section>

      <section className="rating-card" aria-label="Trustpilot rating">
        <span className="trustpilot-star">★</span><strong>Trustpilot</strong><i />
        <span className="stars">★ ★ ★ ★ ☆</span><strong>4.5</strong><span>• Excellent</span>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={faq}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{faq}</span><ChevronDown size={17} />
              </button>
              {openFaq === index && <p>{index === 0 ? 'Complete the steps above to claim your reward.' : 'Yes, this offer is simple, secure, and free to enter.'}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer><p><span>★</span> Thanks for choosing us. Have a great rest of your day! <b>★</b></p><small>© 2026 Walmart Promo • All rights reserved</small></footer>
    </main>
  );
}

export default App;
