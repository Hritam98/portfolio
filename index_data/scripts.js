!function(e){"use strict";window.onpageshow=function(e){e.persisted&&window.location.reload()},e(window).on("load",function(){var a=e(".preloader");setTimeout(function(){a.find(".spinner").velocity({opacity:"0",translateY:"-40px"},{duration:400,complete:function(){a.find(".box-1").velocity({translateY:"-100%"},{duration:1e3,easing:[.7,0,.3,1]}),a.find(".box-2").velocity({translateY:"-100%"},{duration:400,easing:[.7,0,.3,1]})}})},1e3),e(".typed-subtitle").length&&e(".h-subtitle p").length>1&&e(".typed-subtitle").each(function(){e(this).typed({stringsElement:e(this).prev(".typing-subtitle"),loop:!0})});var n=location.hash,t=e(n);0==n.indexOf("#section-")&&t.length&&e("body, html").animate({scrollTop:e(n).offset().top-68},400)});var a=e(window).width(),n=e(window).height();if(a<783&&e(".section.started").css({height:n}),e(".started-carousel").length){var t=new Swiper(".started-carousel .swiper-container",{init:!1,loop:!1,spaceBetween:0,effect:"fade",slidesPerView:1,simulateTouch:!1,autoplay:{delay:6e3,disableOnInteraction:!1,waitForTransition:!1}});t.on("slideChange",function(){var a=t.realIndex,n=t.slides.length;e(".started-carousel .swiper-slide").removeClass("first"),e(".started-carousel .swiper-slide").each(function(n,t){a-1>=n?e(t).addClass("swiper-clip-active"):e(t).removeClass("swiper-clip-active")}),e(".started-carousel .swiper-slide").each(function(a,t){e(t).css({"z-index":n-a})})}),t.init()}e(".content-carousel").length&&e(".owl-carousel").each(function(){var a=e(this),n=a.data("slidesview"),t=a.data("slidesview_mobile");a.owlCarousel({margin:40,items:n,autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!0,loop:!1,rewind:!0,nav:!1,dots:!1,responsive:{0:{margin:40,items:t},720:{margin:40,items:n},1200:{margin:40,items:n}}}),a.closest(".content-carousel").find(".next").click(function(){e(this).closest(".content-carousel").find(".owl-carousel").trigger("next.owl.carousel",[800])}),a.closest(".content-carousel").find(".prev").click(function(){e(this).closest(".content-carousel").find(".owl-carousel").trigger("prev.owl.carousel",[800])})});e(".animated-button span").each(function(a){var n=e(this).text().split(""),t=e(this);t.empty(),e.each(n,function(e,a){t.append("<em>"+a+"</em>")})}),e("header .top-menu").on("click","a",function(){var a=e(this).attr("href");if(0==a.indexOf("#section-"))e("body").hasClass("home")||(location.href="/"+a),e("body, html").animate({scrollTop:e(a).offset().top-115},400),e("header").hasClass("active")&&e(".menu-btn").trigger("click");else{var n=e(".preloader");n.find(".box-1").velocity({translateY:"0%"},{duration:400,easing:[.7,0,.3,1]}),n.find(".box-2").velocity({translateY:"0%"},{duration:1e3,easing:[.7,0,.3,1],complete:function(){location.href=a}})}return!1}),e(".section").length&&e(".top-menu li a").length&&e(window).on("scroll",function(){var a=e(window).scrollTop();e(".top-menu ul li a").each(function(){if(0==e(this).attr("href").indexOf("#section-")){var n=e(this),t=e(n.attr("href"));t.length&&t.offset().top<=a+120&&(e(".top-menu ul li").removeClass("current-menu-item"),n.closest("li").addClass("current-menu-item"))}})}),e(window).on("scroll",function(){e(this).scrollTop()>=100&&e(".section").length>1&&(e(".header").addClass("fixed"),e(".mouse-btn").fadeOut()),e(this).scrollTop()<=100&&e(".section").length>1&&(e(".header").removeClass("fixed"),e(".mouse-btn").fadeIn())}),e("header").on("click",".menu-btn",function(){return e("header").hasClass("active")?(e("header").removeClass("active"),e(".footer .soc").fadeIn(),e("body").addClass("loaded"),e(".video-bg").length&&e("body").addClass("background-enabled")):(e("header").addClass("active"),e(".footer .soc").hide(),e("body").removeClass("loaded"),e("body").removeClass("background-enabled")),!1}),e(".section").on("click",".mouse-btn",function(){e("body, html").animate({scrollTop:n-150},800)}),e(".section").length>1&&e(".mouse-btn").show();var s=e(".section.works .box-items");s.imagesLoaded(function(){s.isotope({itemSelector:".box-col"})}),e(".filters").on("click",".btn-group",function(){var a=e(this).find("input").val();s.isotope({filter:a}),e(".filters .btn-group label").removeClass("glitch-effect"),e(this).find("label").addClass("glitch-effect")}),/\.(?:jpg|jpeg|gif|png)$/i.test(e(".gallery-item:first a").attr("href"))&&e(".gallery-item a").magnificPopup({gallery:{enabled:!0},type:"image",closeBtnInside:!1,mainClass:"mfp-fade"}),e(".has-popup-media").magnificPopup({type:"inline",overflowY:"auto",closeBtnInside:!0,mainClass:"mfp-fade"}),e(".has-popup-image").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",image:{verticalFit:!0}}),e(".has-popup-video").magnificPopup({disableOn:700,type:"iframe",iframe:{patterns:{youtube_short:{index:"youtu.be/",id:"youtu.be/",src:"https://www.youtube.com/embed/%id%?autoplay=1"}}},removalDelay:160,preloader:!1,fixedContentPos:!1,mainClass:"mfp-fade",callbacks:{markupParse:function(e,a,n){e.find("iframe").attr("allow","autoplay")}}}),e(".has-popup-music").magnificPopup({disableOn:700,type:"iframe",removalDelay:160,preloader:!1,fixedContentPos:!1,mainClass:"mfp-fade"}),e(".has-popup-gallery").on("click",function(){var a=e(this).attr("href");return e(a).magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,mainClass:"mfp-fade",removalDelay:160,fixedContentPos:!1,gallery:{enabled:!0}}).magnificPopup("open"),!1}),e(".jarallax-video").length&&e(".jarallax-video").each(function(){e(this).jarallax()}),setTimeout(function(){var a=e(".skills.dotted .progress"),n=a.width();a.length&&(a.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'),a.find(".percentage").append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'),a.find(".percentage .da").css({width:n}))},1e3);var i=e(".skills.circles .progress");i.length&&i.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>'),e(window).resize(function(){var a=e(window).width(),n=e(window).height();a<783&&e(".section.started").css({height:n});var t=e(".skills-list.dotted .progress"),s=t.width();t.length&&t.find(".percentage .da").css({width:s+1})}),e("#cform").validate({rules:{name:{required:!0},message:{required:!0},email:{required:!0,email:!0}},success:"valid",submitHandler:function(){e.ajax({url:"mailer/feedback.php",type:"post",dataType:"json",data:"name="+e("#cform").find('input[name="name"]').val()+"&email="+e("#cform").find('input[name="email"]').val()+"&message="+e("#cform").find('textarea[name="message"]').val(),beforeSend:function(){},complete:function(){},success:function(a){e("#cform").fadeOut(),e(".alert-success").delay(1e3).fadeIn()}})}})}(jQuery);