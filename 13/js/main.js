$(function ()
{
    $('nav .dropdown').on('click', function ()
    {
        $('.menu').slideDown(1000);
    });

    $('.menu span').on('click' ,function()
    {
        $('.menu').slideUp(1000);
    });
});