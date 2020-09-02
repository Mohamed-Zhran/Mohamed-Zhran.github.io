$(function ()
{
    var windowWidth = $(window).width(),
        brandWidth = $('.navbar-brand').outerWidth(true),
        navbarList = $('.navbar-nav').outerWidth(true),
        toggler = $('.navbar-light .navbar-toggler').outerWidth(true);
    navbarPaddingL = $('.navbar').css('paddingLeft'),
        navbarPaddingR = $('.navbar').css('paddingRight');
    if (windowWidth > 990)
        $('.navbar-nav').css('marginLeft', windowWidth - (brandWidth + navbarList + parseInt(navbarPaddingL) + parseInt(navbarPaddingR)));

    $('.navbar-light .navbar-toggler').css('marginLeft', windowWidth - (brandWidth + toggler + parseInt(navbarPaddingL) + parseInt(navbarPaddingR)));

    $('.carousel .carousel-item').height($(window).height());

    $(window).on('scroll', function ()
    {
        if ($(window).scrollTop() >= $('.carousel').height() + $('.carousel').offset().top)
        {
            $('.navbar').css(
                {
                    position: 'fixed',
                    backgroundColor: '#000',
                    top: 0
                });
        }
        else
        {
            $('.navbar').css(
                {
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    top: 20
                });
        }
    })
});
