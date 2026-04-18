if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
// Expandable panels on module pages
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('more-btn')) {
        e.preventDefault();
        var section = e.target.closest('.module-section');
        if (!section) return;
        section.classList.toggle('open');
        e.target.textContent = section.classList.contains('open') ? 'Less' : 'More';
    }
});
