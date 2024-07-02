$(document).ready(function() {
    $('.nav-link').click(function(e) {
        e.preventDefault();
        const sectionId = $(this).data('section');
        $('.section').addClass('d-none');
        $('#' + sectionId).removeClass('d-none');
        $('.navbar-collapse').collapse('hide'); // Fechar o menu ao clicar em um item
    });
});
