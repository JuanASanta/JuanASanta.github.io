// Simula, una sola vez al cargar, la ejecución de la suite de pruebas.
// Respeta prefers-reduced-motion: si está activo, muestra el resultado final sin animar.

document.addEventListener('DOMContentLoaded', () => {
  const suites = document.querySelectorAll('[data-suite]');
  const badges = document.querySelectorAll('[data-badge]');
  const runnerDot = document.getElementById('runner-dot');
  const runnerText = document.getElementById('runner-text');
  const footerSummary = document.getElementById('footer-summary');

  const total = suites.length;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finish = () => {
    runnerDot.classList.add('is-pass');
    runnerText.textContent = `${total}/${total} suites — PASS`;
    footerSummary.textContent = `${total} suites ejecutadas · ${total} superadas · 0 fallidas`;
  };

  if (prefersReducedMotion) {
    badges.forEach((b) => b.classList.add('is-pass'));
    finish();
    return;
  }

  runnerText.textContent = `ejecutando 0/${total}…`;

  badges.forEach((badge, i) => {
    setTimeout(() => {
      badge.classList.add('is-pass');
      runnerText.textContent = `ejecutando ${i + 1}/${total}…`;
      if (i === total - 1) {
        setTimeout(finish, 200);
      }
    }, 400 + i * 350);
  });
});
