import { galleryItems } from "./gallery-items.js";
// Change code below this line
import { refs } from "./refs.js";

const markupItemsGallery = ({ original, preview, description }) => {
  return `<li class="gallery-item">
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
};
const createItemsGallaryMarkup = (img) => {
  return img.map(markupItemsGallery).join("");
};

refs.gelleryEl.insertAdjacentHTML(
  "beforeend",
  createItemsGallaryMarkup(galleryItems)
);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.dir(lightbox);
