
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.querySelector('.learn-more-btn');
  const learnMoreSection = document.getElementById('learnMoreSection');

  if (!learnMoreBtn || !learnMoreSection) {
    return;
  }

  learnMoreSection.hidden = true;

  learnMoreBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isHidden = learnMoreSection.hidden;
    learnMoreSection.hidden = !isHidden;
    learnMoreBtn.setAttribute('aria-expanded', String(isHidden));

    if (isHidden) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
