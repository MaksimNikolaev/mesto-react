function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  
  return (
    <li className="elements__item">
        <div className="elements__cover">
          <div className="elements__photo-container">
            <img src={props.card.link} alt={props.card.name} className="elements__photo" onClick={handleClick}/>
          </div>
          <div className="elements__info">
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__group">
              <button type="button" className="elements__like"></button>
              <p className="elements__count-like">{props.card.likes.length}</p>
            </div>
          </div>
          <button type="button" className="elements__trash"></button>
        </div>
      </li>
  )
}

export default Card;