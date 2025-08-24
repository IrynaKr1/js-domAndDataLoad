const dogImageElement = document.querySelector('.dogImage');
const dogBtnElement = document.querySelector('.dogImgBtn');
const catInfoElement = document.querySelector('.catInfo');
const catBtnElement = document.querySelector('.catInfoBtn');

function updateDogImg() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      dogImageElement.src = data.message;
    })
    .catch((e) => console.error('Something went wrong', e));
}

function updateCatInfo() {
  fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    .then((data) => {
      catInfoElement.textContent = data.fact;
    })
    .catch((e) => console.error('Something went wrong', e));
}

dogBtnElement.addEventListener('click', updateDogImg);
catBtnElement.addEventListener('click', updateCatInfo);
