$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="./images/arrows/arrow-left.svg" alt="left-arrow">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="./images/arrows/arrow-right.svg" alt="right-arrow">'
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('active');
    } );
});