let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();

      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });

    // $(".lang-word").click(function (e) {
    //   e.preventDefault();
    //   var item = $(this).siblings(".dropdown-content");
    //   item.slideToggle(400);
    // });

     ///// search in mobile /////////
     $(".fixed-search").click(function (e) {
      e.preventDefault();
      $(".overlay-box").fadeToggle(300);
      $(".search-section").toggleClass("search-open");
      $(".fixed-search .open-search").toggleClass("close-search");
      $("body").toggleClass("overflow");
    
    });
  
  
  
  
  
 
   //slide down menu
   $(".menu-name").click(function (e) {
    e.preventDefault();
    $(this).siblings(".cats-display-2").slideToggle(400);
    $(".menu-name").not(this).siblings(".cats-display-2").slideUp(400);
    if ($(window).width() <= 991) {
      $(this).toggleClass("active");
      $(".menu-name").not(this).removeClass("active");
    }
  });
  $(".slide-menu-2").click(function (e) {
    e.preventDefault();
    $(this).siblings(".cats-dispaly-3").slideToggle(400);
    $(".slide-menu-2").not(this).siblings(".cats-dispaly-3").slideUp(400);
    if ($(window).width() <= 991) {
      $(this).toggleClass("active");
      $(".slide-menu-2").not(this).removeClass("active");
    }
  });
}


 

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 112) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  
 
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
///////// **licened-section** /////////
var screen = new Swiper(".licened-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".licened-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".licened-slider .swiper-btn-next",
    prevEl: ".licened-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
 

let input = document.querySelector('.attr-sys');
function clickKsa() {
 
  input.disabled = true;
  document.getElementById('other-n-input').checked = false;

}

function clickOtherN() {
  input.disabled = false;
  document.getElementById('ksa').checked = false;
  document.getElementById('other-n').focus();
}

function clickSecondery() {
 
  document.getElementById('other-e').disabled = true;
 document.getElementById('other-e-input').checked = false;
 document.getElementById('univ').checked = false;
 document.getElementById('dep').checked = false;

}

function clickDeb() {
 
  document.getElementById('other-e').disabled = true;
 document.getElementById('other-e-input').checked = false;
 document.getElementById('univ').checked = false;
 document.getElementById('secondery').checked = false;

}

function clickUniv() {
 
  document.getElementById('other-e').disabled = true;
 document.getElementById('other-e-input').checked = false;
 document.getElementById('secondery').checked = false;
 document.getElementById('dep').checked = false;

}
function clickOtherE() {
  document.getElementById('other-e').disabled = false;
  document.getElementById('secondery').checked = false;
  document.getElementById('dep').checked = false;
  document.getElementById('univ').checked = false;
  document.getElementById('other-e').focus();
}

function clickNoProblem() {
 
  document.getElementById('have-p').disabled = true;
 document.getElementById('have-problem').checked = false;

}

function clickHaveProblem() {
  document.getElementById('have-p').disabled = false;
 document.getElementById('no-problem').checked = false;
 document.getElementById('have-p').focus();
}

function clickNoProblem2() {
 
 document.getElementById('have-p2').disabled = true;
document.getElementById('have-problem2').checked = false;

}

function clickHaveProblem2() {
 document.getElementById('have-p2').disabled = false;
document.getElementById('no-problem2').checked = false;
document.getElementById('have-p2').focus();
}

function clickNoLicene() {
 
 document.getElementById('have-l').disabled = true;
document.getElementById('have-licene').checked = false;

}

function clickHaveLicene() {
 document.getElementById('have-l').disabled = false;
document.getElementById('no-licene').checked = false;
document.getElementById('have-l').focus();
}

function clickNoSupport() {
 
 document.getElementById('have-s').disabled = true;
document.getElementById('have-support').checked = false;

}

function clickHaveSupport() {
 document.getElementById('have-s').disabled = false;
document.getElementById('no-support').checked = false;
document.getElementById('have-s').focus();
}

function clickAllPlaces() {
 
  document.getElementById('not-all-p').disabled = true;
 document.getElementById('not-all').checked = false;

}

function clickNotAllPlaces() {
  document.getElementById('not-all-p').disabled = false;
 document.getElementById('all-places').checked = false;
 document.getElementById('not-all-p').focus();
}

function clickNoRelatives() {
 
 document.getElementById('have-r').disabled = true;
document.getElementById('have-relatives').checked = false;

}

function clickHaveRelatives() {
 document.getElementById('have-r').disabled = false;
document.getElementById('no-relatives').checked = false;
document.getElementById('have-r').focus();
}

function clickTwitter() {
 
 document.getElementById('other-k').disabled = true;
document.getElementById('other-k-input').checked = false;
document.getElementById('insta').checked = false;
document.getElementById('snap').checked = false;
document.getElementById('friend').checked = false;

}

function clickInsta() {
 
 document.getElementById('other-k').disabled = true;
document.getElementById('other-k-input').checked = false;
document.getElementById('twitter').checked = false;
document.getElementById('snap').checked = false;
document.getElementById('friend').checked = false;

}

function clickSnap() {
 
 document.getElementById('other-k').disabled = true;
document.getElementById('other-k-input').checked = false;
document.getElementById('twitter').checked = false;
document.getElementById('insta').checked = false;
document.getElementById('friend').checked = false;

}
function clickFriend() {
 
 document.getElementById('other-k').disabled = true;
document.getElementById('other-k-input').checked = false;
document.getElementById('twitter').checked = false;
document.getElementById('snap').checked = false;
document.getElementById('insta').checked = false;

}
function clickOtherK() {
 document.getElementById('other-k').disabled = false;
 document.getElementById('twitter').checked = false;
 document.getElementById('insta').checked = false;
 document.getElementById('snap').checked = false;
 document.getElementById('friend').checked = false;
 document.getElementById('other-k').focus();
}

// $(function(){
// 	window.myFlux = new flux.slider('#slider', {
// 		autoplay: false,
// 		pagination: true
// 	});
// });

$(document).ready(function() {
 	$("#css3dimagePager li").click(function(){
    // $('#css3dimageslider').blindify();
		var rotateY = ($(this).index() * -90); 
		$("#css3dimageslider ul ").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
		$("#css3dimagePager li").removeClass("active");
		$(this).addClass("active");
    
	});
 	$("#css3dtransparency").click(function() {
		$("#css3dimageslider").toggleClass("transparency");
		$(this).toggleClass("active");
	});
 });