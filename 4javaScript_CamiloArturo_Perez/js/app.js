

class Calculadora {
    constructor ( conf ){
       /* this.x = conf.x;
        this.y = conf.y;

        console.log(conf);

        */

        this.adicionarPropiedades( )  ;
        this.eventoClic( )  ;




    }

    adicionarPropiedades(){

        var tipo = true ? "hidden" : "text";

        var input = document.createElement("input");
        input.type = tipo;
        input.name = "operSeleccionado";
        input.id = "operSeleccionado";
        document.getElementById('calculadoraFondo').append(input);

        var input2 = document.createElement("input");
        input2.type = tipo;
        input2.name = "displayAnterior";
        input2.id = "displayAnterior";
        input2.value = "NE";
        document.getElementById('calculadoraFondo').append(input2);
    }

    eventoClic (){

        var photo = document.getElementsByClassName( "tecla" );

        var ide;

        for (var i=0; i < photo.length; i++) {
            photo[i].onmouseover = function(){
                ide = this.id;
                document.getElementById(ide).style="cursor:pointer;";
            }

            photo[i].onmousedown = function(){
                ide = this.id;
                Calculadora.adicionarTeclaADisplay(ide);
                document.getElementById(ide).style="cursor:pointer;width:70px;";
            }
            photo[i].onmouseup = function(){
                ide = this.id;
                document.getElementById(ide).style="cursor:pointer;";
            }
        };
    }

    static adicionarTeclaADisplay(tecla){

        var display = document.getElementById("display").textContent;

        var numeros = ["1", "2", "3", "4", "5",  "6",  "7",  "8",  "9",  "0", ];
        var operadores = ["mas", "menos", "por", "dividido","igual"];

        if(tecla == 'on') {
            document.getElementById("display").innerHTML = '0';
            document.getElementById("displayAnterior").value = 'NE';
            document.getElementById("operSeleccionado").value = '';
        }else if(numeros.indexOf(tecla) != -1){
            document.getElementById("display").innerHTML = display=='0' ? tecla : display+tecla;
        }else if(operadores.indexOf(tecla) != -1){

            var resultado = Calculadora.operar(document.getElementById("operSeleccionado").value, document.getElementById("displayAnterior").value, display)

            document.getElementById("display").innerHTML = tecla == 'igual' ? resultado : '0';
            document.getElementById("displayAnterior").value = tecla == 'igual' ? 'NE' :resultado;
            document.getElementById("operSeleccionado").value = tecla == 'igual' ? '' : tecla;


        }

        //console.log(tecla);

    }

    static operar(oper, valorAnterior, valorActual){

        var resultado = 0;
        switch(oper) {
            case "mas":
                resultado = valorAnterior=='NE' ? valorActual : (parseFloat(valorAnterior) + parseFloat(valorActual));
                break;
            case "menos":
                resultado = valorAnterior=='NE' ? valorActual : (parseFloat(valorAnterior) - parseFloat(valorActual));
                break;
            case "por":
                resultado = valorAnterior=='NE' ? valorActual : (parseFloat(valorAnterior) * parseFloat(valorActual));
                break;
            case "dividido":
                resultado = valorAnterior=='NE' ? valorActual : (parseFloat(valorAnterior) / parseFloat(valorActual));
                break;
            default:
                resultado = valorActual;
        }
        console.log(oper+'  .... ' +valorAnterior +' '+valorActual+ ' === '+resultado);
        return resultado;
    }


}



const p1 = new Calculadora ( {'x':2, 'y':3} );

//console . log (Calculadora .distancia ( p1 , p2 ) ) ;