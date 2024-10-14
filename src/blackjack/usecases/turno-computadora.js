
import { crearCartaHtml } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {Number} puntosMinimos puntos minimo que la PC neceista para ganar 
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora HTML para mostrar la carta
 * @param {Array<String>} deck 
 */
// turno de la computadora
export  const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck =[], ) => {
        if(! puntosMinimos) throw Error('Puntos minimos son necesario');
        if(! puntosHTML) throw Error('puntosHTML son necesario');
     let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}



