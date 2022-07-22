function Card(props) {
  return (
    <div className="card-container" onClick={() => props.handleCardClick(props.index)}>
      <div>
        <img src={props.imgData.src} alt={`${props.imgData.name} img`} />
      </div>
      <p>{props.imgData.name}</p>
    </div>
  )
}

export default Card;
