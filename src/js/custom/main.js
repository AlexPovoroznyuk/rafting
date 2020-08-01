
function onViewport(item, position){
    var offsetScroll = 30;
    if(position == "top"){
        offsetScroll = 30;
    }
    if(position == "center"){
        offsetScroll = ($(window).innerHeight() / 2) + 30;
    }
    if(position == "bottom"){
        offsetScroll = $(window).innerHeight();
    }
    var listOffset = {
        top: 0,
        center : $(window).innerHeight() / 2,
        bottom : $(window).innerHeight() + 30
    };
    if(item.length){
        if(item.offset().top <= $(window).scrollTop() + offsetScroll && item.offset().top + item.innerHeight() >= $(window).scrollTop() + offsetScroll){
        return true;
        }
        else{
            return false;

        }
    }

}

$(document).ready(function(){
    $(".large-logo").each(function(){
        if(onViewport($(this), "center")){
            $(this).addClass("active")
        }
    })
    $(".stroke-animation").each(function(){
        if(onViewport($(this), "center")){
            $(this).addClass("active")
        }
    })
    $("footer").each(function(){
        if(onViewport($(this), "bottom")){
            $(this).addClass("active")
        }
    })
    $("section").each(function(){
        if(onViewport($(this), "top")){
            $(this).addClass("active")
        }
    });
    $(".autoscroll").click(function (event) {
		event.preventDefault();
		var el = $(".tour-list").offset().top;
	    $('body,html').animate({scrollTop: el}, 1000);
    });
    $(".tour-slider1").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        appendArrows: $(".select-tour .items1"),
        prevArrow: `
            <button class="arrow arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-left" transform="translate(371 -1984)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <button class="arrow arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-right" transform="translate(-312 2043) rotate(180)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </button>
        `,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

              }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".tour-slider2").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        appendArrows: $(".select-tour .items2"),
        prevArrow: `
            <button class="arrow arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-left" transform="translate(371 -1984)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <button class="arrow arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-right" transform="translate(-312 2043) rotate(180)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </button>
        `,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

              }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".tour-slider3").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        appendArrows: $(".select-tour .items3"),
        prevArrow: `
            <button class="arrow arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-left" transform="translate(371 -1984)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <button class="arrow arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-right" transform="translate(-312 2043) rotate(180)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </button>
        `,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

              }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".tour-slider4").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        appendArrows: $(".select-tour .items4"),
        prevArrow: `
            <button class="arrow arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-left" transform="translate(371 -1984)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <button class="arrow arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-right" transform="translate(-312 2043) rotate(180)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </button>
        `,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

              }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var nextImg = $(`.slider .slide[data-slide=${nextSlide}]`).attr("data-img");
        console.log(nextImg)
        $(".promotion .screen").addClass("fade");
        setTimeout(() => {
            $(".promotion .screen").css("background-image", `url(${nextImg})`);
            setTimeout(() => {
                $(".promotion .screen").removeClass("fade");
            }, 200);
        }, 300);
    });

    $(".slider-integration").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        appendDots:$(".slider-outer")
    });

    $(".tour-photos .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        appendArrows:$(".slider-outer"),
        prevArrow: `
            <button class="arrow arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-left" transform="translate(371 -1984)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <button class="arrow arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-right" transform="translate(-312 2043) rotate(180)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </button>
        `,
    });

    $(".tour-variant .tour-wr").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: `
            <button class="arrow arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-left" transform="translate(371 -1984)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </div>
        `,
        nextArrow: `
            <button class="arrow arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59">
                    <g id="arrow-right" transform="translate(-312 2043) rotate(180)">
                    <g id="Эллипс_34" class="circles" data-name="Эллипс 34" transform="translate(-371 1984)" fill="#fff" stroke="#ddd" stroke-width="1">
                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                        <circle cx="29.5" cy="29.5" r="29" fill="none"/>
                    </g>
                    <g id="Сгруппировать_52" data-name="Сгруппировать 52" transform="translate(-456 602)">
                        <rect id="Прямоугольник_342" data-name="Прямоугольник 342" width="32" height="2" rx="1" transform="translate(102 1410)"/>
                        <rect id="Прямоугольник_343" data-name="Прямоугольник 343" width="12" height="2" rx="1" transform="translate(100.929 1409.586) rotate(45)"/>
                        <rect id="Прямоугольник_344" data-name="Прямоугольник 344" width="12" height="2" rx="1" transform="translate(109.414 1403.929) rotate(135)"/>
                    </g>
                    </g>
                </svg>
            </button>
        `,
    });

    $(".tour-variant .trigger").click(function(){
        let slideNumber = $(this).attr("data-slide");
        $(".tour-variant .trigger").removeClass("active");
        $(this).addClass("active")
        $(".tour-variant .tour-wr").slick("slickGoTo", slideNumber);
    })

    $('.tour-variant .tour-wr').on('afterChange', function(event, slick, currentSlide){
        console.log(currentSlide);
        $(".tour-variant .trigger").removeClass("active");
        $(`.tour-variant .trigger[data-slide="${currentSlide}"]`).addClass("active");
    });
    $(".tour-photos .preview-section .item").click(function(){
        let slideNum = $(this).attr("data-dot");
        $(".tour-photos .slider").slick("slickGoTo", slideNum)
    })
});

$(".select-tour-wr .tab-item a").click(function(e){
    e.preventDefault();
    const current = $(this).attr("data-tab-trigger");
    $(".select-tour-wr .tab-item a").removeClass("active");
    $(this).addClass("active");
    $(".select-tour-wr .items").removeClass("opened");
    $(`.select-tour-wr .items[data-tab=${current}]`).addClass("opened");
});


$(".popular .tab-item a").click(function(e){
    e.preventDefault();
    const current = $(this).attr("data-popular-trigger");
    $(".popular .tab-item a").removeClass("active");
    $(this).addClass("active");
    $(".popular .tour-item").removeClass("opened");
    $(`.popular .tour-item[data-tab-item=${current}]`).addClass("opened");
});

$(document).scroll(function(){
    $(".large-logo").each(function(){
        if(onViewport($(this), "top")){
            $(this).addClass("active")
        }
    });
    $("footer").each(function(){
        if(onViewport($(this), "bottom")){
            $(this).addClass("active")
        }
    })
    $(".stroke-animation").each(function(){
        if(onViewport($(this), "bottom")){
            $(this).addClass("active")
        }
    })
    $("section").each(function(){
        if(onViewport($(this), "center")){
            $(this).addClass("active")
        }
    });
});


$(".modal-trigger").click(function (e) {
    e.preventDefault();
    if ($(this).attr('data-target')) {
        let modalOpen = $(this).attr('data-target');
        $(`#${modalOpen}`).addClass("active");
        $("body").addClass("modal-open");
    }
})
$(".close-modal").click(function () {
    var video = "";
    $(".modal").removeClass('active');
    $("body").removeClass("modal-open");
    $(".valid-error").html("");
    video = $(".modal .video-inner").html();
    $(".modal .video-inner").html("");
    setTimeout(function () {
        $(".modal .video-inner").html(video);
    }, 300)
})

var EmptyError = "can't be empty";
  var EmailError = "invalid email format";
  var PhoneError = "invalid phone format";
  var sendForm;
  $("form").on("submit", function (e) {
      e.preventDefault();
      var thisForm = $(this);
      sendForm = true;
      $(this).find(".reqiered-field").each(function () {

          if ($(this).val() == "") {
              $(this).closest(".input-item").addClass("validation-error");
              $(this).closest(".input-item").find(".valid-error").html(EmptyError);

              sendForm = false;


          }
        else if ($(this).attr("name") == "email") {
            if ($(this).val() == "") {
                $(this).closest(".input-item").addClass("validation-error");
                $(this).closest(".input-item").find(".valid-error").html(EmptyError);
                sendForm = false;
            } else if (!(/^[A-Za-z0-9][A-Za-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))) {
                $(this).closest(".input-item").addClass("validation-error");
                $(this).closest(".input-item").find(".valid-error").html(EmailError);

                sendForm = false;
            } else {
                $(this).closest(".input-item").removeClass("validation-error");
                $(this).closest(".input-item").find(".valid-error").html("");
            }
        }  else {
              $(this).closest(".input-item").removeClass("validation-error");
              $(this).closest(".input-item").find(".valid-error").html("");

          }
      });
      if (sendForm) {

          var that = $(this);
          var formData = new FormData(that.get(0));
          $.ajax({
              url: $(this).attr('action'),
              type: 'POST',
              contentType: false,
              processData: false,
              data: formData,

              success: function (data) {
                  $(".modal").removeClass("active");
                  $(".modal.thank-modal").addClass("active");
                  $("body").addClass("modal-open");
                  $(".input-item input").val("")
              },
              error: function (xhr, err, data) {
                  $(".modal").removeClass("active");
                  $(".modal.error-modal").addClass("active");
                  $("body").addClass("modal-open");
              }
          });
      }
  });


$(document).scroll(function(){
        if($(window).scrollTop() > 300){
            $("header").addClass("scrolled");
        }
        else if($(window).scrollTop() < 300 && $("header").hasClass("scrolled")){
        $("header").addClass("scrolled--up");
        setTimeout(function(){
            $("header").removeClass("scrolled");
            $("header").removeClass("scrolled--up");
        },100)
        }
  });



$(".burger").click(function(){
    $(".mobile-menu").addClass("active");
});

$("header .close-trigger").click(function(){
    $(".mobile-menu").removeClass("active");
});
