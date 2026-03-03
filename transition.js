(function(){
  const DURATION = 350; // match CSS --transition-duration
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;

  // Start in init state so CSS can animate to ready
  document.body.classList.add('page-transition-init');

  window.addEventListener('DOMContentLoaded', ()=>{
    // trigger enter animation
    requestAnimationFrame(()=>{
      document.body.classList.remove('page-transition-init');
      document.body.classList.add('page-transition-ready');
    });

    // intercept clicks on internal links
    document.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(!a) return;
      const href = a.getAttribute('href');
      const target = a.getAttribute('target');
      // ignore anchors, external links, downloads, JS links, mailto, tel
      if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if(target === '_blank') return;
      try{
        const url = new URL(href, location.href);
        if(url.origin !== location.origin) return; // external
      }catch(err){ return; }

      // allow user to use modifier keys to open in new tab
      if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      document.body.classList.remove('page-transition-ready');
      document.body.classList.add('page-transition-exit');

      setTimeout(()=>{ location.href = href; }, DURATION);
    }, {capture:false});

    // handle pageshow for bfcache/popstate restores
    window.addEventListener('pageshow', (ev)=>{
      if(ev.persisted){
        document.body.classList.remove('page-transition-exit');
        document.body.classList.add('page-transition-ready');
      }
    });
  });
})();
