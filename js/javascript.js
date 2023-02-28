let enlaces = document.querySelectorAll('.links a'); /* Selecciono todos los 'a' dentro de la clase .links*/

enlaces.forEach(enlace => {  /* Recorro todos los enlaces */
    enlace.addEventListener('click', function() { /* Le agrego una funcion a cada uno */
        enlaces.forEach(enlace => {
            if(document.querySelector(enlace.hash).style.display != 'none') /* Si alguna tarjeta(div) ya esta visible la oculto para que siempre se vea 1 sola*/
                document.querySelector(enlace.hash).style.display = 'none';
        })
        document.querySelector(enlace.hash).style.display = 'block'; /* Selecciono el div con id = al hash del enlace clickeado y lo pongo visible*/
    })
});