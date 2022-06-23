
import Button from '../button/Button'
import cardStyle from './Card.module.css'

// Eger CSS'deki class adi kebap-case seklinde yazilmis ise
// module ile bu class'a erismek icin ornekte goruldugu gibi
// koseli parentez ile erisim yapilir. Koseli parentez erisimi
// en garanti yontemdir.
// //*.ORN: moduleName["class-adi"]


const Card = ({img, btnName, dil}) => {
  return (
    <div>
      <h1 className={cardStyle["title"]} >{dil}</h1>
      <img className={cardStyle["images"]} src={img} alt="" />
      <Button btnName={btnName}/>
    </div>
  )
}

export default Card