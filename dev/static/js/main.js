var firstStep = document.querySelector('.js-start');
var firstPage = document.querySelector('.header');
var secondPage = document.querySelector('.content');
var secondStep = document.querySelector('.js-activate');
var submitBtn = document.querySelector('.js-submit');
var thirdPage = document.querySelector('.event');
var lastPage = document.querySelector('.footer');

firstStep.addEventListener('click', function() {
    firstPage.classList.add('passed');
});

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
