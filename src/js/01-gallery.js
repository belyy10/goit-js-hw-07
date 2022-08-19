import { galleryItems } from './gallery-items.js';
// Change code below this line
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

    const instance = basicLightbox.create(
    `
    <img src='${resourceUrl}'>
    `,);
    instance.show();
    window.addEventListener("keydown",closeModalOnEsc);
    function closeModalOnEsc(e) {
        if(e.code==="Escape"){
            instance.close();
            window.removeEventListener("keydown",closeModalOnEsc)
        }
    }
    const visible = basicLightbox.visible() 
    console.log(visible)
}



