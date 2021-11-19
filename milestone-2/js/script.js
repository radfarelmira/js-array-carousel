// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e i testi delle immagini 
// dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template 
// literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente 
// attraverso JavaScript.

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
const thumbsContainer = document.querySelector('.thumbs')
console.log(thumbsContainer)

// Per ogni elemento di items array, title array e text array polpliamo i big images container
for ( let i = 0; i < items.length; i++){
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];
    
    const newImageDiv =`
    <div class="single-image">
        <img src="${thisPath}" alt="${thisTitle}">

        <div class="single-image-text">
            <h2>${thisTitle}</h2>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    bigImagesContainer.innerHTML += newImageDiv

    // Popoliamo thumbs a destra
    const newThumbDiv = `
    <div class="single-thumb">
        <img src="${thisPath}" alt="${thisTitle}">
    </div>
    `;

    thumbsContainer.innerHTML += newThumbDiv
}

// Diamo la classe active ad un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
const thumbImages = document.getElementsByClassName('single-thumb');
allImages[activeImage].classList.add('active');
thumbImages[activeImage].classList.add('active');


