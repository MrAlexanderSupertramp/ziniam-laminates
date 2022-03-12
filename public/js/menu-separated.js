(function($){
    "use strict"; // Start of use strict
    
    
    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */
    
    $(window).on("load", function(){
        
        // Page loader        
        $(".page-loader div").fadeOut();
        $(".page-loader").delay(200).fadeOut("slow");
        
        init_scroll_navigate();
        
        $(window).trigger("scroll");
        $(window).trigger("resize");        
        
        // Hash menu forwarding
        if ((window.location.hash) && ($(window.location.hash).length)) {
            var hash_offset = $(window.location.hash).offset().top;
            $("html, body").animate({
                scrollTop: hash_offset
            });
        }
  
    });    
    
    $(document).ready(function(){
        $(window).trigger("resize");        
        init_classic_menu();
    });    
    
    $(window).resize(function(){
        init_classic_menu_resize();        
        // 100vh height on mobile devices
        var vh = $(window).height() * 0.01;
        $("html").css("--vh", vh + "px");
    });
    
    
    // /* --------------------------------------------
    //  Platform detect
    //  --------------------------------------------- */
    
    // var mobileTest;
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //     mobileTest = true;
    //     $("html").addClass("mobile");
    // }
    // else {
    //     mobileTest = false;
    //     $("html").addClass("no-mobile");
    // }    
    // var mozillaTest;
    // if (/mozilla/.test(navigator.userAgent)) {
    //     mozillaTest = true;
    // }
    // else {
    //     mozillaTest = false;
    // }
    // var safariTest;
    // if (/safari/.test(navigator.userAgent)) {
    //     safariTest = true;
    // }
    // else {
    //     safariTest = false;
    // }
    
    // // Detect touch devices    
    // if (!("ontouchstart" in document.documentElement)) {
    //     document.documentElement.className += " no-touch";
    // } else {
    //     document.documentElement.className += " touch";
    // }
    
    
    // /* ---------------------------------------------
    //  Sections helpers
    //  --------------------------------------------- */
    
    // // Sections backgrounds    
    // var pageSection = $(".home-section, .page-section, .small-section, .split-section");
    // pageSection.each(function(indx){        
    //     if ($(this).attr("data-background")){
    //         $(this).css("background-image", "url(" + $(this).data("background") + ")");
    //     }
    // });
    // /*
    // pageSection.appear(function(){
    //     if ($(this).attr("data-background")){
    //         $(this).css("background-image", "url(" + $(this).data("background") + ")");
    //     }
    // });*/
    
    // // Function for block height 100%
    function height_line(height_object, height_donor){
        height_object.height(height_donor.height());
        height_object.css({
            "line-height": height_donor.height() + "px"
        });
    }
    function height_line_s(height_object, height_donor){
        height_object.height(height_donor.height());
        height_object.css({
            "line-height": height_donor.height() - 2 + "px"
        });
    }   
    
    // // Progress bars
    // var progressBar = $(".progress-bar");
    // progressBar.each(function(indx){
    //     $(this).css("width", $(this).attr("aria-valuenow") + "%");
    // });
    
    
    /* ---------------------------------------------
     Nav panel classic
     --------------------------------------------- */
    
    var mobile_nav = $(".mobile-nav");
    var desktop_nav = $(".desktop-nav");
    
    mobile_nav.attr("aria-expanded", "false");

    // function testing_console() {
    //     console.log("==============================")
    // }
    
    function init_classic_menu_resize(){
        
        // Mobile menu max height
        $(".mobile-on .desktop-nav > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px");
        
        // Mobile menu style toggle
        if ($(window).width() <= 1024) {
            $(".main-nav").addClass("mobile-on");
            $(".mobile-cart").show();
        }
        else 
            if ($(window).width() > 1024) {
                $(".main-nav").removeClass("mobile-on");
                desktop_nav.show();
                $(".mobile-cart").hide();
            }
    }
    
    function init_classic_menu(){    
        
        if ($(".main-nav").hasClass("transparent")){
            height_line($(".inner-nav > ul > li > a"), $(".main-nav"));
        } else {
        	height_line_s($(".inner-nav > ul > li > a"), $(".main-nav"));
        }
        height_line(mobile_nav, $(".main-nav"));
        height_line($(".mobile-cart"), $(".main-nav"));
        
        // Transpaner menu
                
        if ($(".main-nav").hasClass("transparent")){
           $(".main-nav").addClass("js-transparent"); 
        } else if (!($(".main-nav").hasClass("dark"))){
           $(".main-nav").addClass("js-no-transparent-white");
        }
        
        $(window).scroll(function(){        
            
            if ($(window).scrollTop() > 0) {
                $(".js-transparent").removeClass("transparent");
                $(".main-nav, .nav-logo-wrap .logo, .mobile-nav, .mobile-cart").addClass("small-height");
                $(".light-after-scroll").removeClass("dark");
                $(".main-nav").addClass("body-scrolled");
            }
            else if ($(window).scrollTop() === 0){
                $(".js-transparent").addClass("transparent");
                $(".main-nav, .nav-logo-wrap .logo, .mobile-nav, .mobile-cart").removeClass("small-height");
                $(".light-after-scroll").addClass("dark");
                $(".main-nav").removeClass("body-scrolled");
            }
            
            
        });
        
        // Mobile menu toggle
        
        mobile_nav.click(function(){
                  
            if (desktop_nav.hasClass("js-opened")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                $(this).removeClass("active");
                $(this).attr("aria-expanded", "false");
            }
            else {
                desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
                $(this).addClass("active");
                $(this).attr("aria-expanded", "true");
                // Fix for responsive menu
                if ($(".main-nav").hasClass("not-top")){
                    $(window).scrollTo(".main-nav", "slow"); 
                }                
            }   
                     
        });
        
        $(document).on("click", function(event){            
            if ($(window).width() <= 1024) {
                var $trigger = $(".main-nav");
                if ($trigger !== event.target && !$trigger.has(event.target).length) {
                    desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                    mobile_nav.removeClass("active");
                    mobile_nav.attr("aria-expanded", "false");
                }
            }
        });
        
        mobile_nav.keydown(function(e){
            if (e.keyCode == 13 || e.keyCode == 32) {
                if (desktop_nav.hasClass("js-opened")) {
                    desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                    $(this).removeClass("active");
                    $(this).attr("aria-expanded", "false");
                }
                else {
                    desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
                    $(this).addClass("active");
                    $(this).attr("aria-expanded", "true");
                    // Fix for responsive menu
                    if ($(".main-nav").hasClass("not-top")) {
                        $(window).scrollTo(".main-nav", "slow");
                    }
                }
            }        
        });
        
        desktop_nav.find("a:not(.mn-has-sub)").click(function(){
            if (mobile_nav.hasClass("active")) {
                desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
                mobile_nav.removeClass("active");
            }
        });
        
        
        // Sub menu
        
        var mnHasSub = $(".mn-has-sub");
        var mnThisLi;
        
        mnHasSub.attr({
            "role": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
        });
        
        mnHasSub.click(function(){
        
            if ($(".main-nav").hasClass("mobile-on")) {
                mnThisLi = $(this).parent("li:first");
                if (mnThisLi.hasClass("js-opened")) {
                    $(this).attr("aria-expanded", "false");
                    mnThisLi.find(".mn-sub:first").slideUp(function(){
                        mnThisLi.removeClass("js-opened");
                    });
                }
                else {
                    $(this).attr("aria-expanded", "true");
                    mnThisLi.addClass("js-opened");
                    mnThisLi.find(".mn-sub:first").slideDown();
                }
                
                return false;
            }
            
        });
        
        mnThisLi = mnHasSub.parent("li");
        mnThisLi.hover(function(){
        
            if (!($(".main-nav").hasClass("mobile-on"))) {
                $(this).find(".mn-has-sub:first")
                    .attr("aria-expanded", "true")
                    .addClass("js-opened");
                $(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
            }
            
        }, function(){
        
            if (!($(".main-nav").hasClass("mobile-on"))) {
                $(this).find(".mn-has-sub:first")
                    .attr("aria-expanded", "false")
                    .removeClass("js-opened");
                $(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
            }
            
        });
        
        /* Keyboard navigation for main menu */
       
        mnHasSub.keydown(function(e){            
        
            if ($(".main-nav").hasClass("mobile-on")) {                
                if (e.keyCode == 13 || e.keyCode == 32) {                
                    mnThisLi = $(this).parent("li:first");
                    if (mnThisLi.hasClass("js-opened")) {
                        $(this).attr("aria-expanded", "false");
                        mnThisLi.find(".mn-sub:first").slideUp(function(){                            
                            mnThisLi.removeClass("js-opened");
                        });
                    }
                    else {
                        $(this).attr("aria-expanded", "true");
                        mnThisLi.addClass("js-opened");
                        mnThisLi.find(".mn-sub:first").slideDown();
                    }
                    
                    return false;
                }
            }
            
        });
        
        $(".inner-nav a").focus(function(){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                $(this).parent("li").parent().children().find(".mn-has-sub:first")
                    .attr("aria-expanded", "false")
                    .removeClass("js-opened");
                $(this).parent("li").parent().children().find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
            }
        });
     
        $(".inner-nav a").first().keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (e.shiftKey && e.keyCode == 9) {
                    $(this).parent("li").find(".mn-has-sub:first")
                        .attr("aria-expanded", "false")
                        .removeClass("js-opened");
                    $(this).parent("li").find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
                }
            }
        });
        
        $(".mn-sub li:last a").keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (!e.shiftKey && e.keyCode == 9) {
                    $(this).parent("li").parent().parent().find(".mn-has-sub:first")
                        .attr("aria-expanded", "false")
                        .removeClass("js-opened");
                    $(this).parent("li").parent().stop(true, true).delay(100).fadeOut("fast");
                }
            }
        }); 

        $(document).keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (e.keyCode == 27) {
                    if (mnHasSub.parent("li").find(".mn-sub:first li .mn-sub").is(":visible")){
                        mnHasSub.parent("li").find(".mn-sub:first li .mn-has-sub")
                            .attr("aria-expanded", "false")
                            .removeClass("js-opened");
                        mnHasSub.parent("li").find(".mn-sub:first li .mn-sub").stop(true, true).delay(100).fadeOut("fast");
                    } else{
                        mnHasSub.parent("li").find(".mn-has-sub:first")
                            .attr("aria-expanded", "false")
                            .removeClass("js-opened");
                        mnHasSub.parent("li").find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
                    }
                    
                }
            }
        });
         
        mnHasSub.keydown(function(e){
            if (!($(".main-nav").hasClass("mobile-on"))) {
                if (e.keyCode == 13 || e.keyCode == 32) {
                    if (!($(this).hasClass("js-opened"))){
                        $(this).addClass("js-opened");
                        $(this).attr("aria-expanded", "true");
                        $(this).parent("li").find(".mn-sub:first").stop(true, true).fadeIn("fast");
                        return false;
                    }
                    else{
                        $(this).removeClass("js-opened");
                        $(this).attr("aria-expanded", "false");
                        $(this).parent("li").find(".mn-sub:first").stop(true, true).fadeOut("fast");
                        return false;
                    }
                }
            }            
        });
        
    }
    
    
    /* ---------------------------------------------
     Scroll navigation
     --------------------------------------------- */
    
    function init_scroll_navigate(){
        
        $(".local-scroll").localScroll({
            target: "body",
            duration: 1500,
            offset: 0,
            easing: "easeInOutQuart",
            onAfter: function(anchor, settings){
                anchor.focus();
                if (anchor.is(":focus")) {
                    return !1;
                }
                else {
                    anchor.attr("tabindex", "-1");
                    anchor.focus()
                }        
            }
        });
        
        var sections = $(".home-section, .split-section, .page-section");
        var menu_links = $(".scroll-nav li a");
        
        $(window).scroll(function(){
        
            sections.filter(":in-viewport:first").each(function(){
                var active_section = $(this);
                var active_link = $('.scroll-nav li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
            });
            
        });
        
    }
    
    
    
})(jQuery); // End of use strict



