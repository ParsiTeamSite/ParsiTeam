!function(r){XTSThemeModule.miniCartQuantity=function(){var s;XTSThemeModule.$document.on("change input",".woocommerce-mini-cart .quantity .qty",function(){var t=r(this),e=t.val(),a=t.parents(".woocommerce-mini-cart-item").data("key"),n=xts_settings.cart_hash_key,i=xts_settings.fragment_name;clearTimeout(s),s=setTimeout(function(){t.parents(".mini_cart_item").addClass("xts-loading"),r.ajax({url:xts_settings.ajaxurl,data:{action:"xts_update_mini_cart_item",item_id:a,qty:e},dataType:"json",method:"GET",success:function(t){t&&t.fragments&&(r.each(t.fragments,function(t,e){r(t).replaceWith(e)}),XTSThemeModule.supports_html5_storage&&(sessionStorage.setItem(i,JSON.stringify(t.fragments)),localStorage.setItem(n,t.cart_hash),sessionStorage.setItem(n,t.cart_hash),t.cart_hash&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())),r(document).trigger("xtsUpdateMiniCartItem"))}})},500)})},r(document).ready(function(){XTSThemeModule.miniCartQuantity()})}(jQuery);