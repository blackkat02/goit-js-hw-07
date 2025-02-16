const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// const list = document.querySelector(".gallery");

// // const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = images
//   .map((image) => `<li class="list-item new">${image.url}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");


// const createGalleryItem = (item) => `<li class="gallery-item">
//   <a href="#">
//     <img src="${item.url}" alt="${item.alt}" width="${item.width}" height="${item.height}">
//   </a>
// </li>`;

// const pictures = [
//   {
//     width: 700,
//     height: 460,
//     url: "https://picsum.photos/id/0/700/460",
//     alt: "laptop",
//   },
//   {
//     width: 700,
//     height: 460,
//     url: "https://picsum.photos/id/1/700/460",
//     alt: "developer",
//   },
//   {
//     width: 700,
//     height: 460,
//     url: "https://picsum.photos/id/10/700/460",
//     alt: "forest",
//   },
//   {
//     width: 700,
//     height: 460,
//     url: "https://picsum.photos/id/100/700/460",
//     alt: "beach",
//   },
//   {
//     width: 700,
//     height: 460,
//     url: "https://picsum.photos/id/1000/700/460",
//     alt: "mountain",
//   },
// ];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

const createGalleryItem = (item) => `<li class="gallery-item">
  <a href="#">
    <img src="${item.url}" alt="${item.alt}" width="${item.width}" height="${item.height}">
  </a>
</li>`;

const galleryMarkup = images.map(createGalleryItem).join("");

console.log(galleryMarkup);

const galleryEl = document.querySelector(".gallery");

// galleryEl.innerHTML = galleryMarkup; //? використовуємо тоді, коли треба замінити попередній контент на новий

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);