

/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} 
 */

export const crearCartaHtml = (carta) =>{


    if(! carta) throw  new console.error('Necesitamos la carta');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

return imgCarta;

}
















