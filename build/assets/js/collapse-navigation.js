$(function(){
  $(document).on('click', '.sidebar-nav ul a', function() {
    resetActiveNav();
    setActiveNav($(this))
  });

  $(window).on('hashchange load', function() {
    // On load we check if there's only one item in the top level navigation,
    // If there is we automatically set it to active
    setTimeout(activateNavElements, 200);
  }).on('scroll', function() {
    resetActiveNav();
    setActiveNav($('li.active'))
  });
});

function resetActiveNav() {
  $('ul.children').removeClass('active');
}

function setActiveNav($el) {
  $el.parents('ul.children').addClass('active');
}

function activateNavElements() {
  var $visibleNavElements = $('.sidebar-nav ul > li:visible');
  if ($visibleNavElements.length === 2) {
    $visibleNavElements.first().addClass('active');
  }
}