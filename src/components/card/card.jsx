import './card.scss'

function Card({img, name,description,price}) {
    return <div className="card row">
        <div className="image">
            <img alt='' src={'http://localhost:3001/img/'+ img}></img>
        </div>

        <div className="info column">
            <p className='name'>{name}</p>
            <p className='desc'>{description}</p>
            <p className='price'>Стоимость: {price}</p>
        </div>
    </div>;
}

export default Card;