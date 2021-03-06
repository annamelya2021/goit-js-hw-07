import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')


const galleryMarkup = galleryItems.map(galleryItem => {
    return `
<a class="gallery__item" href="${galleryItem.original}">
    <img
    class="gallery__image"
    src="${galleryItem.preview}"
    alt="${galleryItem.description}"
    />
</a>
`

})
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup.join(""))

new SimpleLightbox('.gallery a', { /* options */
    captionsData: "alt",
    captionDelay: 250,
    captionPosition : 'bottom',
});