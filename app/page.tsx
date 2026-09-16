"use client";

import { useEffect } from "react";

/* ---------------------------------------------------------------
   FILM REVIEWS
   To add the next opponent, copy one line and change the two bits.
   The href is the slide's hash route inside the handbook.
   --------------------------------------------------------------- */
const filmReviews = [
  { opponent: "vs Colorado Storm", href: "/handbook#/film-storm" },
];

export default function Home() {
  /* Anyone opening an old link like rush-handbook.vercel.app/#/film-storm
     gets forwarded to the same slide in its new home. */
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#/")) {
      window.location.replace("/handbook" + hash);
    }
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap"
      />

      <style>{css}</style>

      <main className="room">
        <header className="hero">
          <div className="sweep" aria-hidden="true" />

          <div className="crests">
            <span className="plate plate-rush">
              <img src="/img/Rush_Logo__Black_Striping.png" alt="Colorado Rush" />
            </span>
            <span className="plate plate-ecnl">
              <img src="/img/ECNL_LOGO.png" alt="ECNL" />
            </span>
          </div>

          <p className="kicker">Colorado Rush</p>
          <h1>
            U14G
            <span className="room-word">Team Room</span>
          </h1>
          <p className="lede">
            Everything for the season in one place. Know the standards, know the
            opponent, know what the film showed.
          </p>
        </header>

        <nav className="rows" aria-label="Team Room sections">
          <a className="row" href="/handbook">
            <span className="row-title">Handbook</span>
            <span className="row-note">
              How we play, how we train, how we carry ourselves. Read it before
              the season, come back to it all year.
            </span>
          </a>

          <a className="row" href="/scouts">
            <span className="row-title">Scouts</span>
            <span className="row-note">
              The report on this week&rsquo;s opponent. Sign in with your name and
              PIN.
            </span>
          </a>

          <div className="row row-static">
            <span className="row-title">Film Review</span>
            <span className="row-note">
              What actually happened, game by game.
            </span>
            <ul className="films">
              {filmReviews.map((film) => (
                <li key={film.href}>
                  <a href={film.href}>{film.opponent}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <footer className="foot">
          <p>Colorado Rush U14G &middot; ECNL</p>
        </footer>
      </main>
    </>
  );
}

const css = `
  :root {
    --ink: #05132a;
    --ink-soft: #0c2344;
    --rush: #1b62b0;
    --rush-bright: #3d8ee0;
    --paper: #ffffff;
    --muted: #9fb4cd;
    --teal: #6fb4bc;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--ink);
  }

  .room {
    min-height: 100vh;
    background: var(--ink);
    color: var(--paper);
    font-family: "Barlow", system-ui, -apple-system, "Segoe UI", sans-serif;
    display: flex;
    flex-direction: column;
  }

  /* ---------- hero ---------- */

  .hero {
    position: relative;
    overflow: hidden;
    padding: 56px 28px 64px;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
  }

  /* the orbital sweep from the Rush mark */
  .sweep {
    position: absolute;
    top: -230px;
    right: -320px;
    width: 940px;
    height: 620px;
    border: 3px solid var(--rush);
    border-radius: 50%;
    transform: rotate(-14deg);
    opacity: 0.55;
    pointer-events: none;
  }

  .sweep::after {
    content: "";
    position: absolute;
    inset: 84px;
    border: 2px solid var(--rush);
    border-radius: 50%;
    opacity: 0.35;
  }

  .crests {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 40px;
  }

  .plate {
    background: var(--paper);
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .plate img { display: block; }

  .plate-rush { padding: 14px 18px; }
  .plate-rush img { height: 38px; width: auto; }

  .plate-ecnl { padding: 8px; }
  .plate-ecnl img { height: 50px; width: auto; }

  .kicker {
    position: relative;
    margin: 0 0 2px;
    font-family: "Barlow Condensed", "Barlow", sans-serif;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.04em;
    color: var(--rush-bright);
  }

  h1 {
    position: relative;
    margin: 0 0 22px;
    font-family: "Barlow Condensed", "Barlow", sans-serif;
    font-weight: 700;
    font-size: clamp(64px, 13vw, 132px);
    line-height: 0.86;
    letter-spacing: -0.015em;
    display: flex;
    flex-direction: column;
  }

  .room-word { color: var(--rush-bright); }

  .lede {
    position: relative;
    margin: 0;
    max-width: 44ch;
    font-size: 19px;
    line-height: 1.55;
    color: var(--muted);
  }

  /* ---------- section rows ---------- */

  .rows {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 28px;
    flex: 1;
    border-top: 1px solid rgba(159, 180, 205, 0.22);
  }

  .row {
    display: block;
    padding: 34px 0 32px;
    border-bottom: 1px solid rgba(159, 180, 205, 0.22);
    text-decoration: none;
    color: inherit;
  }

  .row-title {
    display: block;
    font-family: "Barlow Condensed", "Barlow", sans-serif;
    font-weight: 700;
    font-size: clamp(38px, 6vw, 56px);
    line-height: 1;
    letter-spacing: -0.01em;
    color: var(--paper);
    transition: color 0.18s ease;
  }

  .row-note {
    display: block;
    margin-top: 10px;
    max-width: 52ch;
    font-size: 17px;
    line-height: 1.5;
    color: var(--muted);
  }

  a.row:hover .row-title,
  a.row:focus-visible .row-title {
    color: var(--rush-bright);
  }

  a.row:focus-visible {
    outline: 3px solid var(--teal);
    outline-offset: 6px;
  }

  .row-static { cursor: default; }

  .films {
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .films a {
    display: inline-block;
    padding: 11px 18px;
    border: 1px solid rgba(159, 180, 205, 0.4);
    border-radius: 999px;
    font-size: 16px;
    font-weight: 500;
    color: var(--paper);
    text-decoration: none;
    transition: border-color 0.18s ease, background 0.18s ease;
  }

  .films a:hover,
  .films a:focus-visible {
    border-color: var(--rush-bright);
    background: rgba(61, 142, 224, 0.14);
  }

  .films a:focus-visible {
    outline: 3px solid var(--teal);
    outline-offset: 3px;
  }

  /* ---------- foot ---------- */

  .foot {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 28px 44px;
    color: rgba(159, 180, 205, 0.7);
    font-size: 15px;
  }

  .foot p { margin: 0; }

  @media (max-width: 640px) {
    .hero { padding: 40px 20px 48px; }
    .rows { padding: 0 20px; }
    .foot { padding: 26px 20px 36px; }
    .sweep { right: -420px; opacity: 0.4; }
    .lede { font-size: 17px; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
  }
`;
