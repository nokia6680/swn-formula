// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var firstPage = document.querySelector('.header');
var secondPage = document.querySelector('.content');
var secondStep = document.querySelector('.js-activate');
var submitBtn = document.querySelector('.js-submit');
var thirdPage = document.querySelector('.event');
var lastPage = document.querySelector('.footer');

if (firstPage) {
    setTimeout(function() {
        return firstPage.classList.add('passed');
    }, 800);
}

if (secondStep) {
    secondStep.addEventListener('click', function() {
        firstPage.classList.add('passed-2');
        secondPage.classList.add('passed');
        setTimeout(function() {
            return secondPage.classList.add('invisible');
        }, 1000);

        setTimeout(function() {
            return thirdPage.classList.add('visible');
        }, 500);
    });
};


if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        event.preventDefault();
        thirdPage.classList.add('passed');

        setTimeout(function() {
            return thirdPage.classList.add('invisible');
        }, 500);

        setTimeout(function() {
            return lastPage.classList.add('visible');
        }, 500);

        setTimeout(function() {
            return lastPage.classList.add('active');
        }, 1000);
    });
};
