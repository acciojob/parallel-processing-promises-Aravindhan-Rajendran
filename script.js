//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
const promise1= new Promise(function(resolve,reject){
	resolve(images[0]);
	reject(console.log(failed()));
});
const promise2= new Promise(function(resolve,reject){
	resolve(images[1]);
	reject(console.log(failed()));
});
const promise3= new Promise(function(resolve,reject){
	resolve(images[2]);
	reject(console.log(failed()));
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
function failed(){
	return `Failed to load image's URL:${image.url}`;
}