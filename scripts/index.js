const editProfileButton = document.querySelector('.profile__edit-button'); // кнопка, при нажатии которой отрывется попап
editProfileButton.addEventListener('click', openPopup); //обработка события открытия при клик на кнопку

const editPopup = document.querySelector('.popup'); //находим попап
function openPopup() {
    editPopup.classList.add('popup_opened'); //открытие попап
    nameInput.value = titleProfile.textContent; //присваиваем значения с текстого контента форме
    jobInput.value = subtitleProfile.textContent;
};

const closePopupButton = document.querySelector('.popup__close-button'); // крестик (закрытие формы)
const nameInput = document.querySelector('.popup__field_name_input'); // поле формы в DOM с именем
const jobInput = document.querySelector('.popup__field_job_input');  //  поле формы в DOM с профессией
const titleProfile = document.querySelector('.profile__title');        // поле тестовой части страницы  с именем
const subtitleProfile = document.querySelector('.profile__subtitle');  // поле тестовой части страницы с профессией


closePopupButton.addEventListener('click', closePopup); //обраотка события закрытия 
function closePopup() {
    editPopup.classList.remove('popup_opened');  //закрытие попап при нажатии на крестик
};


const formElement = document.querySelector('.popup__container'); // Находим форму в DOM

// Обработчик «отправки» формы, пока без отправления
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    titleProfile.textContent = nameInput.value; //присваиваем техконтенту страниы значения с формы (input)
    subtitleProfile.textContent = jobInput.value;
    closePopup();
};

formElement.addEventListener('submit', handleFormSubmit); //Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
