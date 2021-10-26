import { galleryItems } from "./gallery-items.js";
// Change code below this line
import { refs } from "./refs.js";
console.log(refs);

const markupItemsGallery = ({ original, preview, description }) => {
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

const createItemsGallaryMarkup = (img) => img.map(markupItemsGallery).join("");

refs.gelleryEl.insertAdjacentHTML(
  "beforeend",
  createItemsGallaryMarkup(galleryItems)
);

const onOpenModalImage = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
  instance.show();
};
const onGalleryElClick = (e) => {
  e.preventDefault();
  const currentImg = e.target;
  const isGalleryImg = currentImg.classList.contains("gallery__image");
  if (!isGalleryImg) {
    return;
  }

  onOpenModalImage(currentImg.dataset.source);
};

refs.gelleryEl.addEventListener("click", onGalleryElClick);

export { createItemsGallaryMarkup };
