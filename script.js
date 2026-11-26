const links = [...document.querySelectorAll('.nav-link')];
const views = [...document.querySelectorAll('.view')];
function showView(name) {
  const target = name === 'outputs' ? 'outputs' : 'home';
  views.forEach(view => { const active = view.id === target; view.hidden = !active; view.classList.toggle('active', active); });
  links.forEach(link => { const active = link.dataset.view === target; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current'); });
  window.scrollTo({top:0,behavior:'smooth'});
}
links.forEach(link => link.addEventListener('click', event => { event.preventDefault(); history.replaceState(null,'',`#${link.dataset.view}`); showView(link.dataset.view); }));
window.addEventListener('hashchange', () => showView(location.hash.slice(1)));
showView(location.hash.slice(1));
