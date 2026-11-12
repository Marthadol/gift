import { GiftForm } from "./gift-form";
import { GiftIcon } from "./icons";

export function GiftContent() {
  return <>
    <section className="hero" aria-labelledby="gift-title">
      <p className="eyebrow"><span /> A SPECIAL DELIVERY, JUST FOR YOU</p>
      <h1 id="gift-title">Your gift is ready for<br className="desktop-break" /> delivery, <em>Eduardo!</em></h1>
      <p className="subtitle">A gift from <strong>Evan Kate</strong></p>
    </section>
    <section className="gift-section" aria-label="Your gifts">
      <div className="section-heading"><span>Two gifts. One lovely surprise.</span><span className="recipient-tag">FOR EDUARDO VALDEZ</span></div>
      <div className="photo-grid">
        <article className="photo-card"><div className="photo-wrap package-photo"><img src="/api/photos/package" alt="A gift package ready at a delivery facility" width="1008" height="1067" fetchPriority="high"/><span className="photo-number">01 / YOUR GIFTS</span></div><div className="card-caption"><div><span className="card-kicker">A LITTLE ANTICIPATION</span><h2>Package</h2></div><span className="card-symbol"><GiftIcon /></span></div></article>
        <article className="photo-card"><div className="photo-wrap truck-photo"><img src="/api/photos/truck" alt="A red GMC pickup truck" width="722" height="1200" fetchPriority="high"/><span className="photo-number">02 / YOUR GIFTS</span></div><div className="card-caption"><div><span className="card-kicker">SOMETHING TO LOOK FORWARD TO</span><h2>Truck</h2></div><span className="card-symbol" aria-hidden="true">↗</span></div></article>
      </div>
    </section>
    <section className="delivery-panel" aria-label="Delivery details">
      <div className="delivery-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4m8-4v4m-8 8h3"/></svg></div>
      <div><p className="detail-label">PROPOSED DELIVERY DATE</p><p className="delivery-date"><span className="sr-only">Proposed delivery date: </span>November 12<span className="date-flourish" aria-hidden="true">✦</span></p></div>
      <p className="delivery-message">A thoughtful surprise.<br />Something wonderful to look forward to.</p>
    </section>
    <GiftForm />
  </>;
}
