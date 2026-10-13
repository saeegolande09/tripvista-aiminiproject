:root {
  --ink: #202b35;
  --muted: #71808b;
  --paper: #fffaf5;
  --white: #ffffff;
  --peach: #ff8e70;
  --coral: #f26f61;
  --mint: #dff5e9;
  --line: #ece8e2;
  --shadow: 0 18px 50px rgba(37, 47, 55, 0.09);
  --radius: 24px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: "DM Sans", sans-serif;
  line-height: 1.55;
}

button,
input,
select {
  font: inherit;
}

button,
a,
select {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

.section-wrap {
  width: min(1160px, calc(100% - 48px));
  margin-inline: auto;
}

/* Navigation */

.navbar {
  min-height: 82px;
  padding: 0 max(24px, calc((100% - 1160px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: rgba(255, 250, 245, 0.94);
  backdrop-filter: blur(14px);
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(236, 232, 226, 0.75);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1px;
}

.brand-mark {
  display: grid;
  place-items: center;
  background: #ffdfd2;
  color: #e96855;
  border-radius: 13px;
  width: 42px;
  height: 42px;
  font-size: 22px;
  flex-shrink: 0;
}

.brand-accent {
  color: #f07861;
}

.brand small {
  display: block;
  margin-top: 5px;
  font-family: "DM Sans", sans-serif;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #9a9b96;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  font-weight: 700;
}

.nav-links > a:hover,
.text-button:hover {
  color: var(--coral);
}

.nav-saved {
  border: 0;
  background: transparent;
  color: var(--ink);
  font-weight: 700;
}

.nav-saved span {
  display: inline-grid;
  place-items: center;
  background: #ffe6dc;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  margin-left: 5px;
  font-size: 12px;
}

.nav-cta {
  background: var(--ink);
  color: white;
  border-radius: 13px;
  padding: 12px 17px;
  font-size: 13px;
  font-weight: 700;
}

.nav-cta span {
  margin-left: 10px;
}

/* Hero */

.hero {
  min-height: 535px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 54px;
  padding-top: 55px;
  padding-bottom: 55px;
}

.eyebrow {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.7px;
  color: #e47761;
  display: flex;
  align-items: center;
  gap: 9px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #64be8b;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #e3f4e9;
}

.hero h1 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(44px, 5.4vw, 70px);
  letter-spacing: -3.5px;
  line-height: 1.08;
  margin: 23px 0 19px;
}

.gradient-text {
  background: linear-gradient(105deg, #f28b70, #db648b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sparkle {
  font-size: 0.43em;
  color: #f7b957;
  vertical-align: top;
}

.hero-description {
  max-width: 500px;
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.button {
  border: 0;
  border-radius: 13px;
  padding: 14px 20px;
  font-weight: 800;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  color: white;
  background: linear-gradient(110deg, #f28c70, #e96d71);
  box-shadow: 0 9px 22px #ee8b7438;
}

.button-soft {
  background: white;
  color: var(--ink);
  box-shadow: 0 5px 20px #26313b0c;
}

.hero-social {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 35px;
}

.avatar-stack {
  display: flex;
}

.avatar-stack span {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid var(--paper);
  background: #ffe7d8;
  border-radius: 50%;
  margin-left: -7px;
  font-size: 15px;
}

.avatar-stack span:first-child {
  margin-left: 0;
}

.hero-social p {
  margin: 0;
  font-size: 11px;
  line-height: 1.6;
}

.hero-social p span {
  color: var(--muted);
}

.hero-art {
  height: 405px;
  position: relative;
}

.hero-photo {
  object-fit: cover;
  position: absolute;
  box-shadow: var(--shadow);
}

.hero-photo-main {
  width: 76%;
  height: 85%;
  right: 3%;
  top: 3%;
  border-radius: 42% 42% 25px 25px;
}

.hero-photo-small {
  width: 39%;
  height: 43%;
  left: 0;
  bottom: 1%;
  border: 8px solid var(--paper);
  border-radius: 24px;
}

.floating-note {
  position: absolute;
  left: 1%;
  top: 14%;
  display: flex;
  gap: 10px;
  align-items: center;
  background: white;
  padding: 13px 16px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  font-size: 12px;
}

.floating-note > span {
  display: grid;
  place-items: center;
  width: 33px;
  height: 33px;
  border-radius: 11px;
  background: #fff0d9;
  color: #e5a345;
}

.floating-note strong,
.floating-note small {
  display: block;
}

.floating-note small {
  font-size: 10px;
  color: var(--muted);
  margin-top: 2px;
}

.hero-sticker {
  position: absolute;
  right: 0;
  bottom: 8%;
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #ffe4a8;
  color: #8c6741;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.1;
  transform: rotate(10deg);
  text-align: center;
}

.hero-sticker span {
  font-size: 10px;
  letter-spacing: 1px;
}

/* Feature strip */

.trust-strip {
  background: #fff;
  display: flex;
  justify-content: center;
  gap: clamp(25px, 8vw, 110px);
  padding: 25px 24px;
  border-block: 1px solid #f1ece6;
}

.trust-strip > div {
  display: grid;
  grid-template-columns: 38px auto;
  column-gap: 11px;
  align-items: center;
}

.trust-strip > div > span {
  grid-row: span 2;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  background: #fff1e8;
  border-radius: 13px;
  font-size: 18px;
}

.trust-strip strong {
  font-size: 12px;
}

.trust-strip small {
  font-size: 10px;
  color: var(--muted);
}

/* Planner */

.planner-section,
.explore-section {
  padding-top: 86px;
  padding-bottom: 36px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 27px;
}

.section-heading h2 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(30px, 4vw, 43px);
  letter-spacing: -1.8px;
  line-height: 1.15;
  margin: 12px 0 0;
}

.section-heading > p {
  max-width: 270px;
  color: var(--muted);
  font-size: 13px;
  margin: 0 0 5px;
}

.planner-card {
  background: white;
  border: 1px solid #f0ebe5;
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: 0 12px 40px #33301c08;
}

.planner-top {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 24px;
}

.planner-icon {
  display: grid;
  place-items: center;
  width: 47px;
  height: 47px;
  border-radius: 15px;
  background: #ffede4;
  color: #e97a62;
  font-size: 22px;
  flex-shrink: 0;
}

.planner-top h3 {
  margin: 0;
  font-size: 16px;
}

.planner-top p {
  margin: 3px 0 0;
  color: var(--muted);
  font-size: 12px;
}

.step-pill {
  margin-left: auto;
  background: #f7f4ef;
  border-radius: 30px;
  padding: 8px 12px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #9a9389;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
  font-size: 12px;
  font-weight: 800;
}

.field select,
.sort-label select {
  width: 100%;
  min-width: 0;
  border: 1px solid #e9e5df;
  background: #fffdfb;
  color: #4b5660;
  border-radius: 11px;
  padding: 13px 14px;
  outline: none;
}

.field select:focus,
.search-wrap:focus-within {
  border-color: #f29a83;
  box-shadow: 0 0 0 3px #f29a831c;
}

.planner-submit {
  margin-top: 23px;
}

/* Explore and filters */

.explore-section {
  padding-top: 64px;
  padding-bottom: 90px;
}

.explore-heading {
  align-items: end;
}

.section-subtitle {
  font-size: 13px;
  color: var(--muted);
  margin: 10px 0 0;
}

.search-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 0 14px;
  width: min(280px, 100%);
  height: 46px;
  color: #a0a5a5;
}

.search-wrap > span {
  font-size: 25px;
}

.search-wrap input {
  border: 0;
  outline: 0;
  min-width: 0;
  width: 100%;
  background: transparent;
  color: var(--ink);
  font-size: 12px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin: 28px 0 17px;
}

.filter-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-pill {
  border: 1px solid #ece6de;
  border-radius: 30px;
  padding: 9px 14px;
  background: white;
  color: #68737a;
  font-size: 11px;
  font-weight: 700;
}

.filter-pill.active,
.filter-pill:hover {
  background: #26343c;
  color: white;
  border-color: #26343c;
}

.sort-label {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 11px;
  white-space: nowrap;
}

.sort-label select {
  width: auto;
  padding: 9px 12px;
  font-size: 11px;
}

.results-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 14px;
}

.results-meta p {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

.text-button {
  border: 0;
  background: transparent;
  color: #e47761;
  font-size: 11px;
  font-weight: 800;
}

/* Destination cards */

.destination-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.destination-card {
  min-width: 0;
  overflow: hidden;
  border-radius: 20px;
  background: white;
  border: 1px solid #f0ebe5;
  box-shadow: 0 8px 28px #29343d08;
  transition: transform 0.22s, box-shadow 0.22s;
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.card-image-wrap {
  height: 215px;
  position: relative;
  background: #f1eee9;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}

.destination-card:hover .card-image {
  transform: scale(1.04);
}

.card-badge {
  position: absolute;
  left: 14px;
  top: 14px;
  background: #ffffffeb;
  backdrop-filter: blur(8px);
  border-radius: 30px;
  padding: 7px 10px;
  font-size: 10px;
  font-weight: 800;
}

.favorite-button {
  position: absolute;
  right: 13px;
  top: 13px;
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  border: 0;
  border-radius: 50%;
  background: #ffffffed;
  color: #59636a;
  font-size: 20px;
  box-shadow: 0 4px 12px #17232b15;
}

.favorite-button.is-favorite {
  color: #e45e72;
  background: #fff0f1;
}

.card-body {
  padding: 17px 18px 19px;
}

.card-location {
  font-size: 10px;
  color: #879199;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  margin-top: 4px;
}

.card-title-row h3 {
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 20px;
  letter-spacing: -0.5px;
}

.rating {
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
  color: #b78236;
}

.card-description {
  font-size: 12px;
  line-height: 1.7;
  color: var(--muted);
  min-height: 42px;
  margin: 10px 0 15px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 17px;
}

.card-tag {
  font-size: 9px;
  padding: 5px 8px;
  border-radius: 20px;
  background: #f7f4ef;
  color: #747a7b;
  font-weight: 700;
}

.card-footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid #f2eee9;
  padding-top: 14px;
}

.price-label {
  font-size: 9px;
  color: #90989d;
}

.price-value {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.4px;
}

.price-value small {
  font-size: 10px;
  color: var(--muted);
  font-weight: 500;
  letter-spacing: 0;
}

.card-link {
  font-size: 11px;
  font-weight: 800;
  color: #e47761;
}

.empty-state {
  text-align: center;
  background: #fff;
  border: 1px dashed #e8dfd5;
  border-radius: 22px;
  padding: 45px 20px;
}

.empty-emoji {
  font-size: 38px;
}

.empty-state h3 {
  margin: 12px 0 5px;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.empty-state p {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 13px;
}

/* Footer and notifications */

.footer {
  border-top: 1px solid var(--line);
  padding: 27px max(24px, calc((100% - 1160px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #fff;
}

.footer-brand {
  font-size: 18px;
}

.footer-brand .brand-mark {
  width: 35px;
  height: 35px;
  font-size: 18px;
}

.footer p,
.footer > span {
  font-size: 11px;
  color: var(--muted);
}

.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%, 20px);
  opacity: 0;
  pointer-events: none;
  z-index: 50;
  background: #26343c;
  color: #fff;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  font-size: 12px;
  transition: opacity 0.2s, transform 0.2s;
}

.toast.show {
  opacity: 1;
  transform: translate(-50%, 0);
}

[hidden] {
  display: none !important;
}

/* Tablet */

@media (max-width: 850px) {
  .navbar {
    min-height: 72px;
  }

  .nav-links {
    gap: 16px;
  }

  .nav-links > a {
    display: none;
  }

  .hero {
    gap: 24px;
    min-height: 480px;
  }

  .hero h1 {
    font-size: clamp(42px, 7vw, 60px);
  }

  .hero-art {
    height: 340px;
  }

  .trust-strip {
    gap: 22px;
  }

  .trust-strip > div {
    grid-template-columns: 32px auto;
  }

  .trust-strip > div > span {
    width: 32px;
    height: 32px;
  }

  .destination-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card-image-wrap {
    height: 195px;
  }
}

/* Mobile */

@media (max-width: 600px) {
  .section-wrap {
    width: calc(100% - 32px);
  }

  .navbar {
    padding: 0 16px;
    gap: 10px;
  }

  .brand {
    font-size: 19px;
    gap: 7px;
  }

  .brand-mark {
    width: 36px;
    height: 36px;
  }

  .brand small {
    font-size: 7px;
  }

  .nav-links {
    margin-left: auto;
  }

  .nav-saved {
    font-size: 12px;
    padding: 6px;
  }

  .nav-cta {
    font-size: 11px;
    padding: 10px 12px;
  }

  .nav-cta span {
    margin-left: 4px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding-top: 45px;
    padding-bottom: 35px;
    gap: 20px;
  }

  .hero h1 {
    font-size: clamp(43px, 12vw, 61px);
    letter-spacing: -2.6px;
    margin-top: 17px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-art {
    height: 290px;
    width: 100%;
    max-width: 440px;
    margin: auto;
  }

  .hero-photo-main {
    width: 75%;
    height: 86%;
  }

  .floating-note {
    top: 10%;
    padding: 9px 11px;
    font-size: 10px;
  }

  .floating-note small {
    font-size: 9px;
  }

  .hero-sticker {
    width: 72px;
    height: 72px;
    font-size: 17px;
  }

  .hero-sticker span {
    font-size: 8px;
  }

  .trust-strip {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 20px 26px;
  }

  .trust-strip > div {
    max-width: 270px;
  }

  .planner-section,
  .explore-section {
    padding-top: 58px;
  }

  .section-heading h2 {
    font-size: 32px;
  }

  .section-heading > p {
    margin-top: 12px;
  }

  .planner-card {
    padding: 20px 16px;
  }

  .planner-top {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .step-pill {
    margin-left: 0;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .field select {
    padding: 12px;
  }

  .explore-heading {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .search-wrap {
    width: 100%;
    margin-top: 20px;
  }

  .toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .sort-label {
    width: 100%;
    justify-content: space-between;
  }

  .sort-label select {
    flex: 1;
    max-width: 65%;
  }

  .destination-grid {
    grid-template-columns: 1fr;
    gap: 17px;
  }

  .card-image-wrap {
    height: 235px;
  }

  .card-description {
    min-height: 0;
  }

  .footer {
    padding: 24px 16px;
    flex-wrap: wrap;
  }

  .footer p {
    order: 3;
    width: 100%;
    margin: 0;
  }

  .footer > span {
    margin-left: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
}
