



$( document ).ready(function() {



    setInterval(function(){
        var el = document.getElementById('tituloJuego');
        if(el.className == 'luzOff'){
            el.className = 'luzOn';
        }else{
            el.className = 'luzOff';
        }
    },500);




    $(".logo").click(function(){
        var tipoFont = $("body").css(["font-family","font-size","box-sizing"]);
        $.each(tipoFont, function(tipo,value){
            window.alert(tipo + ":" + value);
        });
    });

    $(":header, p, span").hover(function(){
        $(this).css("color","yellow");

    });

    $(".cuadro").click(function(){
        $(this).css("height", function(index, value){
            return parseFloat(value)*1.2;
        });
    });

    $(".cuadro.azul").hover(function(){
        $(this).removeClass("azul");
        $(this).addClass("verde");
    });


});