const pantallaValorAnterior = document.getElementById('valorAnterior');
const pantallaValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperaciones = document.querySelectorAll('.operaciones');

const display = new Display(pantallaValorAnterior, pantallaValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperaciones.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});