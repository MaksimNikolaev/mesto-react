import { useContext } from "react";
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
  
  const currentUser = useContext(CurrentUserContext);

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
       <Card card={data} key={data._id} onCardClick={onCardClick} onCardLike={onCardLike} onTrashClick={onCardDelete}/>
    )
  })}
          </ul>
        </section>
      </main>
  )
}

export default Main;