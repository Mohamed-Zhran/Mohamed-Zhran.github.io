$(function ()
{
    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowHeight - (upperHeight + navHeight));
    $('.feat-work .images img').height(windowHeight / 2);


    $('.feat-work ul li').on('click', function ()
    {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all')
        {
            $('.feat-work .images .col-md-3').css('opacity', 1)
        }
        else
        {
            $('.feat-work .images .col-md-3').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    var statStatus=0;
    $(window).on('scroll', function ()
    {
        if ($(window).scrollTop() > $('.choose-us').offset().top && statStatus == 0)
        {
            $('.timer1').countTo({from: 0, to: 3329, speed: 1000, refreshInterval: 50});
            $('.timer2').countTo({from: 0, to: 156789, speed: 1000, refreshInterval: 50});
            $('.timer3').countTo({from: 0, to: 13222, speed: 1000, refreshInterval: 50});
            $('.timer4').countTo({from: 0, to: 9623689, speed: 1000, refreshInterval: 50});
            statStatus=1;
        }
    });
});