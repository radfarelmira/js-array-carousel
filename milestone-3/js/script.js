// MILESTONE 3
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa 
// visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno comparire
//  relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Prendiamo il big container e popoliamo con imaggini, titoli e text del array items, 
//array title, array text
const bigImagesContainer = document.querySelector('.big-images-container');
console.log(bigImagesContainer)

// Per ogni elemento di items array, title array e text array polpliamo i big images container
for ( let i = 0; i < items.length; i++){
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];
    
    const newImageDiv =`
    <div class="single-image">
        <img src="${thisPath}" alt="Img ${i}">

        <div class="single-image-text">
            <h2>${thisTitle}</h2>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    bigImagesContainer.innerHTML += newImageDiv

}

// Diamo la classe active ad un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
allImages[activeImage].classList.add('active');

