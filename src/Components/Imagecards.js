import './Imagecards.css'

const Imagecards = ({img,text}) => {
    return ( 
        <div className="imagecards-body">            
            <img className='imagecards-img-body' src={img} alt={text} />
            <p>{text}</p>                        
        </div>
     );
}
 
export default Imagecards;