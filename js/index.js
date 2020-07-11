$(function() {
  function tabSetting(e) {
    e.stopPropagation();
    e.preventDefault();
    let showContent = this.getAttribute('data-selection');
    $(this).addClass('active').siblings('li').removeClass('active');
    let offset = $("#"+showContent).offset();
    $("html, body").animate({ scrollTop: offset.top-50 }, 1000);
  }
  $(document).on('click', '.nav-links a', tabSetting);
});