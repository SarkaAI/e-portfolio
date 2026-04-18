if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
// Expandable panels on module pages
document.addEventListener('click', function(e) {
    var btn = e.target.closest('.more-btn');
    if (!btn) return;
    e.preventDefault();
    var section = btn.closest('.module-section');
    if (!section) return;
    section.classList.toggle('open');
    var textSpan = btn.querySelector('.button-text') || btn;
    textSpan.textContent = section.classList.contains('open') ? 'Less' : 'More';
});
