import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup';
//import './App.css';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getInitialUser().then((promis) => {
      setCurrentUser(promis);
    })
    .catch((err) => {
      console.log(err);
    });    
  },[])

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  } 

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser() {
    api.setUserInfo(currentUser)
    .then((promis) => {
      setCurrentUser(promis);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}> 
  <div className="page">
    <div className="container">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <PopupWithForm name="addPlace" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} textButton="Создать">
      <input
            type="text"
            id="place"
            className="popup__input popup__input_data_place"
            name="name"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
          />
          <span id="place-error"></span>
          <input
            type="url"
            id="link"
            className="popup__input popup__input_data_link"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error"></span>
      </PopupWithForm>
      <PopupWithForm name="editAvatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} textButton="Сохранить">
      <input
            type="url"
            id="avatar"
            className="popup__input popup__input_data_avatar"
            name="avatar"
            placeholder="Введите ссылку на фотографию"
            required
          />
          <span id="avatar-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>    
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
