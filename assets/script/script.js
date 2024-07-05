$(document).ready(function() {
    $('.nav-link').click(function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section');
        $('.section').addClass('d-none');
        $('#' + sectionId).removeClass('d-none');
        $('.navbar-collapse').collapse('hide'); // Fechar o menu ao clicar em um item
    });

    // Mostrar todas as seções em telas menores
    function handleResize() {
        if ($(window).width() < 768) {
            $('.section').removeClass('d-none');
        } else {
            $('.section').not(':first').addClass('d-none');
        }
    }

    $(window).resize(handleResize);
    handleResize();
});
