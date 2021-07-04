$(document).ready(function() {
  $('.carousel-pulse').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/4carousel/icons/prevArrow.svg" alt="prevArrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/4carousel/icons/nextArrow.svg" alt="nextArrow"></button>',
    });

    $('div.catalog-captions').on('click', 'div.catalog__tab:not(.catalog__tab-active)', function() {
      $(this)
        .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
        .closest('div.catalog-tabs').find('div.catalog-items').removeClass('catalog__tab-active').eq($(this).index()).addClass('catalog__tab-active');
    });

    $("[data-modal=consultation]").on('click', function() {
      $('.overlay, #modal-consultation').fadeIn('slow');
    });

    $(".modal__cross").on('click', function() {
      $('.overlay, .modal').fadeOut('slow');
    });
})