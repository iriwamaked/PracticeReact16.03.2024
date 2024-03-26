import './Images.css';
export function Images() {
    const images=[
        {name: "Cвято-Преображенський собор", img: 'img1.jpg'},
        {name: "Головна площа Болграду з пам'яткою", img: 'img2.jpg'},
        {name: "Cвято-Преображенський Собор ", img: 'img3.jpg'},
        {name: "Алея закоханих", img: 'img4.jpg'},
        {name: "Bolgrad Wine Fest", img: 'img5.jpg'},
        {name: "Пам'ятка болгарським ополченцям ", img: 'img6.jpg'},

    ]
  return (
    <div className='img-container'>
       
        {images.map(el => (
            <div className='card'>
                <h3 className='imgH3'>{el.name}</h3>
                <img src={el.img} alt={el.name} className="img"/>
            </div>
        ))}
   
    </div>
    
  )
}
