const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadAndDisplayImages(imageUrls) {
  const promises = imageUrls.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      img.src = image.url;
    });
  });

  Promise.all(promises)
    .then(loadedImages => {
      loadedImages.forEach(img => {
        output.appendChild(img);
      });
    })
    .catch(error => {
      console.error('Error loading images:', error);
    });
}

btn.addEventListener('click', () => {
  downloadAndDisplayImages(images);
});