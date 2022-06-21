import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
//import './App.css';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialUser().then((promis) => {
      setCurrentUser(promis);
    })
    .catch((err) => {
      console.log(err);
    });    
  },[])

  useEffect(() => {
    api.getInitialCards()
    .then((cards) => {setCards(cards)})
    .catch((err) => {console.log(err)});
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

  function handleUpdateUser(currentUser) {
    api.setUserInfo(currentUser)
    .then((promis) => {
      setCurrentUser(promis);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(currentUser) {
    api.updateAvatar(currentUser)
    .then((promis) => {
      setCurrentUser(promis);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {setCards((state) => state.map((c) => c._id === card._id ? newCard : c))})
      .catch((err) => {console.log(`Ошибка: ${err}`)});  
  }

    function handleCardDelete(card) {
      api.removeCard(card._id)
        .then(() => {setCards((state) => state.filter((item) => item !== card))})
        .catch((err) => {console.log(`Ошибка: ${err}`)});     
    }

    function handleAddPlaceSubmit(card) {
      api.addCard(card.name, card.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
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
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}  
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick} 
        cards={cards} 
        onCardLike={handleCardLike} 
        onCardDelete={handleCardDelete}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>    
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
