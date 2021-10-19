import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markupItemsGallary = ({ original, preview, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const makeItemsGallery = (img) => img.map(markupItemsGallary).join("");

const listGalleryEl = document.querySelector(".gallery");
listGalleryEl.insertAdjacentHTML("beforeend", makeItemsGallery(galleryItems));
