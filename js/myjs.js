

    // هنگام بارگذاری صفحه، موقعیت اسکرول را بازیابی کنیم  
    if (sessionStorage.getItem('scrollPosition')) {
        $(window).scrollTop(sessionStorage.getItem('scrollPosition'));
    }

    // هنگام اسکرول، موقعیت اسکرول را ذخیره کنیم  
    $(window).on('scroll', function () {
        sessionStorage.setItem('scrollPosition', $(window).scrollTop());
    });

    // Berger menu  
    const $button = $('.navbar-toggler');
    const $navOverlay = $('.nav-overlay');
    const $navbarCollapse = $('.navbar-collapse');

    $button.on('click', function () {
        $navOverlay.toggleClass('active');
    });

    $navOverlay.on('click', function (event) {
        if (event.target === this) {
            $navOverlay.removeClass('active');
            $navbarCollapse.removeClass('show');
        }
    });


    // close button
    $('.mobail-fixed-bottom .btn-close').on('click', function () {
        $('.mobail-fixed-bottom').css("display", "none");
    });


    // header swiper
    var swiperheader = new Swiper(".headerSwiper", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {                    // رویدادها  
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            }
        }

    });


    // carousel in m1


    var swiper1 = new Swiper(".mobailSwiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 0,
        speed: 1000,              // تنظیم سرعت جابجایی (به میلی‌ثانیه)  

        autoplay: {              // تنظیمات autoplay  
            delay: 12000,         // زمان تاخیر برای autoplay  
            disableOnInteraction: false, // غیر فعال نشود بعد از تعامل کاربر  
        },
        pagination: {            // تنظیمات pagination  
            el: '.swiper-pagination', // انتخاب عنصر برای pagination  
            clickable: true,          // کلیک‌پذیر بودن دکمه‌های pagination  
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {                    // رویدادها  
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            }
        }

    });



    // media watch in m3

    $('.media-list-item').click(function (e) {
        e.preventDefault(); // جلوگیری از رفتن به لینک  
        var videoId = $(this).data('video'); //ویدیو id  دریافت 

        // مخفی کردن همه ویدیوها  
        $('.media-item').hide();

        // نمایش ویدیوی انتخاب شده  
        $('#' + videoId).show();

        // حذف کلاس "active" از همه عناصر ویدیو  
        $('.media-list-item').removeClass('active');

        // اضافه کردن کلاس "active" به عنصر انتخاب شده  
        $(this).addClass('active');

    });

    $('.big-play-btn').on('click', function () {
        var video = $(this).closest('.m3-video-items').find('.video-item')[0];
        video.play(); // ویدیو را پخش کنید  
        $(this).hide(); // دکمه را پنهان کنید  
        $(this).closest('.m3-video-items').find('.img-video').hide(); // تصویر را پنهان کنید  
    });

    // وقتی کاربر اسکرول کند، دکمه جستجو نشان داده شود  
    $(window).scroll(function () {
        var saidscrollTop = $(this).scrollTop(); // مقدار اسکرول از بالای صفحه  
        // console.log($(this).scrollTop())
        if (saidscrollTop < 1730) {
            // $('.saidbar-icon').fadeOut();
            $('.saidbar-icon').addClass("position-absolute1");


        }
        if (saidscrollTop > 1730) {
            $('.saidbar-icon').fadeIn();
            $('.saidbar-icon').css("position" , "statick");
            $('.saidbar-icon').removeClass("position-absolute1");



        } 
        if (saidscrollTop > 1900) {
            $('.saidbar-icon').removeClass("position-absolute1");
            $('.saidbar-icon').addClass("fixed");
            console.log($(this).scrollTop())

        } else {  
            $('#sidebar').removeClass('fixed'); // حذف کلاس fixed 
            $('.saidbar-icon').addClass("position-absolute1");

            $('#sidebar').css('top', '2000px'); // نشانی دایو در موقعیت اولیه  
        }  

    });


    // وقتی کاربر اسکرول کند، دکمه نشان داده شود  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    // وقتی دکمه کلیک شد، به بالا اسکرول کنیم  
    $('#scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    $('.saidbar-menu li').hover(function () {
        $('.overlay').css("display", "block");
    }, function () {
        $('.overlay').css("display", "none");

    }
    );


    // video swiper
    var swiperheader = new Swiper(".videoSwiper", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
                slidesPerGroup: 2,
            },
            430: {
                slidesPerView: 1.5,
                slidesPerGroup: 2,
            },
            567: {  // از 768 پیکسل به بالا  
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        },
        on: {                    // رویدادها  
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            }
        }

    });


    var currentVideo = null;
    $('.mobail-big-play-btn').on('click', function () {
        var video = $(this).closest('.m4-mobail-video-items').find('.mobail-video-item')[0];
        if (currentVideo && currentVideo !== video) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
        }
        video.play();
        currentVideo = video;
        $(this).hide();
        $(this).closest('.m4-mobail-video-items').find('.mobail-img-video').hide();
    });



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 10,
        speed: 2000,              // تنظیم سرعت جابجایی (به میلی‌ثانیه)  
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        touchEventsTarget: 'container',
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },

        on: {
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            }
        }
    });
    // $('.swiper-button-prev').hide(); // مخفی کردن دکمه  


    function updateNavigationButtons(swiper) {

        // مخفی کردن دکمه قبلی در اولین آیتم  
        if (swiper.isBeginning) {
            $('.swiper-button-prev').hide();
        } else {
            $('.swiper-button-prev').show();
        }

        // مخفی کردن دکمه بعدی در آخرین آیتم  
        if (swiper.isEnd) {
            $('.swiper-button-next').hide();
        } else {
            $('.swiper-button-next').show();
        }
    }

    updateNavigationButtons(swiper);
    // console.log(swiper.isBeginning)

    // $('.swiper-button-prev').attr('aria-disabled', 'true');  


    // m6 swiper
    var swiperm6 = new Swiper(".m6Swiper", {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
                slidesPerGroup: 2,
            },
            430: {
                slidesPerView: 1.5,
                slidesPerGroup: 2,
            },
            768: {  // از 768 پیکسل به بالا  
                slidesPerView: 2.5,
                slidesPerGroup: 2,
            }
        },

        on: {                    // رویدادها  
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            }
        }

    });



