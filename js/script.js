const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch('https://picsum.photos/v2/list?limit=100');
    const images = await res.json();

    selectRandomImage(images);
}

// STEP 6 OF 7: REVEAL A RANDOM IMAGE

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex]; // picking random element in an array

    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author; //unsure
    img.src = imageAddress; //unsure of syntax
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function () {
    getImage();
})