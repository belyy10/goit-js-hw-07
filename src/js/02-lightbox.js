import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox"; 
import 'simplelightbox/dist/simple-lightbox.min.css'
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item"> 
        <a class="gallery__link" href="${original}">
            <img class=gallery__image src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </div>
        `;
    })
        .join('');
}
gallery.addEventListener('click', onGalleryContainer);

function onGalleryContainer (e) {
    e.preventDefault()
    const isGallerySwatchEl = e.target.classList.contains('gallery__image');
    if(!isGallerySwatchEl) {
        return
    }
    const resourceUrl = e.target.dataset.source;
    console.log(resourceUrl)
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250'
});