(function($, Drupal) {
  Drupal.behaviors.dropdown = {
    attach: function (context, settings) {
      $(context).find('.ui.search').dropdown()
    }
  }
})(jQuery, Drupal);
