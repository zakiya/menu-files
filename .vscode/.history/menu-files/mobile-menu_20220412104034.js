(function($, Drupal) {

  'use strict';

  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {

      // Hamburger menu
      $('.mobile-menu-trigger', context).on('click', function() {
        $(this).toggleClass('opened');
        $('.block-epihc-main-menu').toggleClass('opened');
      });

      // Mobile sub-menu
      $('.sub-menu-toggle', context).on('click', function() {
        $(this).toggleClass('opened');
        $(this).next().toggleClass('opened');
      });

    }
  };

})(jQuery, Drupal);
