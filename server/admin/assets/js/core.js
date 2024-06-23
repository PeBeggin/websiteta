(function(window) {
    // Define Moderate class
    function Moderate() {

        var toggleSidebarSwitch = document.querySelector(".toggle-sidebar-switch");
        var creativeSidebarSwitch = document.querySelector(".creative-sidebar-switch");
        var lightSidebarSwitch = document.querySelector(".light-sidebar-switch");
        var fixHeaderSwitch = document.querySelector(".fix-header-switch");
        
        // Initilize metisMenu
        this.initMetisMenu = function(){
            if (typeof metisMenu != "undefined"){
                $("#side-menu").metisMenu();
            }
        };
        
        // Check old IE browsers and show appropriate notice
        this.checkOldIE = function(){
            if ($.browser.msie && $.browser.version < 9) {
                $("#page-content").prepend('<p class="alert alert-warning">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>');
            }
        };

        // Handle toggle-sidebar-top button
        this.toggleSidebarTop = function() {
            $("#toggle-sidebar-top").on("click", function(e) {
                e.preventDefault();
                var btn  = $(this),
                    icon = $(this).find("i");

                if (btn.hasClass("open")) {
                    btn.removeClass("open");
                    icon.removeClass("icon-user-following").addClass("text-danger icon-user-unfollow");

                    $(".sidebar-top").slideUp();
                } else {
                    btn.addClass("open");
                    icon.removeClass("text-danger icon-user-unfollow").addClass("icon-user-following");

                    $(".sidebar-top").slideDown();
                }
            });
        };

        // Handle toggle-sidebar button
        this.toggleSidebar = function() {
            $("#toggle-sidebar").on("click", function(e) {
                e.preventDefault();
                if ($("body").hasClass("sidebar-collapse")) {
                    window.Moderate.changeSidebarState("expand");
                } else {
                    window.Moderate.changeSidebarState("collapse");
                }
                
                // Resize to redraw charts and diagrams
                if($(window).width()>767 && $(window).width()<992){
                    $(window).resize();
                }
            });
            
            // Close sidebar menu if was out of it(just in small devices)
            $(document).mouseup(function(e) 
            {
                var container = $("#sidebar");
                var btnClose = $("#toggle-sidebar");
                var collapsed = $("body").hasClass("sidebar-collapse");
                var isSmallDevice = ($(document).width()<768);

                if(collapsed && isSmallDevice){
                    // if the target of the click is toggle-sidebar button
                    if(btnClose.is(e.target) || btnClose.has(e.target).length){
                        return;
                    }
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) 
                    {
                        window.Moderate.changeSidebarState("expand");
                    }
                }
            });
        };

        // Handle toggle-sidebar button
        this.toggleDarkMode = function() {
            $("#toggle-dark-mode").on("click", function(e) {
                e.preventDefault();
                if ($("body").hasClass("dark")) {
                    window.Moderate.darkMode(false);
                } else {
                    window.Moderate.darkMode(true);
                }
                return;
            });
            
            // Close sidebar menu if was out of it(just in small devices)
            $(document).mouseup(function(e) 
            {
                var container = $("#sidebar");
                var btnClose = $("#toggle-sidebar");
                var collapsed = $("body").hasClass("sidebar-collapse");
                var isSmallDevice = ($(document).width()<768);

                if(collapsed && isSmallDevice){
                    // if the target of the click is toggle-sidebar button
                    if(btnClose.is(e.target) || btnClose.has(e.target).length){
                        return;
                    }
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) 
                    {
                        window.Moderate.changeSidebarState("expand");
                    }
                }
            });
        };
        
        // Change sidebar state
        this.changeSidebarState = function(newState){
            
            if(newState==="collapse"){
                $("body").addClass("sidebar-collapse");
                $(".metismenu>li").removeClass("active mm-active");
                $(".metismenu > li > ul").removeClass("mm-show");
                
                
                if(!toggleSidebarSwitch.checked){
                    $(".toggle-sidebar-switch").trigger("click");
                }
            }else{
                $("body").removeClass("sidebar-collapse");
                
                if(toggleSidebarSwitch.checked){
                    $(".toggle-sidebar-switch").trigger("click");
                }
            }
            
            window.Moderate.updateSettingCodes();
        };
        
        // Change sidebar state
        this.darkMode = function(newState){
            
            if(newState==true){
                $("body").addClass("dark");
            }else{
                $("body").removeClass("dark");
            }
            
            window.Moderate.updateSettingCodes();
        };


        // Handle btn-status
        this.handleStatusButton = function() {
            $(".dropdown-status>li>a").on("click", function() {
                $(".btn-status").html($(this).html());
            });
        };
        

        // Define tooltip
        this.tooltip = function() {
            $("[rel='tooltip'], .has-tooltip").tooltip();
            $(".btn-code").tooltip({title: $(this).data("title")});
        };

        // Handle code button
        this.handleCodeButton = function() {
            $(".btn-code").on("click", function(e) {
                e.preventDefault();
                    
                var result = escapeHtml($(this).parent().find(".code-modal").html());
                result = "<pre class='codes'><code id='code-for-copy'>" + result + "</code></pre>";

                $("#code-modal .modal-body").html(result);
                $("#code-modal").modal("show");
            });
        };

        // Handle code copy button
        this.handleCopyCodeButton = function() {
            $("#btn-copy").on("click", function() {
                var text = document.getElementById("code-for-copy");
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(text);
                selection.removeAllRanges();
                selection.addRange(range);

                document.execCommand('copy');
            });
        };

        // Define popover
        this.popover = function() {
            // Define general popover
            $("[data-toggle='popover'] .has-popover").popover({
                container: "body",
                html: true,
                trigger: "click",
                content: function() {
                    return $(this).find(".popover-content").html();
                }
            }).on("shown.bs.popover", function() {
                // Define elements
                var currentTrigger = $(this);
                var currentPopover = currentTrigger.data("bs.popover").tip();

                // Activate close button
                currentPopover.find(".close").click(function() {
                    currentTrigger.popover("hide");
                });
            });
        };
        

        // Define dropdownHover
        this.dropdownHover = function() {
            if ($(".dropdown-hover").length) {
                $(".dropdown-hover").dropdownHover();
            }
        };


        // Define toggleFullScreen
        this.toggleFullScreen = function() {
            if (typeof screenfull !== "undefined"){
                if (screenfull.isEnabled) {
                    $("#toggle-fullscreen").click(function(){      
                        $(this).find("i").toggleClass("icon-size-fullscreen icon-size-actual");
                        screenfull.toggle();
                    });
                }else{
                    $("#toggle-fullscreen").addClass("hide");
                }
            }
        };


        // Define boxFullScreen
        this.boxFullScreen = function() {
            if (typeof screenfull !== "undefined"){
                screenfull.on("change", (e) => {
                    var toggledBox = $(e.target);
                    toggledBox.toggleClass("full");
                    $(toggledBox).find(".buttons-box .btn-fullscreen i").toggleClass("icon-size-fullscreen icon-size-actual");
                });
                $(".btn-fullscreen").on("click", function(e) {
                    e.preventDefault();
                    var toggledPanel = $(this).parents(".box")[0];
                    screenfull.toggle(toggledPanel);
                });
           
            }
        };


        // Define boxCollapse
        this.boxCollapse = function(e) {
            var collapseButton = $(".btn-collapse");

            collapseButton.on("click", function(e) {
                e.preventDefault();
                bodyClasses = ".panel-body, .portlet-body";
                $(this).closest(".box").find(bodyClasses).slideToggle();
                $(this).find("i").toggleClass("icon-arrow-up icon-arrow-down");
            });
        };


        // Define boxHide
        this.boxHide = function() {
            $(".btn-close").on("click", function(e) {
                e.preventDefault();
                $(this).closest(".box").animate(
                        {"opacity":"0"},
                        500 ,
                        function(){$(this).closest(".box").hide("fast");});
            });
        };
        

        // Define buttonsBoxCollapse
        this.buttonsBoxCollapse = function() {
            var collapseButton = $(".buttons-box .btn-toggle");

            collapseButton.on("click", function(e) {
                e.preventDefault();
                
                $(this).parent().toggleClass("show");
            });
        };
        

        // Handle settings box
        this.handleSettings = function() {
            // Toggle box button 
            $("#toggle-setting").on("click", function(e) {
                e.preventDefault();
                
                $(this).parent().toggleClass("active");
            });
            
            // Change Theme Color
            $(".theme-colors .btn").on("click", function(e) {
                e.preventDefault();
                
                var colorName = $(this).attr("data-color");

                // Remove current theme color class
                $("body").removeClass (function (index, css) {
                    return (css.match (/(^|\s)theme-\S+/g) || []).join(" ");
                });
                // Add new theme color class
                $("body").addClass("theme-"+colorName);
                $(".theme-colors .btn").removeClass("active");
                $(this).addClass("active");

                window.Moderate.updateSettingCodes();
            });
            
            // Update code guide box
            this.updateSettingCodes = function(){
                var currentColor = $(".theme-colors .btn.active").attr("data-color");
                var themeColor = "theme-" + currentColor;
                var headerStatus = sidebarStatus = creativeSidebarStatus = lightSidebarStatus = darkModeStatus = "";

                if (typeof Switchery != "undefined"){
                    if(fixHeaderSwitch.checked){
                        headerStatus = " fix-header";
                    }

                    if(toggleSidebarSwitch.checked){
                        sidebarStatus = " sidebar-collapse";
                    }
                    
                    if(!creativeSidebarSwitch.checked){
                        creativeSidebarStatus = " sidebar-extra";
                    }
                    
                    if(lightSidebarSwitch.checked){
                        lightSidebarStatus = " light-sidebar";
                    }
                    if($("body").hasClass("dark")){
                        darkModeStatus = " dark";
                    }
                }
                
                var result = escapeHtml('<body class="' + themeColor + headerStatus + sidebarStatus + creativeSidebarStatus + lightSidebarStatus + darkModeStatus + '">');
                $(".theme-code code").html(result);
                
                
            }
            window.Moderate.updateSettingCodes();
        };
        
        
        // Handle ripple effect
        this.handleRipple = function() {
            $(".active-ripple #main-navbar .btn:not(.no-ripple), .active-ripple #main-navbar .dropdown-user a, .active-ripple #page-content .btn:not(.no-ripple), #toggle-setting, .modal .btn, .active-ripple .metismenu a, .modal-page .btn, .active-ripple .ripple-effect").ripple();
        };
        
        
        // Handle  switcheries
        this.handleSwitchery = function(){
            if (typeof Switchery != "undefined"){
                var size = "small",
                    color = "#999";
                new Switchery(fixHeaderSwitch,
                { 
                    size: size, 
                    color: color
                });
                fixHeaderSwitch.onchange = function() {
                    // Fix header setting
                    if(fixHeaderSwitch.checked){
                        $("body").addClass("fix-header");
                        $("#main-navbar").addClass("navbar-fixed-top");
                    }else{
                        $("body").removeClass("fix-header");
                        $("#main-navbar").removeClass("navbar-fixed-top");
                    }

                    window.Moderate.updateSettingCodes();
                };

                new Switchery(toggleSidebarSwitch,
                { 
                    size: size, 
                    color: color
                });
                toggleSidebarSwitch.onchange = function() {
                    // Sidebar toggle setting
                    if(toggleSidebarSwitch.checked){
                        window.Moderate.changeSidebarState("collapse");
                    }else{
                        window.Moderate.changeSidebarState("expand");
                    }
                };

                new Switchery(creativeSidebarSwitch,
                { 
                    size: size, 
                    color: color
                });
                creativeSidebarSwitch.onchange = function() {
                    // Sidebar creative switch
                    if(creativeSidebarSwitch.checked){
                        if($("body").hasClass("sidebar-extra")){
                            $("body").removeClass("sidebar-extra");
                        }
                    }else{
                        if(!$("body").hasClass("sidebar-extra")){
                            $("body").addClass("sidebar-extra");
                        }
                    }
                    window.Moderate.updateSettingCodes();
                };

                new Switchery(lightSidebarSwitch,
                { 
                    size: size, 
                    color: color
                });
                lightSidebarSwitch.onchange = function() {
                    // Sidebar light switch
                    if(!lightSidebarSwitch.checked){
                        if($("body").hasClass("sidebar-light")){
                            $("body").removeClass("sidebar-light");
                        }
                    }else{
                        if(!$("body").hasClass("sidebar-light")){
                            $("body").addClass("sidebar-light");
                        }
                    }
                    window.Moderate.updateSettingCodes();
                };
            }
        };
        
        // Handle scrollbars
        this.handleScrollbars = function(){
            if (typeof mCustomScrollbar != "undefined"){
                $(".dropdown-menu.has-scrollbar").mCustomScrollbar({
                    setHeight: 300,
                    theme: "minimal-dark",
                    scrollInertia: 100
                });
                $(".has-scrollbar").mCustomScrollbar({
                    theme: "minimal-dark",
                    scrollInertia: 100
                });
            }
        };
        
        // Initilize sweet alert
        this.initiSwal = function(){
            if (typeof swal != "undefined"){
                Swal.mixin({
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel'
                });
            }
        };
        
        // Handle numeric text inputs
        this.handleNumericInputs = function(){
            $(document).on("input", ".numeric", function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        };
    }

    // Creates a Moderate object.
    window.Moderate = new Moderate();
})(window);


$.browser = {};
(function () {
    $.browser.msie = false;
    $.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        $.browser.msie = true;
        $.browser.version = RegExp.$1;
    }
})();

function escapeHtml(text) {
    if (text == null) return;
    
    var html = text
        .replace(/<!--/g, "")
        .replace(/-->/g, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/^\s*/g, "")
        .replace(/\s*$/g, "");

    return html;
        
}
(function($) {
    $(document).ready(function() {
        Moderate.initMetisMenu();
        Moderate.checkOldIE();
        Moderate.toggleSidebarTop();
        Moderate.toggleDarkMode();
        Moderate.handleStatusButton();
        Moderate.toggleSidebar();
        Moderate.handleCodeButton();
        Moderate.handleCopyCodeButton();
        Moderate.tooltip();
        Moderate.popover();
        Moderate.dropdownHover();
        Moderate.toggleFullScreen();
        Moderate.boxFullScreen();
        Moderate.boxCollapse();
        Moderate.boxHide();
        Moderate.buttonsBoxCollapse();
        Moderate.handleSettings();
        Moderate.handleRipple();
        Moderate.handleSwitchery();
        Moderate.handleScrollbars();
        Moderate.initiSwal();
        Moderate.handleNumericInputs();
    });

    $(window).load(function() {
        // Animate loader off screen
        $("#loader").animate({
            "opacity": "0"
        }, 
        10, 
        function(){
            $("#loader").css("display","none");
        });
    });
    
    $(window).scroll(function(){
        if (document.documentElement.scrollTop > 70) {
            if(!$("body").hasClass("scrolled")){
               $("body").addClass("scrolled");
            }
        } else {
            if($("body").hasClass("scrolled")){
                $("body").removeClass("scrolled");
            }
        }
    });
    
    // Hanlde Sidebar helper
    latestDropdown = 0;
    $("#side-menu > li > a.dropdown-toggle").hover(function(){
        var sidebarCollapsed = $("body").hasClass("sidebar-collapse");
        var submenu = $(this).parent().find(">ul").clone();
        
        if(sidebarCollapsed && submenu){
            $("#sidebar-helper").html(submenu);
            
            var top = ($(this).offset().top)- $(window).scrollTop();
            var submenuHeight = $("#sidebar-helper>ul").height();


            // If submenu can display with top
            if(top + submenuHeight > $(window).height()){
                $("#sidebar-helper").css("top", (($(window).height() - submenuHeight) + "px"));
            }else{
                $("#sidebar-helper").css("top", (top + "px"));
            }
            
            latestDropdown = $(this).parent();
        }else{
            removeSidebarHelper();
        }
    },function(){
        var sidebarCollapsed = $("body").hasClass("sidebar-collapse");
        if(latestDropdown){
            var submenu = latestDropdown.find("ul");
        }
        
        if(sidebarCollapsed && submenu){
            if($("#sidebar-helper:hover").length != 0 || $(".mCSB_scrollTools:hover").length != 0){
                return 0;
            }
            removeSidebarHelper();
        }else{
            removeSidebarHelper();
        }
    });
    
    
    $(document).on("mouseenter", "#sidebar-helper ul li", function(e) {
        if($(this).find(">a").hasClass("dropdown-toggle")){
            var submenu = $(this).find(">ul");
            submenu.addClass("show");
            
            var top = (submenu.offset().top)- $(window).scrollTop();
            var submenuHeight = submenu.height();
            
            // If submenu can display with top
            if(top + submenuHeight > $(window).height()){
                $("#sidebar-helper ul ul.show").css("top", (($(window).height() - top - submenuHeight ) + "px"));
            }else{
                $("#sidebar-helper ul ul.show").css("top", "0");
            }
        }
    });

    $(document).on("mouseleave", "#sidebar-helper li", function(e) {
        if($(this).find(">a").hasClass("dropdown-toggle")){
            $(this).find(">ul").removeClass("show").css("top", "0");
        }
    });
    
    $("#sidebar-helper").hover(function(){
    },function(){
        removeSidebarHelper();
    });
    
    function removeSidebarHelper(){
        $("#sidebar-helper").html("");
    }
    
    // Handle file inputs
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
    $(".form-control[type='file']").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).parent().find("input[type='text']").val(fileName);
    });
    
    // Handle password display show/protect
    $(".toggle-password").on("click", function() {
        var inputTarget = $(this).parent().find("input");
        if($(inputTarget).attr("type") == "password"){
            $(inputTarget).attr("type", "text");
            $(this).addClass("display");
        }else{
            $(inputTarget).attr("type", "password");
            $(this).removeClass("display");
        }
    });
})(jQuery);