import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

const refs = {
  gelleryEl: document.querySelector(".gallery"),
};

const createItemsGallaryMarkup = (img) =>
  img
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
           <a class="gallery__link" href="${original}">
             <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
             />
           </a>
         </div>`
    )
    .join("");

refs.gelleryEl.insertAdjacentHTML(
  "beforeend",
  createItemsGallaryMarkup(galleryItems)
);

refs.gelleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  const currentImg = e.target;
  const isGalleryImg = currentImg.classList.contains("gallery__image");
  if (!isGalleryImg) {
    return;
  }
  const currentUrl = currentImg.dataset.source;
  onOpenModalImage(currentUrl);
});

const onOpenModalImage = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
  instance.show();
  console.dir(instance.element);
};
