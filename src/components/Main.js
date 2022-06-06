function Main() {
  return (
    <main className="content">
        <section className="profile">
          <button onClick={handleEditAvatarClick}  className="profile__button">
            <img className="profile__avatar"/>
          </button>

          <div className="profile__info">
            <div className="profile__main">
              <h1 className="profile__title"></h1>
              <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements" aria-label="Фотографии мест">
          <ul className="elements__items"></ul>
        </section>
      </main>
  )
}

function handleEditAvatarClick() {
  const popupAvatar = document.querySelector('.popup_updateAvatar');
  popupAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
  const popupProfile = document.querySelector('.popup_edit');
  popupProfile.classList.add('popup_opened');
}

function handleAddPlaceClick() {
  const popupAddCard = document.querySelector('.popup_add');
  popupAddCard.classList.add('popup_opened');
}

export default Main;