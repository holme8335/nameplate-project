$(document).ready(function() {
    $('.dropdown-toggle').click(function() {
        if ($(this).parent().hasClass('show')) {
            $(this).attr('aria-expanded', false);
            $(this).parent().removeClass('show');
            $(this).parent().find('.dropdown-menu').removeClass('show');
        } else {
            $('.dropdown-toggle').each(function() {
                if ($(this).parent().hasClass('show')) {
                    $(this).attr('aria-expanded', false);
                    $(this).parent().removeClass('show');
                    $(this).parent().find('.dropdown-menu').removeClass('show');
                }
            })
            $(this).attr('aria-expanded', true);
            $(this).parent().addClass('show');
            $(this).parent().find('.dropdown-menu').addClass('show');
        }
    })
})