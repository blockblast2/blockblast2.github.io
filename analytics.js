(function() {
  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-840LHYQB31";
  document.head.appendChild(script);

  script.onload = function() {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-840LHYQB31');

    // PWA Detection
    let displayMode = 'browser';
    let isPwa = false;
    const mqStandAlone = '(display-mode: fullscreen)';

    if (navigator.standalone || window.matchMedia(mqStandAlone).matches) {
      displayMode = 'fullscreen';
      isPwa = true;
    }

    // Send PWA status event
    gtag('event', 'pwa_check', { 'pwa': isPwa });
  };
})();
