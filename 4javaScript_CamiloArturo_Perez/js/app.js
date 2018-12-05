

class Calculadora {
    constructor ( conf ){

        var usuario = "Diseñado por "+ conf.nombre + ' ' + conf.apellido;
        console.log(usuario);

        this.adicionarPropiedades( )  ;
        this.eventoClic( )  ;

        setTimeout(function() {
            document.getElementById("mi_nota").value =usuario;
        }, 1000);

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


        var notas = document.getElementsByClassName( "nota-input" );
        for (var i=0; i < notas.length; i++) {
            notas[i].id='mi_nota';
        }
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
        }else if(tecla == 'sign' && display!='0'){
            var verificacion = display.indexOf("-");
            document.getElementById("display").innerHTML = verificacion=='-1' && display.length <9 ? ('-'+display) : display.replace("-", "");
        }else if(tecla == 'punto' ){
            var verificacion = display.indexOf(".");
            document.getElementById("display").innerHTML = verificacion=='-1' && display.length <9 ? (display+'.') : display;
        }else if(tecla == 'raiz'){
            var verificacion = display.indexOf("-");
            var raiz = verificacion=='-1' ? Math.sqrt(display) : 0;
            document.getElementById("mi_nota").value = "raiz( "+display+" ) = "+ raiz;
            document.getElementById("display").innerHTML = raiz.toString().slice(0, 10);
            document.getElementById("operSeleccionado").value = '';
        }else if(numeros.indexOf(tecla) != -1){
            document.getElementById("display").innerHTML = display=='0' || document.getElementById("operSeleccionado").value=='igual' ? tecla : (display.length <9 ? display+tecla : display);
            if(document.getElementById("operSeleccionado").value=='igual' )
                document.getElementById("operSeleccionado").value = '';

        }else if(operadores.indexOf(tecla) != -1){

            var resultado = Calculadora.operar(document.getElementById("operSeleccionado").value, document.getElementById("displayAnterior").value, display)

            document.getElementById("display").innerHTML = tecla == 'igual' ? resultado : '0';
            document.getElementById("displayAnterior").value = tecla == 'igual' ? 'NE' :resultado;
            document.getElementById("operSeleccionado").value = tecla;


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
                break;
        }

        document.getElementById("mi_nota").value = valorAnterior +' '+oper+' '+valorActual+ ' === '+resultado;

        var final = resultado.toString().slice(0, 10);

        return final;
    }


}



const p1 = new Calculadora ( {'nombre':'Camilo', 'apellido':'Perez'} );
