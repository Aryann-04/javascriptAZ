let images = [
   "car1.avif", 
    "car2.jpg",
    "car3.webp" 
     
     
];

let firstImage = 0;
let lastImage = images.length - 1;
let cnt = 0;

function slide(){
    let imageElement = document.querySelector("#image");
    imageElement.src = images[cnt];
    cnt++;
    if(cnt > lastImage) {
        cnt = firstImage;
    }
}

setInterval(()=>{
    slide();
},2000);