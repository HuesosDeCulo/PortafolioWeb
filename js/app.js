// MENU
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu_lista");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

         window.onscroll = ()=>{
             this.scrollY > 8 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
         }
// CIERRE MENU

// contacto
$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
