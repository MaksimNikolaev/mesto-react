import { useEffect, useState } from "react";
import api from '../utils/Api';

function Main(props) {
  const [userName, setuserName] = useState('');
  const [userDescription, setuserDescription] = useState('');
  const [userAvatar, setuserAvatar] = useState('');

  useEffect(() => {
    api.getInitialUser().then((promis) => {
      setuserName(promis.name);
      setuserDescription(promis.about);
      setuserAvatar(promis.avatar);
    })
  })
  return (
    <main className="content">
        <section className="profile">
          <button onClick={props.onEditAvatar}  className="profile__button">
            <img src={userAvatar} alt={`Avatar ${userName}`} className="profile__avatar"/>
          </button>

          <div className="profile__info">
            <div className="profile__main">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements" aria-label="Фотографии мест">
          <ul className="elements__items"></ul>
        </section>
      </main>
  )
}

export default Main;