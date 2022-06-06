function Main(props) {
  return (
    <main className="content">
        <section className="profile">
          <button onClick={props.onEditAvatar}  className="profile__button">
            <img className="profile__avatar"/>
          </button>

          <div className="profile__info">
            <div className="profile__main">
              <h1 className="profile__title"></h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle"></p>
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