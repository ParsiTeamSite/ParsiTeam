!function(n){XTSThemeModule.scrollTopButton=function(){var o=n(".xts-scroll-to-top");o.length<=0||(XTSThemeModule.$window.on("scroll",function(){100<n(this).scrollTop()?o.addClass("xts-shown"):o.removeClass("xts-shown")}),o.on("click",function(){return n("html, body").animate({scrollTop:0},800),!1}))},n(document).ready(function(){XTSThemeModule.scrollTopButton()})}(jQuery);