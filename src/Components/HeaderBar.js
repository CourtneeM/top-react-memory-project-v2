import Score from './Score';

function HeaderBar(props) {
  return (
    <header>
      <h1>Memory Game</h1>
      <Score score={props.score} highScore={props.highScore} />
    </header>
  )
}

export default HeaderBar;