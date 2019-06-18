(function() {
    var selectors = {
        nav: '[data-features-nav]',
        tabs: '[data-features-tabs]',
        active: '.__active'
    }
    var classes = {
        active: '__active'
    }
    $('a', selectors.nav).on('click', function() {
        let $this = $(this)[0];
        $(selectors.active, selectors.nav).removeClass(classes.active);
        $($this).addClass(classes.active);
        $('div', selectors.tabs).removeClass(classes.active);
        $($this.hash, selectors.tabs).addClass(classes.active);
        return false
    });
}());

$(".btn-with-icon").on("click", function() {
    $(".wave-anim").addClass('visible').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function() {
        $(".wave-anim").removeClass('visible');
    });
});


const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('search-active');
});

body.addEventListener('click', function () {
    search.classList.remove('search-active');
});

var clock = document.getElementById('clock');

function hexoClock() {
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();
    
    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    
    var clockString = h + ':' + m + ':' + s;
    clock.textContent = clockString;
}

hexoClock();
setInterval(hexoClock, 1000);

$(document).on('click', '.lang a', function(){
    $(this).addClass('active_lang').siblings().removeClass('active_lang')
});


$(document).ready(function(){
    $("#mobileMenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



$(document).ready(function() {
	// check in javascript is running
	console.log("Javascript Running");
	
	// for selecting navigation items
	var top = 'a[href="#top"]';

	// position of each section
	var navHeight = 60;
	var plantTop = $('#plant').position().top - navHeight;
	var deliveryTop = $('#delivery').position().top - navHeight;
	var contactTop = $('#contact').position().top - navHeight;


	function defineTopPos() {
		plantTop = $('#portfolio').position().top - navHeight;
		deliveryTop = $('#aboutMe').position().top - navHeight;
		contactTop = $('#contact').position().top - navHeight;
	}

	//when window resized, run code
	$(window).resize(function() {
		defineTopPos();
	});

	function changeUpButton(state) {
		if (state=='on') {
			$('.up-btn').fadeIn(300);
			$('.up-btn').removeClass('invisible');
		} else {
			$('.up-btn').fadeOut(300);
		}
	}

	//called during scroll. changes navigation bar highlight
	function changeNavHighlight(section) {
		$('#myNavBar>ul>li>a.active').removeClass('active');
		$(section).addClass('active');
		$('nav').fadeIn(300);
		$('nav').removeClass('invisible');
	}


	//on scroll, run code
	$(window).scroll(function() {
		if ($(this).scrollTop() < plantTop) {
			$('nav').fadeOut(200);
			$('#myNavBar>ul>li>a.active').removeClass('active');
			changeUpButton('off');
		//portfolio
		} else if ($(this).scrollTop() >= plantTop && 
			$(this).scrollTop() < deliveryTop) {
			changeNavHighlight(portfolio);
			changeUpButton('off');
		//about me
		} else if ($(this).scrollTop() >= deliveryTop &&
			$(this).scrollTop() < contactTop) {
			changeNavHighlight(aboutMe);
			changeUpButton('on');
		// contact
		} else if ($(this).scrollTop() >= contactTop) {
			changeNavHighlight(contact);
			changeUpButton('on');
		}
	});

	//smooth scroll
	$('a[href*="#"]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate( {
	    	scrollTop: $(this.hash).offset().top - navHeight + 1}, 500);
	});


//FORM CODE
	//form: when clicking in or out of an input field
	$('.overlabel').each(function () {
	    var field = $(this).find('[type=text], [type=file], [type=email], [type=password], textarea');
	    var span = $(this).find('> span');
	    var input = $(this).find('> input');
	    var textarea = $(this).find('> textarea');
	    

	    //when clicking OUT of field
	    var onBlur = function () {
	    	//if something in input field upon clicking out
	        if ($.trim(field.val()) !== '') {
	        	//change color
	        	textarea.css("color", "#7291d6");
	            input.css("color", "#7291d6");
//!!	        //check to see if valid input
//!!	            //make a warning message appear if not valid

	        }
	    };

	    //when clicking INTO a field...
	    field.focus(function () {
	    	input.css("color", "black");
	    	textarea.css("color", "black");
	    }).blur(onBlur);
	    onBlur();


	    //when typing
	    $(this).on('input', function (){
			if ($.trim(field.val()) == '') {
	    		$(span).removeClass("infoEntered");
	    	} else {
	    		$(span).addClass("infoEntered");
	    	}
	    });
	});

});