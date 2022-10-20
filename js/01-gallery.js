import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const gallery = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
 /></a>`;
    })
    .join('');

galleryRef.insertAdjacentHTML('beforeend', gallery);

const instance = basicLightbox.create(
    `
    <img class ='modal__img' src= "" >
`,
    {
        onShow: () => {
            window.addEventListener('keydown', onEscClick);
        },
    },
    {
        onClose: () => {
            window.removeEventListener('keydown', onEscClick);
        },
    },
);

function onPictureClick(e) {
    e.preventDefault();
    const SRC = e.target.dataset.source;
    const isOpen = e.target.classList.contains('gallery__image');
    if (!isOpen) {
        return;
    }

    instance.element().querySelector('.modal__img').src = `${SRC}`;

    instance.show();
}

galleryRef.addEventListener('click', onPictureClick);

function onEscClick(e) {
    if (e.key === 'Escape') {
        instance.close();
        return;
    }
}

//    const OnPictureClick = event => {
//        event.preventDefault();
//        if (!event.target.classList.contains('gallery__image')) {
//            return;
//        }

//        const instance = basicLightbox.create(`
//     <img src= "${event.target.dataset.source}" >
// `);

//        instance.show();
//    };
//    galleryRef.addEventListener('click', OnPictureClick);
