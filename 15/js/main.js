$(function ()
{
    $('header').innerHeight($(window).height());

    //show background for navbar after banner
    $(document).on('scroll',function ()
    {
        if($(document).scrollTop() > $('.sec1').offset().top)
        {
            $('nav').css('backgroundColor','rgba(85, 85, 85, 0.88)');
        }
        else
        {
            $('nav').css('backgroundColor','transparent');
        }
    });
});