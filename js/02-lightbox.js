import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link lightbox" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkUp(galleryItems));

let simple = new SimpleLightbox('.gallery a', {
  /* options */
  opacity: 0.65,
  navText: ['◀', '▶'],
  captionsData: 'alt',
  captionDelay: 250,
});
