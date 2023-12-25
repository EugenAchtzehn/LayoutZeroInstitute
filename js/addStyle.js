$(function () {
  // console.log('jquery loaded...');
  $('#toggleMobileMenu').on('click', function () {
    $('#navMenuWrap').toggle(500);
    $('.toggle_menu_button').toggleClass('active');
  });
});

$(window).on('resize', function () {
  const windowWidth = $(this).width();
  if (windowWidth > 768) {
    $('#navMenuWrap').show();
  } else {
    $('#navMenuWrap').hide();
  }
});
