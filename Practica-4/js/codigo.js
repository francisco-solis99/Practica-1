// probar
console.log("Todo bien en Javascript");
alert("Hola Bienvenido, esta es una calculadora simple espero sea de tu ayuda");


// Funcion para poner solo numeros
function justNumeros(n) {
    key = n.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros="0123456789";
    especiales = "8-37-39-46";
    teclas_especiales = false;
    for (var i in especiales) {
        if (key==especiales[i]) {
            teclas_especiales = true;
        }
    }

    if (numeros.indexOf(teclado) == -1 && !teclas_especiales){
        return false;
    }
}


function ponerNumeros(num) {
    var anterior = document.formulario.resultados.value;
    document.getElementById("result").value = anterior + num;     
}


function eliminarTodo() {
    document.formulario.resultados.value = "";
}

function comprobar(num) {
    var n = document.formulario.resultados.value;
    if (n == "") {
        document.formulario.resultados.value = "";

    }
    else {
        var n = document.formulario.resultados.value;
        document.getElementById("result").value = n + num;
        number = document.formulario.resultados.value;

        record = 0;
        igual = 1; 
        var letraRecord;
        var b=0;
        var letra = "";

        for (a=1; a<number.length; a++){
            if (number.charAt(a)=="+" || number.charAt(a) == "-" || number.charAt(a) == "*" || number.charAt(a) == "/" || number.charAt(a) == ".") {
                igual = igual + 1;
                letra = number.charAt(a);
            }
            else {
                if (igual>record) {
                        record = igual;
                        letraRecord = letra;}    
                    igual=1;
            }
            var b=a;
        }

        if (igual>record) {
            record = igual;
            letraRecord = letra;
        }
        if (record > 2) {
            var n = number;
            var nuevo_valor = n.substring(0, n.length-1);
            document.getElementById("result").value = nuevo_valor;
            record = 0;
            b=0;
            igual=1;
            letra="";
            letraRecord="";
        }

    }
}

function calcular() {
    var resultado = eval(document.formulario.resultados.value);
    if (resultado == "Infinity") {
        document.formulario.resultados.value ="Es indefinido";
    }else {
        document.formulario.resultados.value = resultado;
    }
}