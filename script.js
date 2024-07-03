const shareBtn = document.getElementById('share-button');
const shareBtnPopup = document.getElementById('share-button-popup');
const cardAuthor = document.getElementById('author');

// Hides shareButtonPopup
function closeShareBtnPopup() {
  shareBtn.setAttribute('aria-expanded', 'false');

  if (
    window.matchMedia('(max-width: 60rem)').matches &&
    cardAuthor.hasAttribute('inert')
  ) {
    cardAuthor.removeAttribute('inert', '');
  }
}

// Shows shareButtonPopup
function openShareBtnPopup() {
  shareBtn.setAttribute('aria-expanded', 'true');

  if (window.matchMedia('(max-width: 60rem)').matches) {
    cardAuthor.setAttribute('inert', '');
    console.log('Inert attribute set:', cardAuthor.getAttribute('inert'));
  }
}

// Toggles shareButtonPopup on click
shareBtn.addEventListener('click', () => {
  if (shareBtn.getAttribute('aria-expanded') === 'false') {
    openShareBtnPopup();
  } else {
    closeShareBtnPopup();
  }
});

// Close shareButtonPopup with escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeShareBtnPopup();
  }
});

// Close shareButtonPopup when user clicks outside of shareButtonPopup
document.addEventListener('click', (event) => {
  if (
    !shareBtn.contains(event.target) &&
    !shareBtnPopup.contains(event.target)
  ) {
    closeShareBtnPopup();
  }
});
