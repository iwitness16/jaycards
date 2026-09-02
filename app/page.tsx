import Image from 'next/image'
import Link from 'next/link'
import { Footer, SiteHeader } from '@/components/site-shell'

/* ── uses data ── */
const uses = [
  {
    img: 'use-entertainment.jpg',
    title: 'Enter entertainment venues',
    desc: "Don't be afraid of security checks and easily enter nightclubs, bars and other entertainment venues.",
  },
  {
    img: 'use-event.jpg',
    title: 'Attend an event or competition',
    desc: 'Feel free to attend parties and social events, and legally participate in sporting events.',
  },
  {
    img: 'use-travel.jpg',
    title: 'Travel car rental and hotel stay',
    desc: 'Easily rent a car for cross-state travel in the United States and quickly check into your hotel.',
  },
  {
    img: 'use-purchase.jpg',
    title: 'Purchase restricted items',
    desc: 'Alcohol, tobacco and other products are no longer restricted and can be purchased at any time.',
  },
  {
    img: 'use-employment.jpg',
    title: 'Get employment opportunities',
    desc: 'Match career needs (sales, driver) and get a job faster and easier.',
  },
  {
    img: 'use-more.jpg',
    title: 'Waiting for you to unlock more uses',
    desc: '',
  },
]

/* ── how-to steps ── */
const steps = [
  'Fill in your fake ID and shipping address info',
  'Submit order, contact us, complete payment',
  'Get electronic fake ID preview (fastest 3 days)',
  'Get package tracking number (2 days later)',
  'Get fake ID package (fastest 5–7 days)',
]

/* ── review wall screenshot slots ── */
const reviewSlots = [
  'review-chat-1.jpg',
  'review-chat-2.jpg',
  'review-chat-3.jpg',
  'review-chat-4.jpg',
  'review-chat-5.jpg',
  'review-chat-6.jpg',
]

export default function HomePage() {
  return (
    <>
      <SiteHeader active="Home" />
      <main>

        {/* ── HERO BANNER — full width, no side panels, no zoom ── */}
        <section className="hero-banner" aria-label="JayCards hero banner">
          <Image
            src="/images/cartelhero.jpg"
            alt="JayCards — Premium Fake IDs"
            width={1400}
            height={400}
            priority
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </section>

        {/* ── HERO LANDING SECTION ── */}
        <section className="hero-landing">
          <div className="shell hero-landing-inner">

            {/* Left — text + CTAs + social proof */}
            <div className="hero-landing-text">
              <h1 className="hero-landing-h1">
                Your Most Trusted Source for Premium,{' '}
                <span style={{ color: 'var(--red)' }}>Scannable Fake IDs</span>{' '}
                — Delivered Worldwide
              </h1>
              <p className="hero-landing-sub">
                Starting from <span style={{ color: 'var(--red)', fontWeight: 700 }}>$65</span>,
                {' '}Delivered within{' '}
                <span style={{ color: 'var(--red)', fontWeight: 700 }}>10 days</span>
              </p>

              {/* CTA buttons */}
              <div className="hero-landing-btns">
                <Link href="/orders" className="btn-yellow">Order Now</Link>
                <Link href="/contact" className="hero-btn-contact">Contact Us</Link>
              </div>

              {/* Social proof */}
              <div className="hero-landing-proof">
                <div className="hero-avatars">
                  {['man1.jpg', 'man2.jpg', 'man3.jpg', 'man4.jpg'].map((img) => (
                    <Image
                      key={img}
                      src={`/images/${img}`}
                      alt="JayCards customer"
                      width={40}
                      height={40}
                      className="hero-avatar-img"
                    />
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 800, color: 'var(--red)', lineHeight: 1 }}>20.5K+</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px' }}>Worldwide Delivery</p>
                </div>
              </div>

              {/* Star badge */}
              <div className="hero-star-badge">
                <span style={{ fontSize: '32px', color: '#e8a000', lineHeight: 1, flexShrink: 0 }}>★</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--foreground)' }}>Holograms, UV Marker</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>Anti-Counterfeiting</p>
                </div>
              </div>
            </div>

            {/* Right — lady holding ID */}
            <div className="hero-landing-img-wrap">
              <Image
                src="/images/landinggirl.png"
                alt="Lady holding a JayCards fake ID"
                width={480}
                height={540}
                className="hero-landing-img"
                priority
              />
            </div>

          </div>
        </section>

        {/* ── MINIMAL INTRO ── */}
        <section className="home-intro">
          <div className="shell">
            <div className="home-intro-inner">
              <p className="home-intro-eyebrow">Trusted Since 2010 · Your #1 Fake ID Source</p>
              <h2>JayCards</h2>
              <p className="home-intro-lead">
                Polycarbonate-grade, fully scannable IDs for USA, Canada, UK &amp; Europe.
                Every order ships with a free duplicate — discreetly delivered worldwide.
              </p>
              <div className="home-intro-pills">
                {['Scannable Barcode', 'UV Security', 'Free Duplicate', 'Discreet Shipping'].map(p => (
                  <span className="home-pill" key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── 3-CARD BROWSE SECTION — JayCards.png ── */}
        <section className="features-section">
          <div className="shell">
            <div className="features-grid">

              <div className="feature-card">
                <Image
                  src="/images/JayCards.png"
                  alt="Shop Fake IDs"
                  width={400}
                  height={270}
                  className="feature-card-img"
                />
                <h3>Shop Fake IDs</h3>
                <p>
                  Best selection of quality{' '}
                  <a href="/products">scannable fake IDs</a> customised with your photo and
                  information. Every card ships with a free duplicate.
                </p>
                <Link href="/products" className="view-more-link">View more →</Link>
              </div>

              <div className="feature-card">
                <Image
                  src="/images/JayCards.png"
                  alt="Premium Fake ID Maker"
                  width={400}
                  height={270}
                  className="feature-card-img"
                />
                <h3>Premium Fake ID Maker</h3>
                <p>
                  JayCards uses high-quality laser card printers, printing exclusively on polycarbonate
                  material identical to real government-issued IDs.
                </p>
                <Link href="/product-features" className="view-more-link">View more →</Link>
              </div>

              <div className="feature-card">
                <Image
                  src="/images/JayCards.png"
                  alt="Real JayCards Est. 2010"
                  width={400}
                  height={270}
                  className="feature-card-img"
                />
                <h3>Real JayCards — Est. 2010</h3>
                <p>
                  <a href="/about">JayCards</a> is the official and authentic fake ID maker with over 15
                  years of experience. Don&apos;t be fooled by imitations.
                </p>
                <Link href="/about" className="view-more-link">View more →</Link>
              </div>

            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── PRODUCT FEATURES PREVIEW — ft1-ft6 ── */}
        <section className="features-section" aria-labelledby="prod-features-heading">
          <div className="shell">
            <h2 id="prod-features-heading" style={{ textAlign: 'center', marginBottom: '8px' }}>Product Features</h2>
            <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '15px', marginBottom: '40px' }}>
              Every JayCards ID is built with the same security layers as a real government-issued card.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px 40px' }}>
              {[
                { img: '/images/ft1.png', title: 'Scannable', desc: 'Barcode on the back encodes your info — verified by most apps, scanners and entry systems.' },
                { img: '/images/ft2.png', title: 'Hologram', desc: 'Each state uses a unique holographic pattern creating a 3D light-refraction effect.' },
                { img: '/images/ft3.png', title: 'UV Mark', desc: 'Under UV or black light the card reveals a state-specific hidden pattern identical to the real thing.' },
                { img: '/images/ft4.png', title: 'Advanced Technology', desc: 'Anti-counterfeiting, embossing and laser engraving keep card info fade-resistant with raised texture.' },
                { img: '/images/ft5.png', title: 'Strong Durability', desc: 'Resistant to tearing, water and chemical corrosion — built to last.' },
                { img: '/images/ft6.png', title: 'High Quality', desc: 'Premium polycarbonate material. Bending tests confirm they do not crack or break.' },
              ].map(({ img, title, desc }) => (
                <div key={title} style={{ textAlign: 'center' }}>
                  <div style={{ width: '100%', aspectRatio: '1.6', overflow: 'hidden', borderRadius: '8px', marginBottom: '14px', background: '#f4f4f5' }}>
                    <Image src={img} alt={title} width={400} height={250} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <Link href="/product-features" style={{ display: 'inline-block', color: 'var(--red)', fontWeight: 700, fontSize: '14px', borderBottom: '1px solid var(--red)', paddingBottom: '2px', letterSpacing: '0.04em' }}>
                View full product details →
              </Link>
            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── POLY CALLOUT ── */}
        <section style={{ padding: '52px 0 40px' }}>
          <div className="shell poly-section">
            <h2>Don&apos;t risk getting caught with a fake id!</h2>
            <p>
              It is vital that your fake ID be printed on the correct material — polycarbonate.
              A real card makes a distinct metallic sound, like a DVD disc. Many states now require this
              material: California, New York, Florida, and more. Rest assured that JayCards
              uses genuine polycarbonate stock on every single order.
            </p>
          </div>
        </section>

        {/* ── WHAT A SCANNABLE ID CAN DO FOR YOU ── */}
        <section className="uses-section" aria-labelledby="uses-heading">
          <div className="shell">
            <h2 id="uses-heading">What a scannable ID card can do for you?</h2>
            <div className="uses-grid">
              {uses.map((use) => (
                <div className="use-card" key={use.title}>
                  <Image
                    src={`/images/${use.img}`}
                    alt={use.title}
                    width={400}
                    height={258}
                    className="use-card-img"
                    style={{ width: '100%', aspectRatio: '1.55', objectFit: 'cover' }}
                  />
                  <h3>{use.title}</h3>
                  {use.desc && <p>{use.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO GET THE BEST FAKE ID ── */}
        <section className="howto-section" aria-labelledby="howto-heading">
          <div className="shell">
            <h2 id="howto-heading">How to Get the Best Fake ID</h2>
            <div className="howto-grid">
              <div>
                <Image
                  src="/images/howto-delivery.jpg"
                  alt="Fake ID delivery"
                  width={480}
                  height={560}
                  className="howto-img"
                  style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '0.85', display: 'block', background: '#222' }}
                />
              </div>
              <div className="howto-steps">
                {steps.map((step, i) => (
                  <div key={i}>
                    <div className="howto-step">
                      <span className="step-num">{i + 1}.</span>
                      <span className="step-text">{step}</span>
                    </div>
                    {i < steps.length - 1 && <span className="step-arrow">↓</span>}
                  </div>
                ))}
                <div className="howto-actions">
                  <Link href="/pricing" className="btn-yellow">Order Now</Link>
                  <Link href="/contact" className="btn-outline-dark">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOUCH DOWN REVIEWS ── */}
        <section className="review-wall-section" aria-labelledby="touchdown-heading">
          <div className="shell">
            <h2 id="touchdown-heading">Touch Down Reviews</h2>
            <p>Real customer proof. Every screenshot is authentic — we deliver every time.</p>
            <div className="review-wall-grid">
              {reviewSlots.map((img, i) => (
                <div className="review-wall-item" key={i}>
                  <Image
                    src={`/images/${img}`}
                    alt={`Customer review ${i + 1}`}
                    width={360}
                    height={420}
                    style={{ width: '100%', aspectRatio: '0.85', objectFit: 'cover', display: 'block', borderRadius: 0 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner" aria-label="Buy fake id call to action">
          <Image
            src="/images/cartelhero.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', zIndex: 0 }}
            aria-hidden="true"
          />
          <div className="cta-banner-bg" />
          <div className="shell cta-banner-content">
            <h2>Ready to get your fake id?</h2>
            <Link href="/products" className="btn-outline-white">BUY FAKE ID</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
