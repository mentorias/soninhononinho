jQuery(document).ready(function ($) {

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 48
                }, 1500, 'easeInOutExpo');
            }
        }
    });
    
    var WcAjax = $("link[rel='base']").attr('href') + "/_app/";
    
    
    $('.j_cadastro').submit(function () {

        var form = $(this);
        var data = $(this).serialize();
        $('.load').fadeToggle();

        $.ajax({
            url: "_app/cadastra.ajax.php",
            data: data,
            type: 'POST',
            dataType: 'json',
            beforeSend: function () {
                form.find('.load').fadeIn(500);
            },
            success: function (resposta) {
                if (resposta.success) {
                    $('.all-div').fadeOut(function () {
                        $('html').find('.trigger-box').html(resposta.success);
                    });
                    $('html').find('.trigger-box').fadeIn();
                } else {
                    $('html').find('.trigger-box-simulador').html('Ocorreu um erro ao enviar a sua inscriÃ§Ã£o. Lamentamos o ocorrido. Tente novamente mais tarde!');
                    $('html').find('.trigger-box-simulador').fadeIn();
                }
                form.find('.load').fadeOut(500);
            }
        });

        return false;
    })

    $(".navbar-collapse a").on('click', function () {
        $(".navbar-collapse.collapse").removeClass('in');
    });
});
