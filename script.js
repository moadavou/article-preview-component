const shareButton = document.getElementById('share-button');
const shareButtonPopup = document.getElementById('share-button-popup');

// Hides shareButtonPopup
function closeShareButtonPopup() {
  shareButton.setAttribute('aria-expanded', 'false');
}

// Shows shareButtonPopup and focuses the first link
function openShareButtonPopup() {
  shareButton.setAttribute('aria-expanded', 'true');

  const shareButtonPopupFirstLink = shareButtonPopup.querySelector('a');
  if (shareButtonPopupFirstLink) {
    shareButtonPopupFirstLink.focus();
  }
}

// Toggles shareButtonPopup on click
shareButton.addEventListener('click', () => {
  if (shareButton.getAttribute('aria-expanded') === 'false') {
    openShareButtonPopup();
  } else {
    closeShareButtonPopup();
  }
});

// Close shareButtonPopup with escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeShareButtonPopup();
  }
});

// Close shareButtonPopup when user clicks outside of shareButtonPopup
document.addEventListener('click', (event) => {
  if (
    !shareButton.contains(event.target) &&
    !shareButtonPopup.contains(event.target)
  ) {
    closeShareButtonPopup();
  }
});
