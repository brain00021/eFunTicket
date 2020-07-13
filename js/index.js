$(function() {
  function tabSetting(e) {
    e.stopPropagation();
    e.preventDefault();
    let showContent = this.getAttribute('data-selection');
    // $("#"+showContent).find("#"+showContent+"-title").removeClass("animate__animated animate__bounceInDown");
    $("#"+showContent).find("#"+showContent+"-title").addClass("animate__animated animate__bounceInDown");
    let offset = $("#"+showContent).offset();
    $("html, body").animate({ scrollTop: offset.top-50 }, 1000);
  }
  $(document).on('click', '.nav-links a,#scrollDownBtn', tabSetting);
  //reset 
  $('body').css('overflow', 'auto');
  $(".dialog-bg").fadeOut();
  //dialog 設定
  $(document).on('click', '.dailog-btn,.dialog-bg',function(){
    $('body').css('overflow', 'auto');
    $('.dialog-bg').fadeOut();
  })
  $(document).on('click', '#btn-detail',function(){
    $("body").css('overflow', 'hidden');
    $(".dialog-bg").fadeIn();
  })
  const title1 = $("#selectionDetail-title");
  const title3 = $("#selectionCoupon-title");
  const title2 = $("#selectionPlatform-title");
  const footer = $('footer');
  const title1Pos = title1.offset().top;
  const title2Pos = title2.offset().top;
  const title3Pos = title3.offset().top;
  const footerPos = footer.offset().top;
  
  $(window).on('scroll', function(){
    let window = $(this).scrollTop();

    checkTitleClass(window,title1,title1Pos,title2Pos);
    checkTitleClass(window,title2,title2Pos,title3Pos);
    checkTitleClass(window,title3,title3Pos,footerPos);
    // console.log(window);
  })
  function checkTitleClass(window,title,titlePos,endTitlePos){
    console.log(window,titlePos);
    if(window > (titlePos -200) && window < (endTitlePos)){
      // debugger;
      title.removeClass("animate__bounceOutUp")
      title.addClass("animate__animated animate__bounceInDown")
    }else{
      title.removeClass("animate__bounceInDown")
      title.addClass("animate__animated animate__bounceOutUp")
      
    }
  }
  // dialog btn scroll
  var btn = $("#dialog-btn").offset().top;
  $(".dialog-bg").scroll(function(){
    console.log($(this).scrollTop());
    let window = $(this).scrollTop();
    
    console.log(btn);
    if(window > btn){
      $("#dialog-btn").css('top',window + 'px');
    }
  });

});