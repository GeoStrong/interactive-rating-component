const ratingButtons = document.querySelectorAll('.component__btn');
const submitButton = document.querySelector('.btn');
const starterComponent = document.querySelector('.component__starter');
const completeComponent = document.querySelector('.component__complete');
const ratingScore = document.querySelector('.rating');

let rating;

const clearActive = () => {
  ratingButtons.forEach((button) => {
    if (button.classList.contains('active')) button.classList.remove('active');
  });
};

ratingButtons.forEach((button) =>
  button.addEventListener('click', () => {
    clearActive();
    rating = button.dataset.id;
    button.classList.add('active');
    submitButton.classList.remove('error');
  })
);

const checkRating = () => {
  if (!rating) {
    submitButton.classList.add('error');
  }
};

submitButton.addEventListener('click', () => {
  checkRating();
  if (!rating) return;
  starterComponent.classList.add('hide');
  completeComponent.classList.remove('hide');
  ratingScore.innerHTML = rating;
});
