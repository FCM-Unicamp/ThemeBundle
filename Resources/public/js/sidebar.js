
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

});
/*
$("#menu-toggle-2").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu ul').hide();
});
*/

function initMenu() {
    // hide first item
    $('#menu.collapsible ul.menu_level_1').hide();

    $('#menu li.current').children('ul.menu_level_1').show();

    $('#menu li.current_ancestor').children('ul.menu_level_1').show();

    $('#menu.collapsible ul:first').show();

    $('#menu.collapsible li a').click(
        function() {

            var checkElement = $(this).next();
            if((checkElement.is('ul.menu_level_1')) && (checkElement.is(':visible'))) {
                //return false;
            }

            if((checkElement.is('ul.menu_level_1')) && (!checkElement.is(':visible'))) {
                $('#menu ul.menu_level_1:visible').slideUp('fast')
                checkElement.slideDown('fast');
                return false;
            }
        }
    );
}
$(document).ready(function() {
    //initMenu();
});