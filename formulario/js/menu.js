/**
 * Autor: Camilo Figueroa
 * Sencillo ejemplo de menú con elementos separados.
 */




window.onload = function()
{   
    alinear_objetos( 1 );
}

/**
 * Esta función se encarga de alinear los objetos o los divs de los menús.
 * @param       numero          de acuerdo al parámetro, se decide si está ajustándolos inicialmente o si estádesordenándolos.
 */
function alinear_objetos( des )
{
    var i = 0, objeto = "", centro_x = 0, centro_y = 0;
    
    console.log( "Esto funciona" );
    //console.log( window.innerWidth + " " + window.innerHeight );
    centro_x = window.innerWidth / 2;
    centro_y =  window.innerHeight / 2;
    
    for( i = 1; i <= 5; i ++ )
    {
        objeto = document.getElementById( "menu" + i );
        
        //El div y la imágen de cada menú miden 50 pixeles de alto y ancho.
        
        switch( des )
        {
            case 1:
                        //console.log( "Ajustamos la posición inicial." );
                        TweenMax.to( objeto, 0, { left: centro_x - 50, top: centro_y - 50, visibility: "hidden" } );
            break;
            
            case 2:
                        TweenMax.to( objeto, Math.random() * 2, { left: centro_x - 50 + generar_aleatorio( 20, 150 ), top: centro_y - 50 + generar_aleatorio( 20, 150 ), visibility: "visible"  }  );
            break;       
        }
        
        //console.log( generar_aleatorio( 2, 10 ) );
         
    }
}

/**
 * Esta función se encarga de calcular una posición aleatoria arriba, abajo, derecha o a la izquierda de una determinada posición inicial.
 * @param       numero          posición inicial x, seria left en caso de css 
 * @param       numero          posición incial y, sería top en caso de css
 */
function calcular_posicion_aleatoria_x_y( pos_x, pos_y )
{
    console.log( "Ok" );
}

/**
 * Genera un número aleatorio entre inicio y fin
 * @param       numero          número inicial del intervalo
 * @param       numero          número final del intervalo
 * @returns     numero          numero aleatorio entre valor inicial y final, positivo o negativo.
 */
function generar_aleatorio( inicio, fin )
{
    var signo = Math.random() <= 0.5 ? -1: 1; //El signo lo determina aleatoriamente.
    
    return Math.floor(( Math.random() * fin ) + inicio ) * signo; 
}

/**
 * Esta función se encarga de colocar un mensaje en un div que se identifique con un id
 * @param       texto           identificador del div de mensajes
 * @param       texto           mensaje que se va a colocar en el div de mensajes
 */
function apoyar_mouse_over( identificador, mensaje )
{
    var contenedor = document.getElementById( identificador );
    
    contenedor.innerHTML = mensaje;
}