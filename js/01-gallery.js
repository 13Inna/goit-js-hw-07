import { galleryItems } from './gallery-items.js';
let galleryEl = document.querySelector('.gallery');
let getElements = document.querySelector('gallery__item');
const bigPicture = galleryItems.map(
    img => `<div class="gallery__item">
    <a class="gallery__link" href=${img.original}>
                    <img
                    class="gallery__image"
                    src=${img.preview}
                    data-source=${img.original}
                    alt=${img.description}
                    />
                </a>
    </div>`,
)
    .join('');
galleryEl.insertAdjacentHTML('beforeend', bigPicture);

for (let index = 0; index < getElements.length; index++) {
    getElements[i].addEventListener('click',
        function (event) {
            event.preventDefault();
            return false;
        });

    const currentImg = getElements[i].dataset.sourse;
    getElements[i].onclick = () => {
        const libraryImg = basicLightbox.create(`<img width="1280" height="720" src=${currentImg}>`);
        libraryImg.show();
        document.addEventListener('keydown', closeModal);
    
        function closeModal(e) {
            if (e.code === 'Escape') libraryImg.close();
        };
    };
};