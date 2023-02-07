interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles 
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// Manera 1 de destructurar un obj.
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor:nuevaConstAutor } = detalles;

//Manera 2 
// const { volumen, segundo, cancion, detalles{autor} } = reproductor;

//Si queremos darle otro nombre a esa propiedad seria:
// const { volumen, segundo, cancion, detalles{autor: nuevaConstAutor} } = reproductor;


// console.log('El volumen actual de: ', volumen );
// console.log('El segundo actual de: ', segundo );
// console.log('La canción actual de: ', cancion );
// console.log('El autor es: ', nuevaConstAutor );