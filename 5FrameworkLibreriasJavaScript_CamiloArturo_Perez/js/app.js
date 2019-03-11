



$( document ).ready(function() {

    setInterval(function(){
        var el = document.getElementById('tituloJuego');
        if(el.className == 'luzOff'){
            el.className = 'luzOn';
        }else{
            el.className = 'luzOff';
        }
    },500);




    $(".btn-reinicio").click(function(){

        const match = new Match ( {'nombre':'Camilo', 'apellido':'Perez'} );
        match.reset();
    });



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



class Match {
    constructor ( conf ){

        var usuario = "Diseñado por "+ conf.nombre + ' ' + conf.apellido;
        console.log(usuario);

        //this.adicionarPropiedades( )  ;
        //this.eventoClic( )  ;



    }

    reset(){

        for(var c=1; c<=7; c++) {

            $("."+'col-'+c).html("");
            for(var f=1; f<=6; f++) {
                var dulce = Math.floor((Math.random() * 4) + 1);
                this.adicionarDulce('col-'+c, c+"-"+f, dulce);
            }
        }


    }

    adicionarDulce(columna, idDulce, dulce){
        //$("."+columna).append(" <article class=' fila-"+idDulce+"'><img class='elemento' src='image/"+dulce+".png'></article>");
        $("."+columna).prepend(" <img class='fila-"+idDulce+" elemento' src='image/"+dulce+".png'>");

    }










}