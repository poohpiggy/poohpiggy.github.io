(() => {
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let refreshTimer;

  function updateTheme() {
    window.clearTimeout(refreshTimer);
    const now = new Date();
    const hour = now.getHours();
    const night = hour < 7 || hour >= 19;

    root.dataset.theme = night ? 'dark' : 'light';
    themeColor.content = night ? '#171c18' : '#f6f5f1';

    const untilNextMinute = 60_000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    refreshTimer = window.setTimeout(updateTheme, untilNextMinute);
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateTheme();
  });
  window.addEventListener('pageshow', updateTheme);
  updateTheme();
})();
