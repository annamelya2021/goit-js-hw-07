import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(({ original, preview, description }) => {
        return `
<a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
</a>
`;
    })
    .join('');
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
    spinner: false, //читала що бажано не виключати цей парамент, щоб коричтувач бачив що йде загруза
    //але мені подобається
    captionsData: 'alt',
    // позиція тексту по замовчуванню ботом, я змінила на топ
    captionPosition: 'top',
    showCounter: false,
    captionDelay: 250,
    navText: '←→',
});
