jQuery(document).ready(function($) {
    //Prevent Collapsible open/close when click on links (<a> tags)
    $("a").on('click', function (e) { e.stopPropagation(); })

    //+ e - (collapsible open/close) evento de animação de troca icone manual
    $('.panel-collapse').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */

        //Se a atividade estiver fechada (collapse)
        if ($(this).is('.collapsed')) {
            //Esconde a div falando para clicar para ver mais detalhes
            $(this).children('.more_details').hide('400');
            $(this).find('.collapse-icon').removeClass('fa-plus');
            $(this).find('.collapse-icon').addClass('fa-minus');
        }

        //Se a atividade nao estiver fechada (collapse) 
        else {
            //Mostra a div falando para clicar para ver mais detalhes
            $(this).children('.more_details').show('400');
            $(this).find('.collapse-icon').removeClass('fa-minus');
            $(this).find('.collapse-icon').addClass('fa-plus');
        }
    });
});