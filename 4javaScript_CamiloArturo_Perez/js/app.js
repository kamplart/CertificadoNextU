

class Calculadora {
    constructor ( conf ){
       /* this.x = conf.x;
        this.y = conf.y;

        console.log(conf);

        */

        this.eventoClic( )  ;


    }


    eventoClic  (  )   {

        var photo = document.getElementsByClassName( "tecla" );

        var ide;

        for (var i=0; i < photo.length; i++) {
            photo[i].onclick = function(){

                for (var i=0; i < photo.length; i++) {
                    ide = photo[i].id;
                    document.getElementById(ide).style="cursor:pointer;";
                };

                ide = this.id;

                Calculadora.adicionarTeclaADisplay(ide);
                document.getElementById(ide).style="cursor:pointer;width:70px;";
                console.log();
            }
        };
    }

    static adicionarTeclaADisplay(tecla){

        var display = document.getElementById("display").textContent;


        //alert(display);



        document.getElementById("display").innerHTML = tecla;


    }


    static distancia ( a , b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt ( dx * dx + dy * dy );
    }
}



const p1 = new Calculadora ( {'x':2, 'y':3} );

//console . log (Calculadora .distancia ( p1 , p2 ) ) ;