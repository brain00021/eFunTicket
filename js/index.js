$(function() {
  function tabSetting(e) {
    e.stopPropagation();
    let showContent = this.getAttribute('data-selection');
    debugger;
    $(this).addClass('active').siblings('li').removeClass('active');
    let offset = $("#"+showContent).offset();
    console.log(offset);
  }
  $(document).on('click', '.nav-links a', tabSetting);
});