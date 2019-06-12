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

jQuery.preloadImages = function()
 {
  for(var i = 0; i < arguments.length; i++)
  {
   jQuery("<img>").attr("src", arguments[ i ]);
  }
 };

$.preloadImages("foto_header/head2.jpg", "foto_header/head3.jpg", "foto_header/head4.jpg", "foto_header/head5.jpg", "foto_header/head6.jpg", "foto_header/head7.jpg", "foto_header/head8.jpg", "foto_header/head9.jpg", "foto_header/head10.jpg"
, "foto_header/head11.jpg", "foto_header/head12.jpg", "foto_header/head13.jpg");

$(function () {
    $(document).on('mousemove', function (e) {
        $('.bg').css({
            left: -e.pageX / 10 + 100,
            top: -e.pageY / 10 + 100
        });
        $('.second').css({
            left: e.pageX / 50 + 200,
            top: e.pageY / 50 + 200
        });
    });
});