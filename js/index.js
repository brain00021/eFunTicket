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
  let title1Pos = title1.offset().top;
  let title2Pos = title2.offset().top;
  let title3Pos = title3.offset().top;
  let footerPos = footer.offset().top;
  // const coupon1 = $("#coupon1").offset().top;
  // const coupon2 = $("#coupon1").offset().top;
  var windowWidth = $(window).innerWidth();
  var windowHeight = $(window).innerHeight();
// 內建瀏覽器設定
var u = navigator.userAgent,
ua = navigator.userAgent.toLowerCase(),
isLineApp = u.indexOf("Line") > -1, // Line 內建瀏覽器
isFbApp = u.indexOf("FBAV") > -1, // FB App 內建瀏覽器
isWeixinApp = ua.match(/MicroMessenger/i) == "micromessenger"; // 微信內建瀏覽器

  $(window).resize(function(){
    // $(window).scrollTop(0,function(){
    //   title1Pos = title1.offset().top;
    //   title2Pos = title2.offset().top;
    //   title3Pos = title3.offset().top;
    //   footerPos = footer.offset().top;
    //   return title1Pos,title2Pos,title3Pos,footerPos;
    // })
    if(isLineApp && isFbApp && isWeixinApp){
      if(windowWidth < $(window).innerWidth()-100 || windowHeight < $(window).innerHeight() -100 || (windowWidth > $(window).innerWidth()+100 || windowHeight > $(window).innerHeight() +100  ) {
        location.reload();
        return;
      }
      return;
    }
    if(windowWidth != $(window).innerWidth() || windowHeight != $(window).innerHeight()) {
      location.reload();
      return;
    }

    // location.reload();
    // return title1Pos,title2Pos,title3Pos,footerPos;
   
  })
  $(document).on('click','.role',function(){
    $(this).addClass('animate__animated animate__bounce')
    let vm = this;
    let time;
    time = setTimeout(function(){
      $(vm).removeClass('animate__animated animate__bounce')
    },1000)
    time();
    clearTimeout(time)
  })
  $(window).on('scroll', function(){
    let window = $(this).scrollTop() + windowHeight;

    checkTitleClass(window,title1,title1Pos,title2Pos);
    checkTitleClass(window,title2,title2Pos,title3Pos);
    checkTitleClass(window,title3,title3Pos,footerPos);
    if(window >= title1Pos){
      $("#selectionDetail-description-bg").removeClass("animate__animated animate__flipOutX")
      $("#selectionDetail-description-bg").addClass("animate__animated animate__flipInX")
    }else{
      $("#selectionDetail-description-bg").removeClass("animate__animated animate__flipInX")
      $("#selectionDetail-description-bg").addClass("animate__animated animate__flipOutX")
    }
    // console.log( coupon1,coupon2)
    if(window >= title3Pos - 50){
      $('#coupon1').removeClass("animate__animated animate__fadeOutLeft")
      $('#coupon2').removeClass("animate__animated animate__fadeOutRight")
      $('#coupon1').addClass("animate__animated animate__fadeInLeft")
      $('#coupon2').addClass("animate__animated animate__fadeInRight")

    }else{
      $('#coupon1').removeClass("animate__animated animate__fadeInLeft")
      $('#coupon2').removeClass("animate__animated animate__fadeInRight")
      $('#coupon1').addClass("animate__animated animate__fadeOutLeft")
      $('#coupon2').addClass("animate__animated animate__fadeOutRight")
    }
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
  setInterval(function(){
    $('.squirrel').toggleClass('animate__animated animate__bounce animate__repeat-2')
  },2000)


});