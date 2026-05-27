import React, { useState } from 'react';
import logo from './logo.png';
import cloth from './cloth.png';
import embroidery from './embroidery.png';
import wool from './wool.png';
import './App.css';

function App() {
  const [orderType] = useState<'custom' | 'bulk'>('custom');

  const heroSubtext =
    orderType === 'custom'
      ? 'From monogrammed keepsakes to one-of-a-kind embroidered portraits — every stitch is placed by hand with care, thread by thread.'
      : 'Bulk embroidery, uniform branding, and event orders — consistent quality and timelines for teams, boutiques, and celebrations.';

  return (
    <div className="landing">
      <div className="landing__bg" aria-hidden="true">
        <div className="landing__bg-photo" />
        <div className="landing__bg-overlay" />
      </div>

      <header className="nav">
        <div className="nav__left">
          <a href="/" className="nav__brand">
            <img src={logo} alt="" className="nav__logo" />
            <span className="nav__name">Stitch Story</span>
          </a>
        </div>

        <a
          href="https://www.instagram.com/direct/t/18122204257577521/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__cta"
        >
          DM us
        </a>
      </header>

      <main className="hero">
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Introducing Stitch Story — artful embroidery &amp; stitching
        </div>

        <h1 className="hero__title">
          Handcrafted embroidery
          <br />
          for every story you tell
        </h1>

        <p className="hero__subtitle">{heroSubtext}</p>

        <div className="hero__actions">
          <a
            href="https://www.instagram.com/direct/t/18122204257577521/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            DM us on Instagram
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href="https://www.instagram.com/stitch_story_21/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            View our Instagram
          </a>
        </div>
      </main>

      <section id="letter" className="section section--letter">
        <img src={embroidery} alt="" className="letter-corner letter-corner--tl" aria-hidden="true" />
        <img src={wool} alt="" className="letter-corner letter-corner--tr" aria-hidden="true" />
        <img src={cloth} alt="" className="letter-corner letter-corner--bl" aria-hidden="true" />
        <div className="letter-note">
          <div className="letter-note__topline">
            <p className="letter-note__salutation">My dearest,</p>
            <p className="letter-note__date">May 14, 2026</p>
          </div>

          <div className="letter-note__content">
          <p>
            As I Craft This Border With Needle And Thread, My Thoughts Are Filled With Memories Of Our Shared
            Laughter. This Intricate Floral Pattern, Stitched With Care, Reminds Me Of The Beauty We Find In The Quiet
            Moments. May Your Days Be Filled With Warmth And Color, Just Like These Blooms. I Look Forward To The Day
            We Can Stitch Together Again By The Window.
          </p>

          <p>
            Each Design We Make At Stitch Story Is Touched By Patience, Tradition, And Love. From Delicate Floral
            Hoops To Meaningful Custom Pieces, We Pour Our Heart Into Every Thread So Your Memories Can Live In Fabric
            Forever.
          </p>

          <p>
            If You Have A Story You Want Stitched, Send Us A Message And We Will Craft It Lovingly, One Careful Stitch
            At A Time.
          </p>
          </div>

          <p className="letter-note__signoff">With Fondest Love,</p>
          <p className="letter-note__signature">Stitch Story.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Stitch Story. Handcrafted with love.</p>
      </footer>
    </div>
  );
}

export default App;
