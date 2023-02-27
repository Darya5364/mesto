const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', openPopup);

const editPopup = document.querySelector('.popup');
function openPopup() {
    editPopup.classList.add('popup_opened');
};

const closePopupButton = document.querySelector('.popup__close-button');
closePopupButton.addEventListener('click', closePopup);
function closePopup() {
    editPopup.classList.remove('popup_opened');
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
};

const submitPopupButton = document.querySelector('.popup__submit-button');
submitPopupButton.addEventListener('click', submitPopup);
function submitPopup() {
    editPopup.classList.remove('popup_opened');
};

const userName = 'Жак-Ив Кусто';
const userJob = 'Исследователь океана';

const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');

titleProfile.textContent = userName;
subtitleProfile.textContent = userJob;

const nameInput = document.querySelector('.popup__field_name');
const jobInput = document.querySelector('.popup__field_job');
nameInput.value = userName;
jobInput.value = userJob;

const formElement = document.querySelector('.popup__container');

function handleFormSubmit (evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    submitPopup();
};

formElement.addEventListener('submit', handleFormSubmit);
