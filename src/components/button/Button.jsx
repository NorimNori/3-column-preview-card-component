import './button.scss'

const Button = ({title}) => {
  return (
    <button className={`card__button ${title}-button`} type='button'>Learn More</button>
  )
}

export default Button