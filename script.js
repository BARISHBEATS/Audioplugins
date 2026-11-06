'use strict';

// All asset paths are relative so the site also works under /repository-name/.
const PLUGINS = {
  'air-bro': {
    name: 'AIR BRO', subtitle: 'AIR / EXCITER', image: 'assets/air-original.png',
    tag: 'OPEN UP YOUR SOUND.',
    description: 'Add air, harmonic shine and controlled top-end character to vocals, instruments and mixes.',
    features: ['AIR, SHINE and SILK controls for brightness, harmonics and dynamic high-frequency control', 'CLEAN, SILK and GLOW characters, plus A/B comparison', 'Ten starting presets and selectable oversampling'],
    imageNote: 'Original development interface. Final release may differ.'
  },
  'vox-bro': {
    name: 'VOX BRO', subtitle: 'VOCAL FX', image: 'assets/vox-original.png',
    tag: 'SHAPE. COLOR. STAND OUT.',
    description: 'Creative vocal effects for rap, hip-hop and modern productions. Give leads and ad-libs their own character.',
    features: ['Creative vocal-effect presets', 'Character, dirt and dry/effect mix controls', 'Telephone, radio and distinctive ad-lib textures'],
    imageNote: 'Original development interface. Final release may differ.'
  },
  'klipa-bro': {
    name: 'KLIPA BRO', subtitle: 'CLIPPER', image: 'assets/klipa-original.png',
    tag: 'CLIP CONTROL. HIT HARDER.',
    description: 'Shape peaks and add controlled weight to drums, 808s, bass and full mixes with a focused soft clipper.',
    features: ['Input drive, clipping threshold and output level controls', 'Source-focused starting presets', 'Selectable oversampling and a visible clipping curve'],
    imageNote: 'Earlier original interface, labelled KLIPA. Current product name: KLIPA BRO.'
  },
  'key-bro': {
    name: 'KEY BRO', subtitle: 'KEY / SCALE FINDER', image: 'assets/key-original.png',
    tag: 'FIND YOUR KEY. EXPLORE HARMONY.',
    description: 'Find the musical key in your audio and explore related scales with a keyboard and circle of fifths.',
    features: ['Key detection from audio or live input', 'Scale-aware piano keyboard and circle of fifths', 'Alternative key candidates to explore'],
    imageNote: "Earlier original interface, labelled BARISH’S STUDIO BRO. Current product name: KEY BRO."
  }
};

const entries = Object.entries(PLUGINS);
const image = p => `<img src="${p.image}" alt="${p.name} — original development interface" loading="lazy" width="1000" height="637">`;
const downloadButtons = name => `<div class="download-actions"><button class="fill-btn" type="button" disabled aria-label="${name} for macOS — Coming soon">macOS<small>Coming soon</small></button><button class="outline-btn" type="button" disabled aria-label="${name} for Windows — Coming soon">Windows<small>Coming soon</small></button></div>`;

const cards = entries.map(([id, p]) => `<article class="product-card"><a class="card-photo" href="#/plugins/${id}" aria-label="Explore ${p.name}">${image(p)}</a><div class="card-body"><div class="product-heading"><h3>${p.name}</h3><span class="free-mark">FOR FREE</span></div><div class="card-sub">${p.subtitle}</div><p>${p.description}</p><div class="coming">Coming soon</div><br><a class="text-link" href="#/plugins/${id}">LEARN MORE →</a><div class="image-note">${p.imageNote}</div></div></article>`).join('');
document.getElementById('home-cards').innerHTML = cards;
document.getElementById('plugins-cards').innerHTML = cards;
document.getElementById('hero-gallery').innerHTML = entries.map(([id, p]) => `<a class="preview-window" href="#/plugins/${id}" aria-label="Explore ${p.name}">${image(p)}<span class="go">VIEW PLUGIN ↗</span><span class="preview-caption">${p.name}<small>${p.subtitle}</small></span></a>`).join('');
document.getElementById('individual-plugins').innerHTML = entries.map(([id, p]) => `<div class="ind-row"><div><h4>${p.name}</h4><p>${p.subtitle} · Coming soon</p></div><a href="#/plugins/${id}" aria-label="${p.name} product page">PRODUCT PAGE →</a></div>`).join('');

function detailHtml(p) {
  return `<div class="inner-hero"><div class="shell"><div class="breadcrumbs"><a href="#/">BARISH BEATS</a><span>/</span><a href="#/plugins">ALL PLUGINS</a><span>/</span><span>${p.name}</span></div><div class="detail-grid"><div class="detail-copy"><div class="eyebrow orange">${p.subtitle}</div><div class="detail-free"><span class="free-mark">FOR FREE</span></div><h1>${p.name}</h1><h2>${p.tag}</h2><p class="intro">${p.description}</p><div class="coming">Coming soon · macOS &amp; Windows</div><br><a class="outline-btn" href="#/plugins">← ALL PLUGINS</a></div><div class="screenshot-wrap"><div class="detail-screenshot">${image(p)}</div><p class="image-note">${p.imageNote}</p></div></div></div></div><div class="shell detail-lower section"><div><div class="eyebrow orange">${p.name}</div><h3>KEY FEATURES</h3><ul class="features-list">${p.features.map(f => `<li>${f}</li>`).join('')}</ul></div><div class="download-box"><div class="eyebrow orange">INDIVIDUAL DOWNLOAD</div><h3>GET ${p.name}</h3><p>For free. Coming soon for macOS and Windows.</p>${downloadButtons(p.name)}<a class="bundle-back" href="#/downloads">Explore the All-Installer for all four plugins →</a></div></div>`;
}

const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
function renderPage(moveFocus = false) {
  const route = (location.hash || '#/').slice(1).split('/').filter(Boolean);
  let page = ['plugins', 'downloads', 'sounds', 'support', 'about'].includes(route[0]) ? route[0] : 'home';
  const plugin = route[0] === 'plugins' && Object.hasOwn(PLUGINS, route[1]) ? PLUGINS[route[1]] : null;
  if (plugin) {
    document.getElementById('detail-content').innerHTML = detailHtml(plugin);
    page = 'detail';
  }
  document.querySelectorAll('.page').forEach(el => {
    const active = el.id === `page-${page}`;
    el.classList.toggle('active', active);
    el.hidden = !active;
  });
  document.querySelectorAll('[data-nav]').forEach(a => {
    const active = a.dataset.nav === (page === 'detail' ? 'plugins' : page);
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  document.title = `${plugin ? plugin.name + ' — ' : page === 'home' ? '' : page.toUpperCase() + ' — '}BARISH BEATS`;
  closeMenu();
  if (moveFocus) document.getElementById('main-content').focus({preventScroll: true});
  window.scrollTo({top: 0, behavior: 'instant'});
}
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
window.addEventListener('hashchange', () => renderPage(true));
renderPage();
