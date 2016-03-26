$(document).ready(function() {
    $(".top-nav_button").click(function() {
        $(".top-nav_items ul").slideToggle();
    });

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

//    timeline

$(function(){

   $().timelinr({

      orientation: 'horizontal',

      // value: horizontal | vertical, default to horizontal

 

      containerDiv: '#timeline',

      // value: any HTML tag or #id, default to #timeline

 

      <a href="http://www.jqueryscript.net/time-clock/">date</a>sDiv: '#dates',

      // value: any HTML tag or #id, default to #dates

 

      datesSelectedClass: 'selected',

      // value: any class, default to selected

 

      datesSpeed: 'normal',

      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal

 

      issuesDiv : '#issues',

      // value: any HTML tag or #id, default to #issues

 

      issuesSelectedClass: 'selected',

      // value: any class, default to selected

 

      issuesSpeed: 'fast',

      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast

 

      issuesTransparency: 0.2,

      // value: integer between 0 and 1 (recommended), default to 0.2

 

      issuesTransparencySpeed: 500,

      // value: integer between 100 and 1000 (recommended), default to 500 (normal)

 

      prevButton: '#prev',

      // value: any HTML tag or #id, default to #prev

 

      nextButton: '#next',

      // value: any HTML tag or #id, default to #next

 

      arrowKeys: 'false',

      // value: true/false, default to false

 
      startAt: 1,
      // value: integer, default to 1 (first)
 
      autoPlay: 'false',
      // value: true | false, default to false
 
      autoPlayDirection: 'forward',
      // value: forward | backward, default to forward
 
      autoPlayPause: 2000
      // value: integer (1000 = 1 seg), default to 2000 (2segs)< });
 
   });