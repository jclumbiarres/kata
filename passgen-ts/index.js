// Ejercicio de ejemplo para la kata de licencia de IntelliJ.
// Tiempo de diseño y desarrollo estimado: 5 minutos.
// generarPass genera una contraseña aleatoria de la longitud especificada.
var generarPass = function (longitud) {
    // chars contiene todos los caracteres que se pueden usar en la contraseña.
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>';
    // pass es la contraseña que se va a generar.
    var pass = '';
    // Se genera un caracter aleatorio de chars tantas veces como longitud.
    for (var i = 0; i < longitud; i++) {
        // Se genera un número aleatorio entre 0 y chars.length.
        var randomIndex = Math.floor(Math.random() * chars.length);
        // Se añade el caracter de chars en la posición randomIndex a la contraseña.
        pass += chars[randomIndex];
    }
    // Se devuelve la contraseña.
    return pass;
};
// Se obtiene la longitud de la contraseña de los argumentos de la línea de comandos.
var argv = process.argv.slice(2);
// Si no se ha especificado la longitud de la contraseña o se pone algo distinto a un número, se muestra un mensaje de error.
if (isNaN(Number(argv))) {
    console.log('Inserta un número válido para la longitud de la contraseña.');
    process.exit(1);
}
else {
    // Se muestra la contraseña generada.
    console.log(generarPass(Number(argv)));
}
