!function(i){XTSThemeModule.$document.on("xtsElementorSectionReady xtsElementorColumnReady xtsElementorGlobalReady",function(){XTSThemeModule.animations()}),XTSThemeModule.animations=function(){void 0!==i.fn.xtsWaypoint&&i('[class*="xts-animation"]').each(function(){var t=i(this);"inited"===t.data("xts-waypoint")||0<t.parents(".xts-autoplay-animations-off").length||(t.data("xts-waypoint","inited"),t.xtsWaypoint(function(){for(var t=i(i(this)[0].element),n=t.attr("class").split(" "),a=0,e=0;e<n.length;e++)0<=n[e].indexOf("xts_delay_")&&(a=n[e].split("_")[2]);t.addClass("xts-animation-ready"),setTimeout(function(){t.addClass("xts-animated")},a)},{offset:"90%"}))})},i(document).ready(function(){XTSThemeModule.animations()})}(jQuery);