(() => {
  const form = document.getElementById('subscription-form');
  const submitButton = document.getElementById('submit-button');
  const thankYouMessage = document.getElementById('thank-you');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.style.display = 'none';
    form.style.opacity = '0';

    thankYouMessage.style.display = 'block';
    setTimeout(() => {
      thankYouMessage.style.opacity = '1';
    }, 300);
  });
})();
