import { useEffect, useState } from "react";
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialUser().then((promis) => {
      setUserName(promis.name);
      setUserDescription(promis.about);
      setUserAvatar(promis.avatar);
    })
    .catch((err) => {
      console.log(err);
    });    
  },[])

  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards)
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  return (
    <main className="content">
        <section className="profile">
          <button onClick={onEditAvatar}  className="profile__button">
            {userAvatar && (<img src={userAvatar} alt={`Avatar ${userName}`} className="profile__avatar"/>)}
          </button>

          <div className="profile__info">
            <div className="profile__main">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements" aria-label="Фотографии мест">
          <ul className="elements__items">
         { cards.reverse().map((data) => {
    return (
       <Card card={data} key={data._id} onCardClick={onCardClick}/>
    )
  })}
          </ul>
        </section>
      </main>
  )
}

export default Main;