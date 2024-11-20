let shirtLocked = false;
let pantLocked = false;
let shoeLocked = false;

const images = [
  "shirt1.png",
  "shirt2.png",
  "shirt3.png",
  "shirt4.png",
  "shirt5.png"
];
let i = 0;
function cycleShirt() {
  if (i < images.length) {
    const imageUrl = images[i];
    document.getElementById("randomImage").src = imageUrl;
    i++;
  }
  else {
    i = 0;
  }
}
document.getElementById("randomImage").addEventListener("click", cycleShirt);

function randomImage() {
  if (!shirtLocked) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImageUrl = images[randomIndex];
      document.getElementById("randomImage").src = randomImageUrl;
  }
}

const pants = [
  "pant1.png",
  "pant2.png",
  "pant3.png",
  "pant4.png",
];

function randomPants() {
  if (!pantLocked) {
      const randomIndex = Math.floor(Math.random() * pants.length);
      const randomImageUrl = pants[randomIndex];
      document.getElementById("randomPants").src = randomImageUrl;
  }
}

let x = 0;
function cyclePants() {
  if (x < pants.length) {
    const pantsUrl = pants[x];
    document.getElementById("randomPants").src = pantsUrl;
    x++;
  }
  else {
    x = 0;
  }
}
document.getElementById("randomPants").addEventListener("click", cyclePants);

const shoes = [
  "shoe1.png",
  "shoe2.png",
  "shoe3.png",
  "shoe4.png",
  "shoe5.png"
];

function randomShoes() {
  if (!shoeLocked) {
      const randomIndex = Math.floor(Math.random() * shoes.length);
      const randomImageUrl = shoes[randomIndex];
      document.getElementById("randomShoes").src = randomImageUrl;
  }
}

let y = 0;
function cycleShoes() {
  if (y < shoes.length) {
    const shoesUrl = shoes[y];
    document.getElementById("randomShoes").src = shoesUrl;
    y++;
  }
  else {
    y = 0;
  }
}
document.getElementById("randomShoes").addEventListener("click", cycleShoes);

function randomAll() {
  randomShoes();
  randomPants();
  randomImage();
}

function toggleShirtLock() {
  shirtLocked = !shirtLocked;
}

function togglePantLock() {
  pantLocked = !pantLocked;
}

function toggleShoeLock() {
  shoeLocked = !shoeLocked;
}

function togglePopup() {
  var popup = document.getElementById("myPopup");
  var overlay = document.querySelector(".overlay");
  popup.classList.toggle("show");
  overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
}
let f = 0;
function saveInput() {
  if (f == 0) {
    var inputValue = document.getElementById('fit_name').value;
    localStorage.setItem('savedInput', inputValue);

    var currentImageUrl = document.getElementById('randomImage').src;
    localStorage.setItem('savedImageUrl', currentImageUrl);
        
    var currentPantUrl = document.getElementById('randomPants').src;
    localStorage.setItem('savedPantUrl', currentPantUrl);
        
    var currentShoeUrl = document.getElementById('randomShoes').src;
    localStorage.setItem('savedShoeUrl', currentShoeUrl);
  }
  if (f == 1) {
    var inputValue2 = document.getElementById('fit_name').value;
    localStorage.setItem('savedInput2', inputValue2);

    var currentImageUrl2 = document.getElementById('randomImage').src;
    localStorage.setItem('savedImageUrl2', currentImageUrl2);
        
    var currentPantUrl2 = document.getElementById('randomPants').src;
    localStorage.setItem('savedPantUrl2', currentPantUrl2);
        
    var currentShoeUrl2 = document.getElementById('randomShoes').src;
    localStorage.setItem('savedShoeUrl2', currentShoeUrl2);
  }
  togglePopup();
  f++;
}

