// $(document).ready(function() {
// $(".fab").fadeOut(1000).fadeIn(1000);
// });

$(function () {
    setInterval(function () {
        $("span").fadeIn(1500).delay(2000).fadeOut(500).fadeIn(1500);
    }, 5000);
});

// $(document).ready(function () {
//            $('ul.nav-links > li').click(function (e) {
//                $('ul.nav-links > li').removeClass('active');
//                $(this).addClass('active');
//            });
//        });
