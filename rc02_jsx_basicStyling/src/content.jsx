
//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

import img2 from "./img/strasbourg-7270721__340.webp"

import './Content.css'

const Content = () => {
    const imgStyle = {
        display: "block",
        width: "300px",
        margin: "1rem auto"
    }
 
  return (
    <div className="content">
        {/* inline style */}
        {/* bu bir jsx yorum satırıdır */}

        <h2 style={{color:"red"}}>React JS</h2>
        <p style={{backgroundColor: "lightgreen"}}>React bir JS kütüphanesidir.</p>

        <img 
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2020/02/20/08/42/heavy-rain-4864257__340.jpg" />

        <img style={imgStyle} src={img2} alt="img2" />

        <p className="par-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quam. Dolor ipsum culpa sint vero non at neque illum alias quia veritatis sit facere amet totam cum, nostrum, et ex!</p>
    </div>
  )
}

export default Content