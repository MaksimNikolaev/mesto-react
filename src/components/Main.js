import { useEffect, useState, useContext } from "react";
import api from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards()
    .then((cards) => {setCards(cards)})
    .catch((err) => {console.log(err)});
  },[])

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

  return (
    <main className="content">
        <section className="profile">
          <button onClick={onEditAvatar}  className="profile__button">
            {currentUser.avatar && (<img src={currentUser.avatar} alt={`Avatar ${currentUser.name}`} className="profile__avatar"/>)}
          </button>

          <div className="profile__info">
            <div className="profile__main">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements" aria-label="Фотографии мест">
          <ul className="elements__items">
         { cards.map((data) => {
    return (
       <Card card={data} key={data._id} onCardClick={onCardClick} onCardLike={handleCardLike} onTrashClick={handleCardDelete}/>
    )
  })}
          </ul>
        </section>
      </main>
  )
}

export default Main;