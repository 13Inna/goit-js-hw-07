import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
let galleryEl = document.querySelector('.gallery')

const imgEl = galleryItems
    .map(
        img => `<a class="gallery__item" href="${img.original}">
        <img class="gallery__image" src=${img.preview} alt=${img.description} />
            </a>`, 
)
    .join('')

galleryEl.insertAdjacentHTML('beforeend', imgEl)

for (let i = 0; i < document.getElementsByClassName('gallery__item').length; i++)
{
    document.getElementsByClassName('gallery__item')[i].addEventListener('click', function (e)
    {
        e.preventDefault()
        return false
    }
    )
}
const lightbox = new SimpleLightbox('.gallery a',
    {
        captionData: 'alt',
        animationSpeed: 255
}
)
