import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card} style={{ background: props.color }}>
      <img src={props.icon} alt={props.title} />

      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>

      <button>Learn More</button>

    </div>
  )
}

export default Card;