function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmDolar = valorEmRealNumerico / 5;
    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = "O resultado em dolares é US$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
}