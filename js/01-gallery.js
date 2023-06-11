import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  function createGalleryItem(item) {
    // debugger;
    const galleryItem = `<li class="gallery__item">
                            <a class="gallery__link" href="${item.original}">
                              <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                            </a>
                        </li>`

    return galleryItem;
  }

  function renderGallery() {
    const items = galleryItems.map(item => createGalleryItem(item));
    items.forEach(x => gallery.innerHTML += x);
  }

  renderGallery();

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
  });
});