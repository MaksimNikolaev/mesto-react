function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }  
  return (
    <li className="elements__item">
        <div className="elements__cover">
          <div className="elements__photo-container">
            <img src={card.link} alt={card.name} className="elements__photo" onClick={handleClick}/>
          </div>
          <div className="elements__info">
            <h2 className="elements__title">{card.name}</h2>
            <div className="elements__group">
              <button type="button" className="elements__like"></button>
              <p className="elements__count-like">{card.likes.length}</p>
            </div>
          </div>
          <button type="button" className="elements__trash"></button>
        </div>
      </li>
  )
}

export default Card;