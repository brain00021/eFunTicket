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
  //reset 
  $('body').css('overflow', 'auto');
  $('.dialog-bg').fadeOut();
  //dialog 設定
  $(document).on('click', '.dailog-btn,.dialog-bg',function(){
    $('body').css('overflow', 'auto');
    $('.dialog-bg').fadeOut();
  })
  $(document).on('click', '#btn-detail',function(){
    $('body').css('overflow', 'hidden');
    $('.dialog-bg').fadeIn();
  })

});