
import btnStyle from './Button.module.css'

//* module.css unique className'ler ürettiği için istenmeyen
//* stil ezilmeleri olmaz.

const Button = ({btnName}) => {
  return (
    <div className={btnStyle["title"]} >
      <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  )
}

export default Button