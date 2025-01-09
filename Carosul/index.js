let image = document.querySelector("#image");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

let images = [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2jkzA9ogW7AFzgISqiiBb6kE9wyWeNGScrIhkAbnjfsUUAfQaX2J7yJI-XXfYqT683nVYiLAB8FK4gLpMXKJhQCM3BftrVcHEOQBaDChvTPVK-hx6iDA-kJjx1ASGerPdRSwj-8q3phKUzvK4m8yNhBHoEfbF7TJuI4ISNeAwmtV1jg1K86q8y9BIXLmU/s1600-rw/car-pc-desktop-4k.webp',
    'https://wallpapercave.com/wp/wp7378909.jpg',
    'https://wallpapers.com/images/hd/4k-ultra-hd-mustang-silver-titanium-6cxxvwyo01hl3jbh.jpg'
];

let index = 0;
let last = images.length - 1;

// Initialize the image
image.setAttribute("src", images[index]);

function next() {
    if (index === last) {
        index = 0;
    } else {
        index += 1;
    }
    image.setAttribute("src", images[index]);
}

function previous() {
    if (index === 0) {
        index = last;
    } else {
        index -= 1;
    }
    image.setAttribute("src", images[index]);
}

// Add event listeners to the arrows
left.addEventListener("click", previous);
right.addEventListener("click", next);

let id = setInterval(()=>{next()}, 3000)

setTimeout(()=>{clearInterval(id)}, 10000)

