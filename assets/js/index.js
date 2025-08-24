const dogImageElement = document.querySelector('.dogImage');
const dogBtnElement = document.querySelector('.dogImgBtn');

function updateDogImg() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      dogImageElement.src = data.message;
    })
    .catch((e) => console.error('Something went wrong', e));
}

dogBtnElement.addEventListener('click', updateDogImg);
