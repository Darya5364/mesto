const editProfileButton = document.querySelector('.profile__edit-button'); // КНОПКА открытия ФОРМЫ 1
const editPopup = document.querySelector('.popup'); // попап ФОРМЫ 1
const nameInput = document.querySelector('.popup__field_input_name'); // поле формы в DOM с именем
const jobInput = document.querySelector('.popup__field_input_job');  //  поле формы в DOM с профессией
const titleProfile = document.querySelector('.profile__title');        // поле тестовой части страницы  с именем
const subtitleProfile = document.querySelector('.profile__subtitle');  // поле тестовой части страницы с профессией

editProfileButton.addEventListener('click', function(){ //открытие ФОРМЫ 1 ПОПАП по клику
    openPopup(editPopup);
    nameInput.value = titleProfile.textContent; //присваиваем значения с текстого контента форме
    jobInput.value = subtitleProfile.textContent;
}); 

const closePopupButton = document.querySelector('.popup__close-button'); // КНОПКА закрытия ФОРМЫ 1 (крестик)
closePopupButton.addEventListener('click', function(){ // закрытие ФОРМЫ 1 ПОПАП по клику
    closePopup(editPopup);
}); 

const formElement = document.querySelector('.popup__form'); // Находим форму в DOM

// Обработчик «отправки» ФОРМЫ 1, пока без отправления
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    titleProfile.textContent = nameInput.value; //присваиваем техконтенту страницы значения с формы (input)
    subtitleProfile.textContent = jobInput.value;
    closePopup(editPopup);
};

formElement.addEventListener('submit', handleFormSubmit); //выхов сохранения ФОРМЫ 1


// ОТКРЫТИЕ ПОПАП функция
function openPopup(popup) {
    popup.classList.add('popup_opened'); 
};

// ЗАКРЫТИЕ ПОПАП функция
function closePopup(popup) {
    popup.classList.remove('popup_opened');  //закрытие попап
};

const addProfileButton = document.querySelector('.profile__add-button'); // КНОПКА открытия ФОРМЫ 2
const addPopup = document.querySelector('.popup_add');                     // попап ФОРМЫ 2
addProfileButton.addEventListener('click', function (){                   //открытие ФОРМЫ 2 ПОПАП по клику
    openPopup(addPopup);
}); 

const closePopupButtonAdd = document.querySelector('.popup__close-button_add'); // КНОПКА закрытия ФОРМЫ 1 (крестик)
closePopupButtonAdd.addEventListener('click', function(){                       //закрытие ФОРМЫ 2 ПОПАП по клику
    closePopup(addPopup);        
    mestoInput.value = '';
    linkInput.value = '';
});


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const elementsList = document.querySelector('.elements');
  const elementTemplate = document.querySelector('.element__template').content;
  
  // СОЗДАНИЕ карточного массива
  function addCard(el) {
    const cardElement = elementTemplate.cloneNode(true);
    
    const elementPhoto = cardElement.querySelector('.element__photo');
    const elementText = cardElement.querySelector('.element__text');
    elementPhoto.setAttribute('src', el.link);
    elementPhoto.setAttribute('alt', el.name);
    elementText.textContent = el.name;

    const elementLike = cardElement.querySelector('.element__like');
    elementLike.addEventListener('click', clickLike);                          //вызов ЛАЙКА карточки
    
    const elementDeleteIcon = cardElement.querySelector('.element__delete');
    elementDeleteIcon.addEventListener ('click', deleteCard);                  //вызов УДАЛЕНИЯ карточки

    elementPhoto.addEventListener ('click', zoomPhoto);                        //вызов УВЕЛИЧЕНИЯ карточки

    elementsList.prepend(cardElement);
    
    return cardElement;
  };
  
  initialCards.forEach (addCard);

// ЛАЙК КАРТОЧКИ функция
function clickLike(evt) {
    evt.target.classList.toggle('element__like_active'); //функция лайка карточки
};

// УДАЛЕНИЕ КАРТОЧКИ функция
function deleteCard(evt) {
   const icon = evt.target.closest('.element'); //функция удаления карточки
   icon.remove();
};

const zoomPopup = document.querySelector('.popup_zoom');
const photoPopup = document.querySelector('.popup__photo');
const namePhotoPopup = document.querySelector('.popup__photo-name');

// УВЕЛИЧЕНИЕ ФОТО функция
function zoomPhoto(evt) {
openPopup(zoomPopup);
 namePhotoPopup.textContent =  evt.target.alt;
 photoPopup.src =  evt.target.src;
};
// Закрытие увеличенного фото
const closePopupButtonPhoto = document.querySelector('.popup__close-button_photo');
closePopupButtonPhoto.addEventListener('click', function(){
  closePopup(zoomPopup);
});


const mestoInput = document.querySelector('.popup__field_input_mesto'); // поле формы в DOM с местом
const linkInput = document.querySelector('.popup__field_input_link'); // поле формы в DOM с сылкой
const formElementCard = document.querySelector('.popup__form_card'); // Находим форму в DOM

// ДОБАВЛЕНИЕ КАРТОЧКИ
function handleFormSubmitAdd (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    const element = {link: linkInput.value, name: mestoInput.value};

    elementsList.prepend(addCard(element));
    closePopup(addPopup);
    mestoInput.value = '';
    linkInput.value = '';
};

formElementCard.addEventListener('submit', handleFormSubmitAdd); //Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»