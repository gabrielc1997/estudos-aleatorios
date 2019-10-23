$(function() {

    var form_c = {
            e: ''
        }
        /*
         *****   *****   [     Add_error  ]  *****   *****
         */
        /*
         *****   *****   [     Add_error  ]  *****   *****
         */

    /*
     *****   *****   [     Scroll to error  ]  *****   *****
     */
    function scroltToError(seletor) {
        $('html, body').animate({
            scrollTop: seletor.offset().top - 150
        }, 1200);
    }
    /*
     *****   *****   [     Scroll to error  ]  *****   *****
     */

    /*
     *****   *****   [     Add_error  ]  *****   *****
     */
    function add_error(t, s, m) {
        if (m == '') { m = '  ' }
        if (t == 'r') {
            s.removeClass('sendFormError');
            s.closest('div').find('.label-modal-close').attr('error', "false").html('<p class="error-sys-js"> </p>');
        } else {
            s.addClass('sendFormError');

            var rt = s.closest('div').find('.label-modal-close').attr('error');
            if (rt == 'true') {
                return false;
            } else {
                scroltToError(s);
                s.closest('div').find('.label-modal-close').attr('erro', ' ');
                s.closest('div').find('.label-modal-close').html('<p class="error-sys-js">' + m + '</p>');
                return false;
            }

        }

    }
    /*
     *****   *****   [     Add_error  ]  *****   *****
     */

    /*
     *****   *****   [     Teste length  ]  *****   *****
     */
    var _syt;
    var ci;
    // function test_lenght(se, si) {
    //     var l = se.val().length;

    //     if (l < si) {
    //         cit = _syt.ci;
    //         add_error('ad', se, cit);
    //         return r = 'false';
    //     } else {
    //         add_error('r', se, ' ');
    //         return r = 'true';
    //     }
    // }
    /*
     *****   *****   [     Teste length  ]  *****   *****
     */

    /*
     *****   *****   [     Test email  ]  *****   *****
     */


    // function test_email(email, s) {

    //     var ve = email.val();

    //     if (ve.length <= s) {
    //         if (ve.length > 1 && ve.length <= s) {

    //             t1t = _syt.t1;
    //             add_error('ad', email, t1t);
    //             return f = 'false';
    //         } else {
    //             t2t = _syt.t2;
    //             add_error('ad', email, t2t);
    //             return f = 'false';
    //         }
    //     } else {
    //         if (ve.indexOf("@") == -1 || ve.indexOf(".") == -1) {
    //             t3t = _syt.t3;
    //             add_error('ad', email, t3t);
    //             return r = 'false';
    //         }
    //         add_error('r', email);
    //         return r = 'true';
    //     }
    // }
    /*
     *****   *****   [     Test email  ]  *****   *****
     */

    /*
     *****   *****   [     Clear input  ]  *****   *****
     */
    function clear_input() {
        $("form *").val(' ');
    }
    /*
     *****   *****   [     Clear input  ]  *****   *****
     */

    /*
     *****   *****   [     animation write  ]  *****   *****
     */
    writ_cont = 0;

    function addtextmovie(t, a) {
        if (a == 'digitar') {
            s = t.length
            if (writ_cont < s) {
                message_sending_class.append(t[writ_cont]);
            }

            setTimeout(function() {
                writ_cont++;
                addtextmovie(t);
            }, 110)
        } else {
            message_sending_class.html(t);
        }
    }
    /*
     *****   *****   [     animation write  ]  *****   *****
     */


    var btn_submit_form_js = $(".btn-submit-form-js");
    var ntext = btn_submit_form_js.attr('text_bt');
    btn_submit_form_js.find('span').html(ntext);

    /*
     *****   *****   [     Start send 'form solicitacao'  ]  *****   *****
     */
    function ajSend(se, urlToGo) {



        setTimeout(function() {
            window.location.assign(urlToGo);
            var ntext = btn_submit_form_js.attr('text_bt');
            btn_submit_form_js.find('span').html(text_bt_enviada);
        }, 7500);





        jQuery.ajax({
            type: 'POST',
            url: se.attr("action"),
            data: se.serialize(),
            beforeSend: function() {
                var ntext = btn_submit_form_js.attr('text_bt_enviando');
                btn_submit_form_js.find('span').html(ntext);

                $(".circulo-out").show();
            },
            success: function(e) {
                var ntext = btn_submit_form_js.attr('text_bt_enviada');
                btn_submit_form_js.find('span').html(ntext);

                var text_bt_enviada = btn_submit_form_js.attr('text_bt_enviada');

                setTimeout(function() {
                    window.location.assign(urlToGo);
                    var ntext = btn_submit_form_js.attr('text_bt');
                    btn_submit_form_js.find('span').html(text_bt_enviada);
                }, 7500);

                $(".circulo-out").hide();
            },
            error: function() {
                $(".circulo-out").hide();
            }
        }); // End ajax

    } //End function ajSend
    /*
     *****   *****   [     Function ajax envio  ]  *****   *****
     */

    /*
     *****   *****   [     Phone mask  ]  *****   *****
     */
    function filtrarTelefone(value) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value.substring(0, 14);
    }

    $("input[name='telefone']").keypress(function(e) {
        $(this).val(filtrarTelefone($(this).val()));
    });
    /*
     *****   *****   [     Phone mask  ]  *****   *****
     */

    /*
        =========================================================================
            *****   *****   [     Start send 'form solicitacao'  ]  *****   *****
        =========================================================================
    */
    // contatoForm = $('#form-contato');
    // contatoForm.submit(function() {
    //     if (test_lenght($("input[name='nome']"), 3) != 'true') { return false; }
    //     if (test_lenght($("input[name='telefone']"), 4) != 'true') { return false; }
    // });
    /*
        =========================================================================
            *****   *****   [     Start send 'form solicitacao'  ]  *****   *****
        =========================================================================
    */




});

var customMask = new IMask(document.getElementById('m2'), {
    mask: '0000{m2}',
    lazy: true
}); 

var customMask = new IMask(document.getElementById('m21'), {
    mask: '0000{m2}',
    lazy: true
}); 



function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9]+$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
  function onlyletter(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[a-zA-Z ]+$/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
